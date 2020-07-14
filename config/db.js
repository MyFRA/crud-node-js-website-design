require('dotenv/config');
var mysql = require('mysql');


var db = mysql.createConnection({
    host: "localhost",
    user: "maturnuwun",
    password: "maturnuwun",
    database: "website_design",
});

db.connect(function(err) {
    // if (err) throw err;
    console.log("Connected!");
});

module.exports = db;