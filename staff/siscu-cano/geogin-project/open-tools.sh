

#!/bin/bash

# Open database mongo
alacritty --working-directory /home/siscu/Documentos/letscoder-bootcamp-202010/staff/siscu-cano/geogin-project/geogin-mongo/bin -e $SHELL -c './mongod --dbpath ../data && $SHELL' & alacritty --working-directory /home/siscu/Documentos/letscoder-bootcamp-202010/staff/siscu-cano/geogin-project/ -e $SHELL -c 'code . && $SHELL' & alacritty --working-directory /home/siscu/Documentos/letscoder-bootcamp-202010/staff/siscu-cano/geogin-project/geogin-api/ -e $SHELL -c 'npm run dev && $SHELL' & alacritty --working-directory /home/siscu/Documentos/letscoder-bootcamp-202010/staff/siscu-cano/geogin-project/geogin-mongo/bin -e $SHELL -c './mongo'
