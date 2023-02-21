'use strict';
const Nurse = require('../models/nurse.model');
exports.findAll = (req, res)=> {
  Nurse.findAll((err, nurse)=> {
    if (err) res.send(err);
    res.send(nurse);
  });
};
exports.create = function(req, res) {
const new_nurse = new Nurse(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Nurse.create(new_nurse, function(err, nurse) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Nurse added successfully!",data:nurse});
});
}
};
exports.findById = function(req, res) {
Nurse.findById(req.params.id, function(err, nurse) {
  if (err)
  res.send(err);
  res.json(nurse);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Nurse.update(req.params.id, new Nurse(req.body), function(err, nurse) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Nurse successfully updated' });
});
}
};
exports.delete = function(req, res) {
Nurse.delete( req.params.id, function(err, nurse) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Nurse successfully deleted' });
});
};