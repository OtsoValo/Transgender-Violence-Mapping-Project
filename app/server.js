var express = require('express');
var jade = require('jade');

var app = express();

/* set views */
app.set('views', 'views');
app.set('view engine', 'jade');

/* serve assets */
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public/'));


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
