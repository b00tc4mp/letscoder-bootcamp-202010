#rm-rf ~/Desktop/gameloop-api-deploy

#mkdir ~/Desktop/gameloop-api-deploy

#git init ~/Desktop/gameloop-api-deploy

#cp -r ../gameloop-api ~/Desktop/gameloop-api-deploy
#cp -r ../gameloop-data ~/Desktop/gameloop-api-deploy
#cp -r ../gameloop-doc ~/Desktop/gameloop-api-deploy
#cp -r ../gameloop-errors ~/Desktop/gameloop-api-deploy

#cd ~/Desktop/gameloop-api-deploy

#heroku create gameloop-api-server

cp ./gameloop-tools/package.json ~/Desktop/gameloop-api-deploy

git add --all; git commit -m 'initial deploy'; git push heroku master