'use strict';
const dbConn = require('../../../config/db.config');
const EducationCountries = (educationCountry)=>{
  this.name = educationCountry.name;
};
EducationCountries.findAll = (result)=> {
    dbConn.query("Select * from educationCountries", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= EducationCountries;