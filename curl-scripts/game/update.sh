# VARIABLE=VALUE sh curl-scripts/game/update.sh

curl --include --request PATCH "https://game-project-api.herokuapp.com/games/${ID}" \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
  "game": {
    "cell": {
      "index": 1,
      "value": "X"
    },
    "over": false
  }
}'

echo
