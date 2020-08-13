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
    user     : 'gaetane',
    password : '9Bp2XNhWigfeJrCm',
    database : 'gaetane'
});

exports.database.connect(function(err) {
    if (err) { return console.error('Error in the connection: ' + err.stack); }
    console.log(exports.colors.green('Connected to the Rox Database with id :  ' + exports.database.threadId));
});

exports.client.on('ready', () => {
    exports.client.guilds.cache.forEach(g =>{
        if(exports.fs.existsSync("database/ccommands/" + g.id + ".json")) {

        } else {
            let dbC = {};
            exports.fs.writeFileSync("database/ccommands/" + g.id + ".json", JSON.stringify(dbC), "utf-8");
        }

        if(exports.fs.existsSync("database/rlevels/" + g.id + ".json")) {

        } else {
            let dbC = {};
            exports.fs.writeFileSync("database/rlevels/" + g.id + ".json", JSON.stringify(dbC), "utf-8");
        }

        exports.database.query(`SELECT * FROM servers WHERE guildid = ${g.id}`, function (error, results, fields) {
            if (error) {
                return false;
            } else if (results.length > 0) {
                let guildName = Buffer.from(g.name).toString('base64')
                var sql = `UPDATE servers SET name = '${guildName}' WHERE guildid = '${g.id}'`;
                exports.database.query(sql, function (err) {
                    if (err) throw err;
                });
            } else {
                var postServer = {
                    tag: Buffer.from(" ").toString('base64'),
                    name: Buffer.from(g.name).toString('base64'),
                    guildid: g.id,
                    lang: "en",
                    prefix: "!",
                    isGold: 0,
                    isBeta: 0,

                    // CONFIG - QUIT & JOIN
                    joinText: "V2VsY29tZSB0byB7bWVudGlvbn0gaW4ge2d1aWxkTmFtZX0=",
                    quitText: "Tm8uLiB7dXNlcm5hbWV9IGhhcyBsZWF2ZWQge2d1aWxkTmFtZX0=",
                    interServerChannel: "false",
                    announceChannel: "false",
                    logsChannel: "false",
                    ticketCat: "----- Ticket -----",
                    commandsChannel: "false",

                    // CONFIG - ROLES
                    adminRole: "none",
                    modRole: "none",
                    autoRole: "none",

                    // CONFIG - EMBED ( GOLD SERVER )
                    msgEmbed: 0,
                    embedImgURL: "none",
                    embedColor: "none",
                    embedTitle: "none",

                    // CONFIG - XP SYSTEM
                    sysXp: 0,
                    rwStus: 0,
                    levelUpMsg: "V2VsbCBkb25lIHNvbGRpZXIsIHlvdSd2ZSBwYXNzZWQgbGV2ZWwge2xldmVsfQ==",

                    // CONFIG - CUSTOM CMDS
                    countCC: 0,
                    limitCC: 15,

                    level: 1,
                    xp: 0
                };
                exports.database.query('INSERT INTO servers SET ?', postServer, function (error, results, fields) {
                    if (error) throw error;
                });
            }
        });
    })

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
