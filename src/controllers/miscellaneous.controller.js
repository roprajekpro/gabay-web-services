'use strict';
const EducationLevels = require('../models/miscellaneous/education-levels.model');
const EducationCountries = require('../models/miscellaneous/education-countries.model');
const Certifications = require('../models/miscellaneous/certifications.model');
const Professions = require('../models/miscellaneous/professions.model');
const Specialities = require('../models/miscellaneous/specialities.model');
const EmploymentTypes = require('../models/miscellaneous/employment-types.model');
const Licenses = require('../models/miscellaneous/licenses.model');
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
exports.getSpecialities = (req,res)=>{
  Specialities.findAll((err, specialities)=> {
    if (err)
    res.send(err);
    res.send(specialities);
  });
}
exports.getEmploymentTypes = (req,res)=>{
  EmploymentTypes.findAll((err, employmentTypes)=> {
    if (err)
    res.send(err);
    res.send(employmentTypes);
  });
}
exports.getLicenses = (req,res)=>{
  Licenses.findAll((err, licenses)=> {
    if (err)
    res.send(err);
    res.send(licenses);
  });
}