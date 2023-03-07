'use strict';
const Nurse = require('../models/nurse.model');
const Users = require('../models/users.model');

exports.findAll = (req, res)=> {
  Nurse.findAll((err, nurse)=> {
    if (err) res.send(err);
    res.send(nurse);
  });
};

exports.create = (req, res)=> {
  const new_nurse = JSON.parse(JSON.stringify(req.body));
  Nurse.create(new_nurse, (err, nurse)=> {
    if (err)
    res.send(err);
    if(nurse) this.saveLoginData(req.body.email,req.body.password,nurse,res);
  });
};

exports.saveLoginData = (email,password,nurse,res)=> {
  Users.create({email:email,password:password}, (err, user)=> {
    if (err)
    res.send(err);
    res.json({error:false,message:"Nurse added successfully!",data:nurse});
  });
}

exports.findById = (req, res)=> {
  Nurse.findById(req.params.id, (err, nurse)=> {
    if (err)
    res.send(err);
    res.json(nurse);
  });
};

exports.update = (req, res)=> {
  Nurse.update(req.params.id, new Nurse(req.body), (err, nurse)=> {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Nurse successfully updated' });
  });
};

exports.delete = (req, res)=> {
  Nurse.delete( req.params.id, (err, nurse)=> {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Nurse successfully deleted' });
  });
};