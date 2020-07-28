const Discord = require('discord.js');
const {colors, client, fs, database} = require('./../../rox')

client.on('guildCreate',(guild) => {
    client.guilds.cache.get("733724420056547338").channels.cache.get("737651263612911672").send("Nouveau serveur: **" + guild.name + "**");

    /** SERVER **/
    database.query(`SELECT * FROM servers WHERE guildid = ${guild.id}`, function (error, results, fields) {
        if (error) {
            return false;
        } else if (results.length > 0) {
            return;
        } else {
            var postServer = {
                name: guild.name,
                guildid: guild.id,
                lang: "en",
                prefix: "!",
                isGold: 0,
                isBeta: 0,

                // CONFIG - QUIT & JOIN
                joinText: "Welcome to {mention} in {servername}",
                quitText: "No.. {username} has leaved {servername}",
                announceChannel: "false",

                // CONFIG - ROLES
                adminRole: "none",
                modRole: "none",
                autoRole: "none",

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
        }
    });


    /** USERS XP BY SERVER **/
    const list = client.guilds.cache.get(guild.id);
    list.members.cache.forEach(member => {
        if (member.user.bot) return;

        database.query(`SELECT * FROM servers_xp WHERE guildid = ${guild.id} AND userid = ${member.id}`, function (error, results, fields) {
                if (error) {
                    return false;
                } else if (results.length > 0) {
                    return false;
                } else {
                    client.guilds.cache.get("733724420056547338").channels.cache.get("737651263612911672").send('Nouvelle donnée d\'xp pour l\'utilisateur **' + member.user.username + '** sur le serveur: **' + guild.name + "**");

                    var postXp = {
                        guildid: guild.id,
                        userid: member.id,
                        xp: 0,
                        level: 1
                    };

                    database.query('INSERT INTO servers_xp SET ?', postXp, function (error, results, fields) {
                        if (error) throw error;
                    });
                }
            }
        );
    });
});