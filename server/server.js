const express = require("express");
const PORT = process.env.PORT || 3000;


// mongodb+srv://Monica:<password>@vocab-amf5b.mongodb.net/test?retryWrites=true
const server = express();


server.get("/", (req, res) => {
  res.send("on...");
});

//start listening

server.listen(PORT, function() {
  console.log("now listening for requests");
});


//configure everything in express