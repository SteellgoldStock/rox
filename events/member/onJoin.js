const Discord = require('discord.js');
const {colors, client, fs, database} = require('../../rox')
const utf8 = require('utf8');

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

        member.guild.members.fetch().then(fetchedMembers => {
            const vert = fetchedMembers.filter(member => member.presence.status === 'online').size;
            const jaune = fetchedMembers.filter(member => member.presence.status === 'idle').size;
            const rouge = fetchedMembers.filter(member => member.presence.status === 'dnd').size;
            const totalOnline = vert + jaune + rouge
            const totalOffline = fetchedMembers.filter(member => member.presence.status === 'offline').size;
            exports.online = totalOnline;
            exports.offline = totalOffline;
        });

        if (results[0].announceChannel !== "false") {
            const channel = client.channels.cache.get(`${results[0].announceChannel}`)
            if(channel){
                const jText = Buffer.from(results[0].joinText, 'base64').toString('utf8');
                console.log(jText);
                channel.send(jText.allReplace({
                    "{mention}": "<@" + member.id + ">",
                    "{username}": member.user.username,
                    "{guildName}": member.guild.name,
                    '{userCount}': member.guild.memberCount,
                    '{countOnline}': exports.online,
                    '{countOffline}': exports.offline
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