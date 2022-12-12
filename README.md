## Autor

Jose Rodriguez

Dudas o sugerencia.
https://jrodrigu3.github.io

## Description

Backend usado para la pruebas de PULPO
- Este este link encontrarás el Front https://github.com/jrodrigu3/Front-pulpo



Tegnologias extras usadas
-- Docker -- https://docs.docker.com/desktop/install/windows-install/
-- Postgress

-- Para poder iniciar el back, necesitas descargarte la extensión llamada YAML.

Instalción de DB
  Una vez ya tengas instalado e iniciado docker, y tengas la extensión instalada, necesitas correr los siguientes comandos en la consola.

  - docker-compose up -d postgres
  - docker-compose up -d pgadmin
  
  Recuerda que para abrir la base de datos en pgadmin, debes de hacer la conexion correspondiente y coger la ip del contenedor que está arriba referente a Postgress

  Usando el comando
    docker ps -- copiar la id que aparece en CONTAINER ID correspondiente al contenedor arriba de postgress
    Luego    doker inspect IdRecienCopiada    ..... Para buscar la ip del contenedor y usarla en la conexión

  Tambien se pueden usar otros aplicativos como dbeaver para conectarte a la base de datos.
  
  En el archivo docker-compose.yml - Encontrarás las configuraciones de las conexiones a la db


  finalmente - npm run start:dev


## Installation

```bash
$ npm install
```

# Run App
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
