'use strict';
const EducationLevels = require('../models/miscellaneous/education-levels.model');
const EducationCountries = require('../models/miscellaneous/education-countries.model');
exports.getEducationLevels = (req,res)=>{
  EducationLevels.findAll(function(err, educationLevels) {
    if (err)
    res.send(err);
    res.send(educationLevels);
  });
}
exports.getEducationCountries = (req,res)=>{
  EducationCountries.findAll(function(err, educationCountries) {
    if (err)
    res.send(err);
    res.send(educationCountries);
  });
}