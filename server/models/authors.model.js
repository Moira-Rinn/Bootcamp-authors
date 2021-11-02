const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

  authorFirstName: {
    type: String,
    required: [true],
    minLength: [3, "First name must be 3 or more characters"]
  },
  authorLastName: {
    type: String,
    required: [true],
    minLength: [3, "Last name must be 3 or more characters"]
  }
}, { timestamps: true })

const Author = mongoose.model("author", AuthorSchema);

module.exports = Author;