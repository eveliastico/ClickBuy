IMPORTANTE:
Crear la BD en Mongo
Nombre: ClickBuy
Collecciones:
    - itemcarritos
    - pedidos
    - productos
    - tiendas
    - usuarios
Se necesitan instalar los modulos de:
    - Express
    npm i express
    - body-parser
    npm i body-parser
    - npm i dotenv
Se agregaron los modulos winston, winstone-express y morgan:
    - npm i winston winston-express morgan
Recomendacion
    Instalar nodemon para que no tengan que correr el archivo cada que lo actualicen
    Con nodemon registra cada que se hace alguna actualizacion en el codigo y se
    reinicia el servidor automaticamente.
    npm i nodemon -D <- La D es para indicar que solo es para desarrollo y la app no la requiere para funcionar.
    Adicionalmente en Scripts se tiene que añadir lo siguiente: "dev": "nodemon index.js"
    "scripts": {
        "start": "node src/app.js",
        "dev": "nodemon index.js"
    }
    Para correr la app se usara npm : npm run dev
  

