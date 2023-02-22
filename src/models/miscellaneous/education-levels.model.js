'use strict';
const dbConn = require('../../../config/db.config');
const EducationLevels = (educationLevel)=>{
  this.name = educationLevel.name;
};
EducationLevels.findAll = (result)=> {
    dbConn.query("Select * from educationLevels", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= EducationLevels;