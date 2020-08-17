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
    "660921972271611924",
    "163678654952374272"
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
    exports.client.guilds.cache.forEach(g => {
        if (exports.fs.existsSync("database/ccommands/" + g.id + ".json")) {

        } else {
            let dbC = {};
            exports.fs.writeFileSync("database/ccommands/" + g.id + ".json", JSON.stringify(dbC), "utf-8");
        }
        if (exports.fs.existsSync("database/rlevels/" + g.id + ".json")) {
        } else {
            let dbC = {};
            exports.fs.writeFileSync("database/rlevels/" + g.id + ".json", JSON.stringify(dbC), "utf-8");
        }

        exports.database.query(`SELECT * FROM servers WHERE guildid = ${g.id}`, function (error, results, fields) {
            if (error) {
                return false;
            } else if (results.length > 0) {

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
                    interServerNetwork: "false",
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
        const list = exports.client.guilds.cache.get(g.id);
        list.members.cache.forEach(member => {
            if (member.user.bot) return;
            exports.database.query(`SELECT * FROM servers_xp WHERE guildid = ${g.id} AND userid = ${member.id}`, function (error, results, fields) {
                if (error) {
                    return false;
                } else if (results.length > 0) {

                } else {
                    console.log("Nouvelle donnée d'xp pour " + member.user.username + " sur " + g.name);
                    var postXp = {
                        guildid: g.id,
                        userid: member.id,
                        xp: 0,
                        level: 1,
                        messagesCount: 0
                    };

                    exports.database.query('INSERT INTO servers_xp SET ?', postXp, function (error) {
                        if (error) throw error;
                    });
                }
            });
        });
    });

    /* STATUS */
    setInterval(async () => {
        const statuslist = [
            `${kFormatter(membersCount())} users`,
            `${exports.client.guilds.cache.size} servers`,
            `${membersCount()} users`,
        ];
        const random = Math.floor(Math.random() * statuslist.length);

        try {
            await exports.client.user.setActivity(`${statuslist[random]} • v0.1`);
        }
        catch (error) {
            console.error(error);
        }
    }, 2000);

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

exports.client.login("NzMzNzYwMDcwNTAzODkwOTk0.XxH1UQ.KHWUKwM9KkLMe111pilR8WBKIKE");

function membersCount(){
    let number = 0;
    let guild = exports.client.guilds.cache;
    guild.forEach(m => {

        m.members.fetch().then(fetchedMembers => {
            const vert = fetchedMembers.filter(member => member.presence.status === 'online').size;
            const jaune = fetchedMembers.filter(member => member.presence.status === 'idle').size;
            const rouge = fetchedMembers.filter(member => member.presence.status === 'dnd').size;
            const totalOnline = vert + jaune + rouge
            const totalOffline = fetchedMembers.filter(member => member.presence.status === 'offline').size;
            number = number + totalOnline + totalOffline;
            exports.total = number;
        });
    })
    return exports.total;
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}