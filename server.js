const express    = require("express");
const logger     = require("morgan");
const bodyParser = require("body-parser");
const fs         = require("fs");
const config     = JSON.parse(fs.readFileSync("./config.json"));
const app        = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("/regenspeeder/lic", require("./Actions/Lic"));

var port = process.env.PORT || config.ServicePort;

app.listen(port, () => {
	console.log('Listening port:' + port);
});
