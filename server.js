var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


var routes = require('./api/routes/orefAlertsRoutes'); //importing route
routes(app); 

app.listen(port);

console.log('Oref Arerts RESTful API server started on: ' + port);
