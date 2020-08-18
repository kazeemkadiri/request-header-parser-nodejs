const express = require("express");
const app= express();

//Setup api endpoint that returns header values
app.route("/api/whoami").get((req, res)=>{
  const resObject = {};
  resObject.ipaddress = req.ip;
  resObject.language = req.header("Accept-Language");
  resObject.software = req.header("User-Agent");  

  res.json(resObject);
});


app.listen(process.env.PORT || 3000);
