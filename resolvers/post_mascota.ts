//==================================================
// POST = Nueva mascota
//==================================================

//Así consigo la documentación de tipos de express
// @deno-types="npm:@types/express"
import { Request, Response } from "npm:express@4.18.2"; // importo los tipos de express Request y Response

//Importo los modelos de la base de datos

// import xxx from "./db/xxx.ts";

import MascotaModel from "../db/mascota.ts";  // Importo el modelo de la base de datos
                                                // PlantillaModelType es el tipo de dato que devuelve el import

import { tipoMascota } from "../types.ts"; // Importo el enum de tipos

const post_mascota = async (req: Request, res: Response) => { // async es para que la funcion sea asincrona
    try {
        const { nombre, descripcion, tipo } = req.body; // Obtengo los datos del body de la peticion
        if (!nombre || !descripcion || !tipo) { // Si no estan todos los datos, devuelvo un error
        
            res.status(400).send("nombre, descripcion, age y tipo are required"); // Devuelvo un error

            return; // Corto la ejecucion de la funcion

        }

        if(tipo != tipoMascota){
            res.status(400).send("tipo not valid"); // Devuelvo un error

            return; // Corto la ejecucion de la funcion

        }
    
        const newMascota = new MascotaModel({ nombre, descripcion, tipo}); // Creo un nuevo X con los datos del body de la peticion
        
        //https://mongoosejs.com/docs/documents.html -> Utilizo documentos de Mongo para guardar el nuevo X en la base de datos

        await newMascota.save(); // Guardo el nuevo X en la base de datos
    
        res.status(200).send({
        nombre: newMascota.nombre,
        descripcion: newMascota.descripcion,
        tipo: newMascota.tipo,
        id: newMascota._id.toString(),
        });

    } catch (error) {

        res.status(500).send(error.message); // Si hay un error, devuelvo un error 500

        return; // Corto la ejecucion de la funcion
    }
};
    
export default post_mascota; // Exporto la funcion
