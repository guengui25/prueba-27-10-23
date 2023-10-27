//==================================================
// GET = Obtener todas las mascotas
//==================================================

//Así consigo la documentación de tipos de express
// @deno-types="npm:@types/express"

import { Request, Response } from "npm:express@4.18.2"; // importo los tipos de express Request y Response

//Importo los modelos de la base de datos

// import xxx from "./db/xxx.ts";

import MascotaModel from "../db/mascota.ts";  // Importo el modelo de la base de datos
                                                // MascotaModelType es el tipo de dato que devuelve el import

const get_todas = async (req: Request, res: Response) => { // async es para que la funcion sea asincrona
  
    try {

    const mascotas = await MascotaModel.find().exec(); // Busco todas las mascotas

    if (!mascotas) {

      res.status(404).send("Mascotas not found"); // Devuelvo un error

      return; // Corto la ejecucion de la funcion
    }

    res.status(200).send(mascotas.map(mascota =>{ //Devolvemos todas las mascotas
      return {nombre: mascota.nombre,
              descripcion: mascota.descripcion,
              tipo: mascota.tipo,
              id: mascota._id.toString()}
    }))

    } catch (error) {

        res.status(500).send(error.message); // Si hay un error, devuelvo un error 500

        return; // Corto la ejecucion de la funcion
    }
};

export default get_todas; // Exporto la funcion
