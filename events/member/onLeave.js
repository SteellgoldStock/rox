const Discord = require('discord.js');
const {colors, client, fs, database} = require('../../rox')

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
            const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
            const totalOffline = fetchedMembers.filter(member => member.presence.status === 'offline');
            exports.online = totalOnline.size;
            exports.offline = totalOffline.size;
        });

        if (results[0].announceChannel !== "false") {
            const channel = client.channels.cache.get(`${results[0].announceChannel}`)
            if(channel){
                channel.send(results[0].quitText.allReplace({
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