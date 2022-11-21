import { Schema, model } from "mongoose";

const pelicula = new Schema({
  Title: String,
  Year: Number,
  Rating: Number,
  Director: String,
  Countries: Array,
  Genre: String,
  Language: Array,
  Rated: String,
  Review: String,
  Starring: Array,
  Company: String,
  Duration: Number,
  imagen : String
});

export default model("pelicula", pelicula);
