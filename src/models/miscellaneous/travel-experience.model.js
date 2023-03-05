'use strict';
const dbConn = require('../../../config/db.config');
const TravelExperiences = (travelExperience)=>{
  this.name = travelExperience.name;
};
TravelExperiences.findAll = (result)=> {
    dbConn.query("Select * from travelexperiences", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= TravelExperiences;