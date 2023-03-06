'use strict';
const dbConn = require('../../config/db.config');
//Nurse object create
let Nurse = (nurse)=>{
  this.firstName = nurse.firstName;
  this.lastName = nurse.lastName;
  this.phone = nurse.phone;
  this.email = nurse.email;
  this.title = nurse.title;
  this.address = nurse.address;
  this.country = nurse.country;
  this.stateProvince = nurse.stateProvince;
  this.city = nurse.city;
  this.zipcode = nurse.zipcode;
  this.created_at = new Date();
  this.updated_at = new Date();
  this.educationLevel = nurse.educationLevel;
  this.countryOfEducation = nurse.countryOfEducation;
  this.certifications = nurse.certifications;
  this.profession = nurse.profession;
  this.speciality = nurse.speciality;
  this.employmentType = nurse.employmentType;
  this.workLocationZipCode = nurse.workLocationZipCode;
  this.workLocationCityname = nurse.workLocationCityname;

};
Nurse.create = (newNurse, result)=>{
  dbConn.query("INSERT INTO nurses set ?", newNurse, (err, res)=>{
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res.insertId);
    }
  });
};
Nurse.findById = (id, result)=>{
  dbConn.query("Select * from nurses where id = ? ", id, (err, res)=> {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });
};
Nurse.findAll = (result)=>{
  dbConn.query("Select * from nurses", (err, res)=>{
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
};
Nurse.update = (id, nurse, result)=>{
  dbConn.query("UPDATE nurses SET firstName=?,lastName=?,email=?,phone=?,title=?,address=?,country=?,stateProvince=?,city=?,zipcode=? WHERE id = ?", [nurse.firstName,nurse.lastName,nurse.email,nurse.phone,nurse.title,nurse.address,nurse.country,nurse.stateProvince,nurse.city,nurse.zipcode, id], (err, res)=>{
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
};
Nurse.delete = (id, result)=>{
  dbConn.query("DELETE FROM nurses WHERE id = ?", [id], (err, res)=>{
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
};
module.exports= Nurse;