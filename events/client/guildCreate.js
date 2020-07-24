const Discord = require('discord.js');
const {colors, client, fs, botConfg, database} = require('./../../rox')

client.on('guildCreate',(guild) =>{
    var post  = {
        name: guild.name,
        lang: "en",
        prefix: "!",
        isGold: 0,
        isBeta: 0,

        // CONFIG - QUIT & JOIN
        joinMsg: 0,
        quitMsg: 0,
        joinText: "Welcome to {mention} in {servername}",
        quitText: "No.. {username} has leaved {servername}",
        joinChannel: "none",
        quitChannel: "none",

        // CONFIG - ROLES
        adminRole: "none",
        modRole: "none",
        autoRole: 0,
        autoRoleName: "none",

        // CONFIG - EMBED ( GOLD SERVER )
        msgEmbed: 0,
        embedImgURL: "none",
        embedTitle: "none",

        // CONFIG - XP SYSTEM
        sysXp: 0,
        sysLogsChannel: "none",
        levelUpMsg: "Well done soldier, you've passed level {level}",

        // CONFIG - CUSTOM CMDS
        countCC: 0,
        limitCC: 15
    };

    var query = database.query('INSERT INTO servers SET ?', post, function (error, results, fields) {
        if (error) throw error;
    });
    console.log(query.sql);
})