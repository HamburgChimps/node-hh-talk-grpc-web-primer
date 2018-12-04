#!/bin/bash

echo '[+] Starting application...'
docker run -d -p 8080:8080 --network=host helloworld/envoy
node ./server &
npm run start --prefix ./frontend
