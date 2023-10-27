# INSTRUCCIONES
## Objetivo:
Desarrollar un API REST que permita realizar operaciones básicas de lectura, escritura, borrado y actualización de datos en una Base de Datos, utilizando una temática relacionada con “Mascotas”.

## Temática: “Mascotas”
En esta temática, debes crear un API que gestione datos relacionados con mascotas. Cada mascota tiene un nombre, una descripción y un tipo. El tipo es el nombre de animal y sólo se deben aceptar “perros”, “gatos” y “serpientes”. Los usuarios pueden agregar nuevas mascotas, ver una lista de todas las mascotas, obtener información detallada de una mascota específica, actualizar la información de una mascota y eliminar mascotas.

## Instrucciones:
- Crea un API REST utilizando Deno.
- Utiliza una base de datos MongoDB
- Implementa los siguientes endpoints:

## Endpoints:
- GET /api/mascotas: Obtiene una lista de todas las mascotas.

- GET /api/mascotas/:id: Obtiene una mascota por su ID.

Si no existe una mascoda con el id proporcionado deberá devolver un error 404
- POST /api/mascotas: Crea una nueva mascota.
Si se pide añadir una mascota de un tipo no adecuado (perros, gatos y serpientes) deberá devolver un error 400

- PUT /api/mascotas/:id: Actualiza una mascota existente por su ID.
Si no existe una mascoda con el id proporcionado deberá devolver un error 404
Si se pide modificar una mascota a un tipo no adecuado (perros, gatos y serpientes) deberá devolver un error 400

- DELETE /api/mascotas/:id: Borra una mascota por su ID.
Si no existe una mascoda con el id proporcionado deberá devolver un error 404

## Evaluación:
Se evaluará la funcionalidad, el diseño del API, la implementación de la base de datos y la corrección del código.

## Entrega:
- Enlace a una release de github
- Archivo comprimido generado en la release
- Enlace al despliegue de la aplicación en Deno Deploy.
- La falta de uno de estos tres elementos supone un 0 en el ejercicio

(La aplicación en Deno Deploy debe ser completamente funcional, guardando los datos en la DDBB correctamente)