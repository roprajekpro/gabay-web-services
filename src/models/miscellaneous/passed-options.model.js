'use strict';
const dbConn = require('../../../config/db.config');
const PassedOptions = (passedOption)=>{
  this.name = passedOption.name;
};
PassedOptions.findAll = (result)=> {
    dbConn.query("Select * from passedOptions", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= PassedOptions;