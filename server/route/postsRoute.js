const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async function (req, res){
  const posts = await postsService.getPosts();
  res.json(posts);
}); //todos os posts
router.get('/posts/:id', async function (req, res){
  
}); //post especifico
router.post('/posts', async function (req, res){
  
}); //cria 
router.put('/posts/:id',async function (req, res){
  
}); //altera
router.delete('/posts/:id', async function (req, res){
  
}); //deleta

module.exports = router;