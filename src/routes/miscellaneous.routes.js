const express = require('express')
const router = express.Router()
const miscellaneousController =   require('../controllers/miscellaneous.controller');
router.get('/education-levels', miscellaneousController.getEducationLevels);
router.get('/education-countries', miscellaneousController.getEducationCountries);
router.get('/certifications', miscellaneousController.getCertifications);
router.get('/professions', miscellaneousController.getProfessions);
router.get('/specialities', miscellaneousController.getSpecialities);
router.get('/employment-types', miscellaneousController.getEmploymentTypes);
router.get('/licenses', miscellaneousController.getLicenses);
router.get('/shifts', miscellaneousController.getShifts);
router.get('/travel-experience', miscellaneousController.getTravelExperiences);
router.get('/hear-about-us', miscellaneousController.getHearAboutUs);
router.get('/passed-options', miscellaneousController.getPassedOptions);
module.exports = router