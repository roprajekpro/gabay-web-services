'use strict';
const dbConn = require('../../../config/db.config');
const Shifts = (shift)=>{
  this.name = shift.name;
};
Shifts.findAll = (result)=> {
    dbConn.query("Select * from shifts", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Shifts;