#!/bin/bash

cd $(dirname `[[ $0 = /* ]] && echo "$0" || echo "$PWD/${0#./}"`)

npm run build
cp index.productive.html ./dist/index.html
./node_modules/.bin/gh-pages -d dist
