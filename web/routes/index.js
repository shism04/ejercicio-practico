var express = require('express');
var router = express.Router();

var blog = require('../data/dataprovider');



router.get('/',function(req,res){
  var posts = blog.getAllPosts();
  var categorias= blog.getCategories();
  console.log(posts);
  res.render("home",{title:"home",posts:posts,categorias:categorias})
});

router.get('/entrada/:id', function (req, res, next) {
  const entrada = blog.getPostById(req.params.id);
  var categorias= blog.getCategories();
  res.render("entrada", { title: "entrada",entrada:entrada,categorias:categorias });
});

module.exports = router;