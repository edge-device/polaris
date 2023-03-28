docker exec -it polaris-mysql-1 bash
docker exec -it polaris-mysql-1 bash
docker compose up
docker compose up --detach
curl polaris-service:8000/devices
 #uses TCP instead of unix socket

sudo setcap 'cap_net_bind_service=+ep' /usr/bin/docker
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/dockerd

/usr/bin/containerd


`>$ docker compose -f docker-compose-local.yml up`

### Restart Nginx container

`>$ docker compose restart nginx`

### Loading git submodules

The following command will download the submodules, polaris-service and web-ui, for Polaris.

`>$git submodule update --init`

If you edit the "submodule repos", then pushes will have to be forced with (might have to add '--force'):

`>$ git push origin HEAD:main`


### Test endpoints

>$ wget http://localhost:8000/v1/device/garbage/waiting_room

>$ wget https://polaris.westus3.cloudapp.azure.com/v1/device/garbage/waiting_room