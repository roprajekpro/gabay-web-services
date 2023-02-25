'use strict';
const dbConn = require('../../../config/db.config');
const Licenses = (license)=>{
  this.name = license.name;
};
Licenses.findAll = (result)=> {
    dbConn.query("Select * from licenses", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Licenses;