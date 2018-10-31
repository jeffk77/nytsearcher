const router = require('express').Router();
const articleController = require("../../controller/articleController");

/* GET users listing. */
router.route('/saved')
  // Query MongoDB for all saved articles
  .get(articleController.findAll)
  // Save Articles to the database
  .post(articleController.create);

// Delete saved articles
router.route('/articles/:id')
  .delete(articleController.remove);

module.exports = router;
