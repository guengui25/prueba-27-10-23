//==================================================
// GET = Obtener la mascota con el id
//==================================================

//Así consigo la documentación de tipos de express
// @deno-types="npm:@types/express"

import { Request, Response } from "npm:express@4.18.2"; // importo los tipos de express Request y Response

//Importo los modelos de la base de datos

// import xxx from "./db/xxx.ts";

import MascotaModel from "../db/mascota.ts";  // Importo el modelo de la base de datos
                                                // PlantillaModelType es el tipo de dato que devuelve el import

const get_id = async (req: Request, res: Response) => { // async es para que la funcion sea asincrona
  
    try {
    const { id } = req.params; // Obtengo el dni de los parametros de la peticion

    const mascota = await MascotaModel.findOne({ id }).exec(); // Busco el id de X en la base de datos

    if (!mascota) { // Si no existe X con ese id, devuelvo un error

      res.status(404).send("Mascota not found"); // Devuelvo un error

      return; // Corto la ejecucion de la funcion
    }

    res.status(200).send({ // Si existe X con ese dni, devuelvo X
      nombre: mascota.nombre,
      descripcion: mascota.descripcion,
      tipo: mascota.tipo,
      id: mascota._id.toString(),
    });

    } catch (error) {

        res.status(500).send(error.message); // Si hay un error, devuelvo un error 500

        return; // Corto la ejecucion de la funcion
    }
};

export default get_id; // Exporto la funcion