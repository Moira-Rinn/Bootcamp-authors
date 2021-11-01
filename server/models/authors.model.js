const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

  authorFirstName: { type: String },
  authorLastName: { type: String }
}, { timestamps: true })

const Author = mongoose.model("author", AuthorSchema);

module.exports = Author;