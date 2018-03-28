#!/bin/bash
yarn run build:dynamicbundles
cd node-api
node index.js
