//Creo y exporto los tipos de datos que voy a usar

export type mascota = {
    nombre: string;
    descripcion: string;
    tipo: tipoMascota;
  };


  // Limitar los tipos a perros, gatos y serpientes
  export enum tipoMascota {
    perro,
    gato,
    serpiente
  }
  