const Discord = require("discord.js");
exports.fs = require('fs');
exports.colors = require("colors");
exports.client = new Discord.Client({disableEveryone: true});
exports.msg = require("./functions/msg");
exports.client.commands = new Discord.Collection();
exports.team = [
    "504392983244832780",
    "558793081663782913",
    "354170113294991364",
    "660921972271611924"
];

const active = new Map();
exports.ops = {
    active: active
}

const mysql = require('mysql');

exports.database = mysql.createConnection({
    host     : 'localhost',
    user     : 'rox',
    password : 'NAYT/x76(|5m;4nvw7E;',
    database : 'rox'
});

exports.database.connect(function(err) {
    if (err) { return console.error('Error in the connection: ' + err.stack); }
    console.log(exports.colors.green('Connected to the Rox Database with id :  ' + exports.database.threadId));
});

exports.client.on('ready', () => {
    /* STATUS */
    setInterval(async () => {
        const statuslist = [
            `${exports.client.guilds.cache.size} servers`,
            `${exports.client.users.cache.size} users`,
        ];
        const random = Math.floor(Math.random() * statuslist.length);

        try {
            await exports.client.user.setActivity(`${statuslist[random]} • v0.1`);
        }
        catch (error) {
            console.error(error);
        }
    }, 3000);

    /* COMMANDS LOADER */
    loadCommand('./commands/basic/');
    loadCommand('./commands/settings/');
    loadCommand('./commands/xp/');
    loadCommand('./commands/mod/');
    loadCommand('./commands/admin/');
    loadCommand('./commands/gold/');
    loadCommand('./commands/team/');
    loadCommand('./commands/fun/');
    loadCommand('./commands/music/');
    loadCommand('./commands/adventure/');

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
})

exports.client.login("NzMzNzYwMDcwNTAzODkwOTk0.XxIcqg.Q_H6caapjiGjo-zoxYbq6vMstKU");
