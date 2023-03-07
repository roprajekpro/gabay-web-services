'use strict';
const Users = require('../models/users.model');
exports.findAll = (req, res)=> {
  Users.findAll((err, users)=> {
    if (err) res.send(err);
    res.send(users);
  });
};
exports.findUser = (req,res)=>{
  const credentials = req.body;
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required fields' });
  }
  else{
    Users.findUser(credentials,(err,user)=>{
      if(err) res.send(err);
      res.send(user);
    })
  }
}