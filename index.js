// Init project
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // Some legacy browsers choke on 204

// Static files
app.use(express.static('public'));

// Routing
app.get("/", function (req, res) {

  res.sendFile(`${__dirname}/views/index.html`);

});

app.get("/api/whoami", function (req, res) {
  
  const responseObj = {
    "ipaddress": req.ip,
    "language": req.headers["accept-language"],
    "software": req.headers["user-agent"]
  };

  res.json(responseObj);

});

// No matching route
app.use(function(req, res) {

  res.status(404).sendFile(`${__dirname}/views/404.html`);

});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
