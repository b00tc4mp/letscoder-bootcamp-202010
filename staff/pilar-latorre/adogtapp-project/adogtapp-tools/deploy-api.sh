#!/bin/sh

# rm -rf ~/Desktop/adogtapp-api-deploy

# mkdir ~/Desktop/adogtapp-api-deploy

# git init ~/Desktop/adogtapp-api-deploy

# cp -r ./adogtapp-api ~/Desktop/adogtapp-api-deploy
# cp -r ./adogtapp-data ~/Desktop/adogtapp-api-deploy
# cp -r ./adogtapp-doc ~/Desktop/adogtapp-api-deploy

cd ~/Desktop/adogtapp-api-deploy

# heroku create adogtapp-api-server

# cp ./adogtapp-tools/package.json ~/Desktop/adogtapp-api-deploy

# git add --all; git commit -m 'initial deploy'; git push heroku master

heroku logs --tail