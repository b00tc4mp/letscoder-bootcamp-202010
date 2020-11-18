echo watching for sass... :\)
fswatch **/*.sass | xargs -o -n1 -I{} ./run-sass.sh