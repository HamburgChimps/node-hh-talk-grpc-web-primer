#!/bin/bash

if docker inspect helloworld/envoy:latest  > /dev/null 2>&1 ; then
  echo "[+] Envoy image exists"
else
  echo "[-] Envoy image does not exist"
  echo "[+] Buidling..."
  docker build -t helloworld/envoy -f ./envoy.Dockerfile .
  echo "[+] Built and tagged as helloworld/envoy"
fi
