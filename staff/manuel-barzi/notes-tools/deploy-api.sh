#!/bin/sh

# rm -rf ~/Desktop/notes-api-server

# mkdir ~/Desktop/notes-api-server

# git init ~/Desktop/notes-api-server

# cp -r ./notes-api ~/Desktop/notes-api-server
# cp -r ./notes-data ~/Desktop/notes-api-server
# cp -r ./notes-errors ~/Desktop/notes-api-server
# cp -r ./notes-middlewares ~/Desktop/notes-api-server
# cp -r ./notes-utils ~/Desktop/notes-api-server

cd ~/Desktop/notes-api-server

# heroku create notes-api-server-2

# cp ./notes-tools/package.json ~/Desktop/notes-api-server

# git add --all; git commit -m 're-deploy'; git push heroku master

heroku logs --tail