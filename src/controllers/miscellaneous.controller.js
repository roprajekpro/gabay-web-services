'use strict';
const EducationLevels = require('../models/miscellaneous/education-levels.model');
const EducationCountries = require('../models/miscellaneous/education-countries.model');
const Certifications = require('../models/miscellaneous/certifications.model');
const Professions = require('../models/miscellaneous/professions.model');
const Specialities = require('../models/miscellaneous/specialities.model');
const EmploymentTypes = require('../models/miscellaneous/employment-types.model');
const Licenses = require('../models/miscellaneous/licenses.model');
const Shifts = require('../models/miscellaneous/shifts.model');
const TravelExperiences = require('../models/miscellaneous/travel-experience.model');
const HearAboutUs = require('../models/miscellaneous/hear-about-us.model');
const PassedOptions = require('../models/miscellaneous/passed-options.model');
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
exports.getShifts = (req,res)=>{
  Shifts.findAll((err, shifts)=> {
    if (err)
    res.send(err);
    res.send(shifts);
  });
}
exports.getTravelExperiences = (req,res)=>{
  TravelExperiences.findAll((err, travelExperiences)=> {
    if (err)
    res.send(err);
    res.send(travelExperiences);
  });
}
exports.getHearAboutUs = (req,res)=>{
  HearAboutUs.findAll((err, hearAboutUs)=> {
    if (err)
    res.send(err);
    res.send(hearAboutUs);
  });
}
exports.getPassedOptions = (req,res)=>{
  PassedOptions.findAll((err, passedOptions)=> {
    if (err)
    res.send(err);
    res.send(passedOptions);
  });
}