var express = require('express');
var router = express.Router();



router.get('/',function(req,res){
  res.render("home",{head_title:"home"})
});


module.exports = router;