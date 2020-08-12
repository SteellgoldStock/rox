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

client.on('guildMemberRemove', member => {
    let sql = `SELECT * FROM servers WHERE guildid = ${member.guild.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
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
                const qText = Buffer.from(results[0].quitText, 'base64').toString('utf8');
                console.log(qText);
                channel.send(qText.allReplace({
                    "{mention}": "<@" + member.id + ">",
                    "{username}": member.user.username,
                    "{guildName}": member.guild.name,
                    '{userCount}': member.guild.memberCount,
                    '{countOnline}': exports.online,
                    '{countOffline}': exports.offline
                }))
            }
        }
    });
});