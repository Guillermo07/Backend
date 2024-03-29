const http       = require('http'),
	  bodyParser = require('body-parser'),
	  express    = require('express'),
	  routes      = require('./routes');

const port       = process.env.PORT || 8082,
	  app		 = express(),
	  server 	 = http.createServer(app);

routes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

server.listen(port, () => {
	console.log("Listening on port" +port);
});