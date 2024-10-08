'use strict';
const express = require('express');
const router = express.Router();

const controller = require('../controllers/indexController');

// TODO create table data
// router.get("/createTables", (req, res) => {
//   let models = require("../models");
//   models.sequelize.sync().then(() => {
//     res.send("Table created!");
//   });
// });

// Get Category
router.use(controller.getCategories);

// routes
router.get('/', controller.showHomepage);

router.get('/search', controller.search);

router.get('/category', controller.showCategory);

router.get('/subCategory', controller.showSubCategory);

router.get('/article', controller.showArticle);

router.post('/comment', controller.makeComment);

router.delete('/comment', controller.deleteComment);

router.get('/tag', controller.showTag);

router.get('/:page', controller.showPage);

// router.get("/tag/:tag", controller.showTag);

module.exports = router;
