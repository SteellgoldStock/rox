const Discord = require('discord.js');
const {colors, client, fs, database} = require('../../rox')

String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

client.on('guildMemberAdd', member => {
    let sql = `SELECT * FROM servers WHERE guildid = ${member.guild.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        if (results[0].autoRole !== "none") {
            let role = member.guild.roles.cache.get(results[0].autoRole);
            if (role) {
                member.roles.add(role)
            }
        }

        if (results[0].announceChannel !== "false") {
            const channel = client.channels.cache.get(`${results[0].announceChannel}`)
            if(channel){
                channel.send(results[0].joinText.allReplace({
                    "{mention}": "<@" + member.id + ">",
                    "{username}": member.user.username,
                    "{guildName}": member.guild.name
                }))
            }
        }

        database.query(`SELECT * FROM servers_xp WHERE userid = ${member.id} AND guildid = ${member.guild.id}`, function (error, resultsXP, fields) {
            if (error) {
                return false;
            } else if (resultsXP.length > 0) {

            } else {
                var postXp = {
                    guildid: member.guild.id,
                    userid: member.id,
                    xp: 0,
                    level: 1,
                    messagesCount: 0
                };
                database.query('INSERT INTO servers_xp SET ?', postXp, function (error) {
                    if (error) throw error;
                    client.guilds.cache.get("733724420056547338").channels.cache.get("737651263612911672").send('Nouvelle donnée d\'xp pour l\'utilisateur **' + member.user.username + '** sur le serveur: **' + member.guild.name + "**");
                });
            }
        });
    });
});