<!-- Construir imgs -->

`docker build -t frontend ./app`
`docker build -t backend ./api`

<!-- Descargar img de mongo -->

`docker pull mongo:latest`

<!-- Crear contenedor de front -->

`docker run -d -p 5173 --name fronntend1 frontend`

<!-- Crear una red -->

`docker network create tienda-net`

<!-- Crear un volume -->

`docker volume create tienda-volume`

<!-- Crear contenedor de mongo -->

`docker run -d -p 27017 --network tienda-net --name tienda-db mongo:latest`

<!-- Crear contenedor de backend -->

`docker run -d -p 8080 --network tienda-net --name backend1 mongo:latest`
