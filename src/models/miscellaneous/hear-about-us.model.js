'use strict';
const dbConn = require('../../../config/db.config');
const HearAboutUs = (travelExperience)=>{
  this.name = travelExperience.name;
};
HearAboutUs.findAll = (result)=> {
    dbConn.query("Select * from hearAboutUs", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= HearAboutUs;