const express = require('express');

const {
  handleCreateAuthor,
  handleGetAllAuthors,
  handleGetAuthorById,
  handleDeleteAuthorById,
  handleUpdateAuthorById,
} = require('../controllers/author.controller');

const router = express.Router();

router.post('/', handleCreateAuthor);


router.get('/:id', handleGetAuthorById);
router.get('/', handleGetAllAuthors);
router.delete('/:id', handleDeleteAuthorById);
router.put('/:id', handleUpdateAuthorById);

module.exports = { authorRouter: router };