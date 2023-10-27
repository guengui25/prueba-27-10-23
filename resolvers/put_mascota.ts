//==================================================
// PUT = Actualizar una mascota con el id
//==================================================

//Así consigo la documentación de tipos de express
// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2"; // importo los tipos de express Request y Response

//Importo los modelos de la base de datos

// import xxx from "./db/xxx.ts";

import MascotaModel from "../db/mascota.ts";  // Importo el modelo de la base de datos
                                                // PlantillaModelType es el tipo de dato que devuelve el import

import { tipoMascota } from "../types.ts";

const put_mascota = async (req: Request, res: Response) => {

  try {
    const { id } = req.params; // Obtengo el dni de los parametros de la peticion

    const { nombre, descripcion, tipo } = req.body; // Obtengo los datos del body de la peticion

    if (!nombre || !descripcion || !tipo) { // Si no estan todos los datos, devuelvo un error
    
        res.status(400).send("nombre, descripcion, age y tipo are required"); // Devuelvo un error

        return; // Corto la ejecucion de la funcion

    }

    if(tipo != tipoMascota){
        res.status(400).send("tipo not valid"); // Devuelvo un error

        return; // Corto la ejecucion de la funcion


    }

    const updatedMascota = await MascotaModel.findOneAndUpdate( // Actualizo la persona con el dni dado
      { id }, // Busco la persona con el dni dado

      { nombre, descripcion, tipo }, // Actualizo los datos de la persona con los datos del body de la peticion

      { new: true } // Con new: true, devuelvo la persona actualizada

    ).exec(); // Ejecuto la funcion

    if (!updatedMascota) { // Si no existe X con el dni dado, devuelvo un error

      res.status(404).send("Mascota not found"); // Devuelvo un error

      return; // Corto la ejecucion de la funcion
    }

    res.status(200).send({
        nombre: updatedMascota.nombre,
        descripcion: updatedMascota.descripcion,
        tipo: updatedMascota.tipo,
        id: updatedMascota._id.toString(),
    });

    } catch (error) {

        res.status(500).send(error.message); // Si hay un error, devuelvo un error 500

        return; // Corto la ejecucion de la funcion
    }
};

export default put_mascota; // Exporto la funcion