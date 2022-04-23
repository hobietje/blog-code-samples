#!/bin/bash -l
set -eou pipefail
pushd /Users/Shared/Data/src/hobietje/blog-code-samples/0002

source ../.env

X_OFFSET=200
Y_OFFSET=30

x=0
y=0

# Helpers for VT nodes
function add_url_node() {
  local url=$1
  local sha256=`echo $url | shasum -a 256 | cut -d' ' -f1`

  local vt_node=`jq \
    --arg sha256 $sha256 \
    '.data.attributes.nodes[] | select(.type == "url" and .entity_id == $sha256)' \
    graph.json`
  if [ -z "$vt_node" ]; then
    cp new_graph.json .new_graph.json
    local vt_node_idx=`jq '[.data.attributes.nodes[].index // -1] | max' -r .new_graph.json`
    jq \
      --arg index $vt_node_idx \
      --arg text $url \
      --arg entity_id $sha256 \
      --arg x $x \
      --arg y $y \
      '.data.attributes.nodes += [{"index":$index | tonumber, "type": "url", "entity_id": $entity_id, "text": $text, "x": $x, "y": $y, "fx": $x, "fy": $y} | .index += 1]' .new_graph.json \
      > new_graph.json
    rm -f .new_graph.json
  fi
}

function add_ip_node() {
  local ip=$1

  local vt_node=`jq \
    --arg ip $ip \
    '.data.attributes.nodes[] | select(.type == "ip_address" and .entity_id == $ip)' \
    graph.json`
  if [ -z "$vt_node" ]; then
    cp new_graph.json .new_graph.json
    local vt_node_idx=`jq '[.data.attributes.nodes[].index // -1] | max' -r .new_graph.json`
    jq \
      --arg index $vt_node_idx \
      --arg text $ip \
      --arg entity_id $ip \
      --arg x $x \
      --arg y $y \
      '.data.attributes.nodes += [{"index":$index | tonumber, "type": "ip_address", "entity_id": $entity_id, "text": $text, "x": $x, "y": $y, "fx": $x, "fy": $y} | .index += 1]' .new_graph.json \
      > new_graph.json
    rm -f .new_graph.json
  fi
}

function add_domain() {
  local domain=$1

  local vt_node=`jq \
    --arg domain $domain \
    '.data.attributes.nodes[] | select(.type == "domain" and .entity_id == $domain)' \
    graph.json`

  if [ -z "$vt_node" ]; then
    cp new_graph.json .new_graph.json
    local vt_node_idx=`jq '[.data.attributes.nodes[].index // -1] | max' -r .new_graph.json`
    jq \
      --arg index $vt_node_idx \
      --arg text $domain \
      --arg entity_id $domain \
      --arg x $x \
      --arg y $y \
      '.data.attributes.nodes += [{"index":$index | tonumber, "type": "domain", "entity_id": $entity_id, "text": $text, "x": $x, "y": $y, "fx": $x, "fy": $y} | .index += 1]' .new_graph.json \
      > new_graph.json
    rm -f .new_graph.json
  fi
}

# Helpers for VT links
function link_url_to_redirect_url() {
  local source=`echo $1 | shasum -a 256 | cut -d' ' -f1`
  local target=`echo $2 | shasum -a 256 | cut -d' ' -f1`

  local vt_link=`jq \
    --arg source $source \
    --arg target $target \
    '.data.attributes.links[] | select(.connection_type == "redirects_to" and .source == $source and .target == $target)' \
    graph.json`

  if [ -z "$vt_link" ]; then
    cp new_graph.json .new_graph.json
    jq \
      --arg source $source \
      --arg target $target \
      '.data.attributes.links += [{"source":$source,"target":$target,"connection_type":"redirects_to"}]' .new_graph.json \
      > new_graph.json
    rm -f .new_graph.json
  fi
}

function link_domain_to_ns_record() {
  local domain=$1
  local ns=$2

  local vt_link=`jq \
    --arg source $domain \
    --arg target $ns \
    '.data.attributes.links[] | select(.connection_type == "ns_records" and .source == $source and .target == $target)' \
    graph.json`

  if [ -z "$vt_link" ]; then
    cp new_graph.json .new_graph.json
    jq \
      --arg source $domain \
      --arg target $ns \
      '.data.attributes.links += [{"source":$source,"target":$target,"connection_type":"ns_records"}]' .new_graph.json \
      > new_graph.json
    rm -f .new_graph.json
  fi
}

function link_domain_to_url() {
  local domain=$1
  local url=`echo $2 | shasum -a 256 | cut -d' ' -f1`

  local vt_link=`jq \
    --arg source $domain \
    --arg target $url \
    '.data.attributes.links[] | select(.connection_type == "urls" and .source == $source and .target == $target)' \
    graph.json`

  if [ -z "$vt_link" ]; then
    cp new_graph.json .new_graph.json
    jq \
      --arg source $domain \
      --arg target $url \
      '.data.attributes.links += [{"source":$source,"target":$target,"connection_type":"urls"}]' .new_graph.json \
      > new_graph.json
    rm -f .new_graph.json
  fi
}

function link_domain_to_ip_resolution() {
  local domain=$1
  local ip=$2

  local vt_link=`jq \
    --arg source $domain \
    --arg target $ip \
    '.data.attributes.links[] | select(.connection_type == "resolutions" and .source == $source and .target == $target)' \
    graph.json`

  if [ -z "$vt_link" ]; then
    cp new_graph.json .new_graph.json
    jq \
      --arg source $domain \
      --arg target $ip \
      '.data.attributes.links += [{"source":$source,"target":$target,"connection_type":"resolutions"}]' .new_graph.json \
      > new_graph.json
    rm -f .new_graph.json
  fi
}

# Helpers for VT complex objects
function vt_whois() {
  local domain=$1

  local whois=`whois $domain | tr '\n' '§' | sed -n -e "s/^.*\(Domain Name: $domain\)/\\1/p"`
  echo $whois
  local IFS=§
  local lines=($whois)

  for line in "${lines[@]}"; do
    local key=`echo $line | sed -n -e 's/: \(.*\)$//p'`
    local value=`echo $line | sed -n -e 's/^\(.*\): //p' | tr '[:upper:]' '[:lower:]'`

    case $key in
    "Name Server")
      add_domain $value
      link_domain_to_ns_record $domain $value
      ;;
    esac
  done
}

# Get the current VT graph
echo "--- Fetching VT graph..."
curl --request GET \
  --header "x-apikey: ${VT_API_KEY}" \
  --url https://www.virustotal.com/api/v3/graphs/${VT_GRAPH_ID} \
  --output graph.json
jq '{"data":{"attributes":{"nodes":.data.attributes.nodes,"links":.data.attributes.links},"type":"graph"}}' graph.json > new_graph.json
y_max=`jq '.data.attributes.nodes | map(.x // 0) | max' -r graph.json`

# Seed url
echo "--- Fetching seed url..."
url0='https://js.ekb-tv.ru/trds'

x=0
y=0
add_url_node $url0

domain0=`echo $url0 | cut -d/ -f3`
echo "Domain 0: $domain0" 
y=$((y+Y_OFFSET))
add_domain $domain0
link_domain_to_url $domain0 $url0

# First redirect for .life domain
echo "--- Fetching .life redirect..."
url1=`curl $url0 -s | cut -d"'" -f 2`
echo "Url 1: $url1"

x=$((x+X_OFFSET))
y=0
add_url_node $url1
link_url_to_redirect_url $url0 $url1

domain1=`echo $url1 | cut -d/ -f3`
echo "Domain 1: $domain1" 
add_domain $domain1
link_domain_to_url $domain1 $url1

# Second redirect for .top/.xyz domain
echo "--- Fetching .xyz/.top redirect..."
url2=`curl $url1 -H "user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36" -s | sed -nE "s#.*p1:\['','(.*/).*/'\],jsFpCryptoKey.*#\1#p"`
echo "Url 2: $url2"

x=$((x+X_OFFSET))
y=$((y_max=+Y_OFFSET))
add_url_node $url2
link_url_to_redirect_url $url1 $url2

domain2=`echo $url2 | cut -d/ -f3`
echo "Domain 2: $domain2" 
x=$((x+X_OFFSET))
add_domain $domain2
link_domain_to_url $domain2 $url2

vt_whois $domain2

ip2=`dig +short $domain2`
echo "IP 2: $ip2"
x=$((x+X_OFFSET))
add_ip_node $ip2
link_domain_to_ip_resolution $domain2 $ip2

# Update VT
echo "--- Update VT graph..."
vt_before_nodes=`jq '.data.attributes.nodes | length' -r graph.json`
vt_after_nodes=`jq '.data.attributes.nodes | length' -r new_graph.json`
vt_before_links=`jq '.data.attributes.links | length' -r graph.json`
vt_after_links=`jq '.data.attributes.links | length' -r new_graph.json`

if [[ "$vt_before_nodes" != "$vt_after_nodes" || "$vt_before_links" != "$vt_after_links" ]]; then 
  echo "NODES: $vt_before_nodes > $vt_after_nodes"
  echo "LINKS: $vt_before_links > $vt_after_links"
  curl --request PATCH \
    --header "x-apikey: ${VT_API_KEY}" \
    --header "content-type: application/json" \
    --url https://www.virustotal.com/api/v3/graphs/${VT_GRAPH_ID} \
    --data @new_graph.json \
    --output graph.json
fi
popd