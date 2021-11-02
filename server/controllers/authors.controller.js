const Author = require('../models/authors.model');

module.exports = {

  findAllAuthors: (req, res) => {
    Author.find({})
      .then((allAuthors) => {
        console.log(allAuthors);
        res.json({ theAuthors: allAuthors });
      })
      .catch((err) => console.log(err))
  },

  findOneAuthor: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((oneAuthor) => {
        console.log(oneAuthor);
        res.json(oneAuthor);
      })
      .catch((err) => console.log(err))
  },

  createNewAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => {
        console.log(newAuthor);
        res.json(newAuthor);
      })
      .catch(err => res.status(400).json(err))
  },

  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((deletedAuthor) => {
        console.log(deletedAuthor);
        res.json(deletedAuthor);
      })
      .catch((err) => console.log(err))
  },

  updateAuthor: (req, res) => {
    Author.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    )
      .then((updatedAuthor) => res.json(updatedAuthor))
      .catch(err => res.status(400).json(err))
  }
}