'use strict';
const EducationLevels = require('../models/miscellaneous/education-levels.model');
const EducationCountries = require('../models/miscellaneous/education-countries.model');
const Certifications = require('../models/miscellaneous/certifications.model');
const Professions = require('../models/miscellaneous/professions.model');
exports.getEducationLevels = (req,res)=>{
  EducationLevels.findAll((err, educationLevels)=> {
    if (err)
    res.send(err);
    res.send(educationLevels);
  });
}
exports.getEducationCountries = (req,res)=>{
  EducationCountries.findAll((err, educationCountries)=> {
    if (err)
    res.send(err);
    res.send(educationCountries);
  });
}
exports.getCertifications = (req,res)=>{
  Certifications.findAll((err, certifications)=> {
    if (err)
    res.send(err);
    res.send(certifications);
  });
}
exports.getProfessions = (req,res)=>{
  Professions.findAll((err, professions)=> {
    if (err)
    res.send(err);
    res.send(professions);
  });
}