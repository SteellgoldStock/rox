const Discord = require('discord.js');
const {colors, client, fs, botConfg,messages} = require('./../../rox')

client.on('guildMemberAdd',(member) =>{
    let dbu = JSON.parse(fs.readFileSync("database/users/users.json", "utf8"));
    let db = JSON.parse(fs.readFileSync("database/guilds/xp/" + member.guild.id + ".json", "utf8"));
    if (!dbu[member.id]) {
        dbu[member.id] = {
            prenium: false,
            serverUp: null

        };
    }
    if (!db[member.id]) db[member.id] = {
        xp: 0,
        level: 0
    };

    let dbSrv = JSON.parse(fs.readFileSync("database/guilds/base/" + member.guild.id + ".json", "utf8"));
    if(dbSrv["autoRole"] == true){
        let role = member.guild.roles.cache.find(r => r.name === `${dbSrv["autoRoleName"]}`);
        member.roles.add(role.id);
    }

    if(dbSrv["joinMsg"] == true){

    }

    fs.writeFile("./database/guilds/xp/" + member.guild.id + ".json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
    });
    fs.writeFile("./database/users/users.json", JSON.stringify(dbu), (x) => {
        if (x) console.error(x)
    });
})