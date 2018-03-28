#!/bin/bash
yarn run build:dynamicbundles
cd node-api
node app.js
