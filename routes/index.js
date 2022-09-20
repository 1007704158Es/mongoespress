const express = require('express');

const usersRouters = require('./users.router');



function routerApi(app){
  const router = express.Router();
  app.use("", router);
  router.use('/users', usersRouters);
  
  
};



