import { Schema, model, SchemaType } from "mongoose";


const usuario = new Schema ({
    Nombre: String,
    username: String,
    password: String,
    imagen: String,
    criticas: [{
        type: Schema.Types.ObjectId, 
        ref: 'pelicula'
    }]
});

export default model("usuario", usuario);