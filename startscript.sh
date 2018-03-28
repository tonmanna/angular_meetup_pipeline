#!/bin/bash
if [ "$dev" = true ] ; then
    cd ng-project
    yarn run watch & yarn start
else
    cd ng-project
    yarn run build:dynamicbundles
    cd ..
    cd api
    node index.js
fi