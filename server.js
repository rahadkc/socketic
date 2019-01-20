const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const ejs = require('ejs');
const port = process.env.PORT || 3080;
const container = require('./container');


container.resolve(function(users){
  const app = SetupExpress();

  function SetupExpress() {
    const app = express();
    const server = http.createServer(app);

    server.listen(port, function(){
      console.log('listening on port ', port);
    });

    configureExpress(app);
    // Setup router
    const router = require('express-promise-router')();
    users.setRouting(router);
  
    app.use(router);
  }  

});


function configureExpress(app){
    app.use(express.static('public'))
    app.set('view engine', 'ejs');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
}