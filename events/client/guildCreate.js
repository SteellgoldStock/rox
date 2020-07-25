const Discord = require('discord.js');
const {colors, client, fs, botConfg, database} = require('./../../rox')

client.on('guildCreate',(guild) =>{

    /** SERVER **/
    var postServer  = {
        name: guild.name,
        lang: "en",
        prefix: "!",
        isGold: 0,
        isBeta: 0,

        // CONFIG - QUIT & JOIN
        joinText: "Welcome to {mention} in {servername}",
        quitText: "No.. {username} has leaved {servername}",
        announceChannel: "none",

        // CONFIG - ROLES
        adminRole: "none",
        modRole: "none",
        autoRoleName: "none",

        // CONFIG - EMBED ( GOLD SERVER )
        msgEmbed: 0,
        embedImgURL: "none",
        embedTitle: "none",

        // CONFIG - XP SYSTEM
        sysXp: 0,
        levelUpMsg: "Well done soldier, you've passed level {level}",

        // CONFIG - CUSTOM CMDS
        countCC: 0,
        limitCC: 15
    };
    
    database.query('INSERT INTO servers SET ?', postServer, function (error, results, fields) {
        if (error) throw error;
    });

    /** USERS XP BY SERVER **/

    const list = client.guilds.cache.get(guild.id);
    list.members.cache.forEach(member => exports.id = member.id);

    var postXp  = {
        guildid: guild.id,
        userid: exports.id,
        xp: 0,
        level: 1
    };

    database.query('INSERT INTO xp_system SET ?', postXp, function (error, results, fields) {
        if (error) throw error;
    });

})