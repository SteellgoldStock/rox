const Discord = require('discord.js');
const {colors, client, fs, botConfg,messages} = require('../rox')

String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

client.on('guildMemberAdd',(member) =>{
    let dbu = JSON.parse(fs.readFileSync("database/users/users.json", "utf8"));
    let db = JSON.parse(fs.readFileSync("database/guilds/xp/" + member.guild.id + ".json", "utf8"));
    if (!dbu[member.id]) {
        dbu[member.id] = {
            prenium: false,
            serverUp: null,
            background: null

        };
    }
    if (!db[member.id]) db[member.id] = {
        xp: 0,
        level: 1
    };

    let dbSrv = JSON.parse(fs.readFileSync("database/guilds/base/" + member.guild.id + ".json", "utf8"));
    if(dbSrv["autoRole"] == true){
        let role = member.guild.roles.cache.find(r => r.name === `${dbSrv["autoRoleName"]}`);
        member.roles.add(role.id);
    }

    if(dbSrv["joinMsg"] == true) {
        const channel = member.guild.channels.cache.find(channel => channel.name === dbSrv["joinChannel"]);
        messages.sendEvMsg(channel,member.guild.id,dbSrv["joinText"].allReplace({
            '{mention}': "<@" + member.id + ">",
            '{serverName}': member.guild.name,
            '{username}': member.user.username,
            '{users}': member.guild.memberCount
        }),member.guild.name);
    }

    fs.writeFile("./database/guilds/xp/" + member.guild.id + ".json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
    });
    fs.writeFile("./database/users/users.json", JSON.stringify(dbu), (x) => {
        if (x) console.error(x)
    });
})
