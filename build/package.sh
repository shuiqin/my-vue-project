#!/bin/sh
packagename=$1
#date=$(date + %y%m%d_%H%M)
echo “Begin pack:${packagename}_${date}”
#npm run build
cd ./dist
zip -r ${packagename}_${date}.zip ./*