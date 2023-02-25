'use strict';
const dbConn = require('../../../config/db.config');
const EmploymentTypes = (employmentType)=>{
  this.name = employmentType.name;
};
EmploymentTypes.findAll = (result)=> {
    dbConn.query("Select * from employmenttypes", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= EmploymentTypes;