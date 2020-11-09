const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: Array,
    imageURL: String,
    description: String,
    showtimes: Array
  },
  {
  timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie; 

