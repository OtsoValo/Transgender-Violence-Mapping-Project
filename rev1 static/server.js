var express = require('express');

var app = express();

/* set views */

/* serve assets */
app.use(express.static(__dirname ));


/* serves main page */
app.get("/", function(req, res) {
	res.render('index');
});

/* serves project pages */
app.get("/project:id", function(req, res) {
	res.render('projects/project' + req.params.id);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});