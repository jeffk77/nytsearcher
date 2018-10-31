const router = require('express').Router();
const articleController = require("../../controller/articleController");

router.route('/saved')

  // Mongo Query - Find all articles
  .get(articleController.findAll)

  // Mongo - Saving Articles to DB
  .post(articleController.create);

// Mongo - Deleting Articles as per choice
router.route('/articles/:id')
  .delete(articleController.remove);

module.exports = router;
