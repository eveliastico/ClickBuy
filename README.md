# Instrucciones para la Configuración y Ejecución del Proyecto

## **IMPORTANTE**:

1. **Crear la Base de Datos en MongoDB**  
   Nombre de la base de datos: `ClickBuy`

2. **Colecciones**:  
   Las siguientes colecciones deben ser creadas en la base de datos:
   - `itemcarritos`
   - `pedidos`
   - `productos`
   - `tiendas`
   - `usuarios`

## **Instalación de Dependencias**:

Asegúrate de tener los siguientes módulos instalados:

- **Express**  
  Para instalarlo, ejecuta:
  ```bash
  npm i express
  ```

- **Body-Parser**  
  Para instalarlo, ejecuta:
  ```bash
  npm i body-parser
  ```

- **Dotenv**  
  Para instalarlo, ejecuta:
  ```bash
  npm i dotenv
  ```

- **Módulos adicionales**:  
  Se han agregado los siguientes módulos para mejorar el logging:
  - `winston`
  - `winston-express`
  - `morgan`

  Para instalarlos, ejecuta:
  ```bash
  npm i winston winston-express morgan
  ```

## **Recomendaciones**:

### Instalar `nodemon` para el desarrollo:
Se recomienda instalar `nodemon` para no tener que reiniciar el servidor manualmente cada vez que realices cambios en el código. `nodemon` monitorea los archivos y reinicia el servidor automáticamente cuando detecta cambios.

Para instalar `nodemon`, ejecuta:
```bash
npm i nodemon -D
```
> **Nota**: El `-D` indica que es una dependencia de desarrollo, no necesaria para el funcionamiento en producción.

### Configuración de `scripts` en `package.json`:

Añadir la siguiente configuración a la sección `scripts` de tu archivo `package.json`:
```json
"scripts": {
  "start": "node src/app.js",
  "dev": "nodemon index.js"
}
```

### Para correr la aplicación:

Usa el siguiente comando para ejecutar la aplicación en modo desarrollo:
```bash
npm run dev
```

Esto iniciará el servidor con `nodemon`, que se reiniciará automáticamente cuando detecte cambios en el código.

---

¡Eso es todo! Ahora deberías estar listo para comenzar con el proyecto. Si tienes algún problema o duda, no dudes en revisar los logs o preguntar.
