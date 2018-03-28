#!/bin/bash
if [ "$dev" = true ] ; then
    yarn run watch & yarn start
else
    yarn run build:dynamicbundles
    cd node-api
    node index.js
fi