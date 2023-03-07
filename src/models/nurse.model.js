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
  this.created_at = new Date().getMilliseconds();
  this.updated_at = new Date().getMilliseconds();
  this.educationLevel = nurse.educationLevel;
  this.countryOfEducation = nurse.countryOfEducation;
  this.certifications = nurse.certifications;
  this.profession = nurse.profession;
  this.speciality = nurse.speciality;
  this.employmentType = nurse.employmentType;
  this.workLocationZipCode = nurse.workLocationZipCode;
  this.workLocationCityname = nurse.workLocationCityname;
  this.licenses = nurse.licenses;
  this.shiftPreference = nurse.shiftPreference;
  this.travelExperience = nurse.travelExperience;
  this.nClexrnExam = nurse.nClexrnExam;
  this.visaScreenCertificate = nurse.visaScreenCertificate;
  this.ielts = nurse.ielts;
  this.ieltsExpirationDate = nurse.ieltsExpirationDate;
  this.foreignEducatedNursesCourse = nurse.foreignEducatedNursesCourse;
  this.socialSecuritNumber = nurse.socialSecuritNumber;
  this.itin = nurse.itin;
  this.eb3 = nurse.eb3;
  this.hearAboutUs = nurse.hearAboutUs;
  this.friendName = nurse.friendName;
  this.familyMemberRelation = nurse.familyMemberRelation;
  this.familyMemberName = nurse.familyMemberName;
  this.recruitingAgent = nurse.recruitingAgent;
};
Nurse.create = (newNurse, result)=>{
  delete newNurse.password;
  delete newNurse.confirmPassword;
  dbConn.query("INSERT INTO nurses set ?", newNurse, (err, res)=>{
    if(err) {
      console.log("error in nurse create: ", err);
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
  dbConn.query("UPDATE nurses SET firstName=?,lastName=?,email=?,phone=?,title=?,address=?,country=?,stateProvince=?,city=?,zipcode=?,educationLevel=?,countryOfEducation=?,certifications=?,profession=?,speciality=?,employmentType=?,workLocationZipCode=?,workLocationCityname=?,licenses=?,shiftPreference=?,travelExperience=?,nClexrnExam=?,visaScreenCertificate=?,ielts=?,ieltsExpirationDate=?,foreignEducatedNursesCourse=?,socialSecuritNumber=?,itin=?,eb3=?,hearAboutUs=?,friendName=?,familyMemberRelation=?,familyMemberName=?,recruitingAgent=? WHERE id = ?", [nurse.firstName,nurse.lastName,nurse.email,nurse.phone,nurse.title,nurse.address,nurse.country,nurse.stateProvince,nurse.city,nurse.zipcode,nurse.educationLevel,nurse.countryOfEducation,nurse.certifications,nurse.profession,nurse.speciality,nurse.employmentType,nurse.workLocationZipCode,nurse.workLocationCityname,nurse.licenses,nurse.shiftPreference,nurse.travelExperience,nurse.nClexrnExam,nurse.visaScreenCertificate,nurse.ielts,nurse.ieltsExpirationDate,nurse.foreignEducatedNursesCourse,nurse.socialSecuritNumber,nurse.itin,nurse.eb3,nurse.hearAboutUs,nurse.friendName,nurse.familyMemberRelation,nurse.familyMemberName,nurse.recruitingAgent, id], (err, res)=>{
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