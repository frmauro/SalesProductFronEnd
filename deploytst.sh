#!/bin/bash
########################################################

## Shell Script to Build Docker Image and run.

########################################################


result=$( docker images -q salesproductfrontend )
if [[ -n "$result" ]]; then
echo "image exists"
 docker rmi -f salesproductfrontend
else
echo "No such image"
fi

echo "build the docker image"
echo "built docker images and proceeding to delete existing container"

result=$( docker ps -q -f name=salesproductfrontend )
if [[ $? -eq 0 ]]; then
echo "Container exists"
 docker container rm -f salesproductfrontend
echo "Deleted the existing docker container"
else
echo "No such container"
fi

cp -a /home/francisco/estudos/azuredevops/myagent/_work/12/s/.  /home/francisco/estudos/azuredevops/myagent/_work/r11/a/

docker build -t salesproductfrontend .

echo "built docker images and proceeding to delete existing container"
echo "Deploying the updated container"

docker run --name salesproductfrontend -d -p 8085:80 --link apigetway salesproductfrontend

echo "Deploying the container"
