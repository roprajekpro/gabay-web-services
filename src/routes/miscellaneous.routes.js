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
module.exports = router