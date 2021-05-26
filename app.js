const express = require('express');
const app = express();
const axios = require('axios');

app.set('view engine', 'ejs');



app.get('/', function(req, res){
    res.render('search')
});

app.get('/result', function(req, res){
  let searchedUser = req.query.username
  const url = 'https://api.github.com/users/' + searchedUser
  axios.get(url) 
    .then((response) => {
      res.render('result', {data: response.data})
    });
    
    
    
});


app.listen('3000', function () {
   console.log('github checker server has started') 
});