const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const heroSchema = new Schema(
  {

    name: {type: String, required: true},
    nickname: {type: String, required: true, unique: true},
    powers: [{type: String}],
  }, {
    timestamps: true
  }
);


const HeroModel = mongoose.model('Hero', heroSchema);
module.exports = HeroModel;
