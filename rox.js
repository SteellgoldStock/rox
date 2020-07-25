const Discord = require("discord.js");
exports.fs = require('fs');
exports.colors = require("colors");
exports.client = new Discord.Client();
exports.messages = require("./functions/messages");
exports.client.commands = new Discord.Collection();
const mysql = require('mysql');

exports.database = mysql.createConnection({
    host     : 'localhost',
    user     : 'rox',
    password : 'NAYT/x76(|5m;4nvw7E;',
    database : 'rox'
});

require('./events/listener/eventsRegister');
exports.database.connect(function(err) {
    if (err) { return console.error('Error in the connection: ' + err.stack); }
    console.log(exports.colors.green('Connected to the Rox Database with id :  ' + exports.database.threadId));
});

exports.client.login("NzMzNzYwMDcwNTAzODkwOTk0.XxIcqg.Q_H6caapjiGjo-zoxYbq6vMstKU");
