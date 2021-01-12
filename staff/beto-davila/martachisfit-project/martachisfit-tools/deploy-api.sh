#!/bin/sh

# rm -rf ~/Desktop/martachisfit-api-server

# mkdir ~/Desktop/martachisfit-api-server

# git init ~/Desktop/martachisfit-api-server

# cp -r ./martachisfit-api ~/Desktop/martachisfit-api-server
# cp -r ./martachisfit-data ~/Desktop/martachisfit-api-server
# cp -r ./martachisfit-errors ~/Desktop/martachisfit-api-server
# cp -r ./martachisfit-utils ~/Desktop/martachisfit-api-server

cd ~/Desktop/martachisfit-api-server
# heroku create martachisfit-api-server

# cp ./martachisfit-tools/package.json ~/Desktop/martachisfit-api-server

# git add --all; git commit -m 'initial deploy'; git push heroku master

heroku logs --tail

