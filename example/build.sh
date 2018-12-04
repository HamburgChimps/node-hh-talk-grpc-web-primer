#!/bin/bash

echo '[+] Ensuring envoy image is built'
./ensure.sh
echo '[+] Building protbufs'
protoc -I=. todo.proto \
  --js_out=import_style=commonjs:./frontend/src/todo \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend/src/todo
echo '[+] Success application is ready to be started'
