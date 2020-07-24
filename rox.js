const Discord = require("discord.js");
exports.fs = require('fs');
exports.colors = require("colors");
exports.client = new Discord.Client();
exports.botConfg = require("./config/client/config.json");
exports.messages = require("./functions/messages");
exports.client.commands = new Discord.Collection();
const mysql = require('mysql');

/** exports.client.on('ready', () => {
    loadCommand("./commands/")
    loadCommand("./commands/admin/")
    loadCommand("./commands/gold/")
    loadCommand("./commands/xp/")
    loadCommand("./commands/team/")
    loadCommand("./commands/xp/admin/")
    loadCommand("./commands/mod/")

    function loadCommand(path)  {
        exports.fs.readdir(path, (err, files) => {
            if (err) console.log(err);

            let jsfile = files.filter(f => f.split(".").pop() === "js")
            if (jsfile.length <= 0) {
                console.log(exports.colors.red("(ERR) No commands found in " + path));
                return;
            }

            jsfile.forEach((f, i) => {
                let props = require(`${path}${f}`);
                console.log(exports.colors.green("(OK) Command " + exports.colors.gray(f) + " in " + exports.colors.gray(path) +" has been loaded"));
                exports.client.commands.set(props.help.name, props);
            });
        });
    }

    require('./events/listener/eventsRegister');
}) **/

exports.database = mysql.createConnection({
    host     : 'localhost',
    user     : 'rox',
    password : 'NAYT/x76(|5m;4nvw7E;',
    database : 'rox'
});

exports.database.connect(function(err) {
    if (err) {
        console.error('Error in the connection: ' + err.stack);
        return;
    }

    console.log('Connected to the Rox Database with id :  ' + exports.database.threadId);
});

exports.client.login("NzMzNzYwMDcwNTAzODkwOTk0.XxIcqg.Q_H6caapjiGjo-zoxYbq6vMstKU");
