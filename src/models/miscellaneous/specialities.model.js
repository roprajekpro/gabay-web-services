'use strict';
const dbConn = require('../../../config/db.config');
const Specialities = (specialitie)=>{
  this.name = specialitie.name;
};
Specialities.findAll = (result)=> {
    dbConn.query("Select * from specialities", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Specialities;