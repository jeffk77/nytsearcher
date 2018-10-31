const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(articleModel => res.json(articleModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(articleModel => res.json(articleModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(articleModel => articleModel.remove())
      .then(articleModel => res.json(articleModel))
      .catch(err => res.status(422).json(err));
  }
};
