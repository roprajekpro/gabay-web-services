'use strict';
const dbConn = require('../../../config/db.config');
const Professions = (profession)=>{
  this.name = profession.name;
};
Professions.findAll = (result)=> {
    dbConn.query("Select * from professions", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Professions;