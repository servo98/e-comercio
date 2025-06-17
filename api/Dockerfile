# Crear imagen basándose en Node.js y Alpine
FROM node:20-alpine3.19

# Establecer el directorio de trabajo dentro del la imagen
WORKDIR /api

# Copiar nuestro código dentro de la imagen
# No se copia node_modules para que se instalen las dependencias según el OS de la image
COPY package.json .
COPY yarn.lock .

# Instalamos dependencias dentro de la imagen
RUN yarn

COPY . .

# Exponer el puerto 8080
EXPOSE 8080

# Este comando se usa para levantar los contenedores basados en esta imagen
CMD ["npm", "run", "dev"]