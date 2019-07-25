# VARIABLE=VALUE sh curl-scripts/game/create.sh

curl --include --request POST "https://game-project-api.herokuapp.com/games/" \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{}'

echo
