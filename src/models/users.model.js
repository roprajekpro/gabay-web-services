'use strict';
const dbConn = require('../../config/db.config');
const Users = (user)=>{
  this.email = user.email;
  this.password = user.password;
};
Users.findAll = (result)=> {
    dbConn.query("Select * from users", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
Users.findUser = (user,result)=>{
    dbConn.query("Select * from users where email = '"+ user.email + "' AND password = '"+ user.password + "'", (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
Users.create = (user, result)=>{
    dbConn.query("INSERT INTO users set ?", user, (err, res)=>{
      if(err) {
        console.log("error: ", err);
        result(err, null);
      }
      else{
        result(null, res.insertId);
      }
    });
  };
module.exports= Users;