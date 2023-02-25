'use strict';
const dbConn = require('../../../config/db.config');
const Certifications = (certification)=>{
  this.name = certification.name;
};
Certifications.findAll = (result)=> {
    dbConn.query("Select * from certifications", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Certifications;