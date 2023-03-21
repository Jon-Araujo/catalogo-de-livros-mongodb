const mongoose = require('mongoose')

const Livro = mongoose.model('Livro', {
  id: Number,
  titulo: String,
  editora: String,
  resumo: String,
  autor: String
})

module.exports = Livro