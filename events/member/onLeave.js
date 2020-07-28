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

        console.log(results[0].announceChannel)
        if (!results[0].announceChannel == "false") {
            const channel = member.guild.channels.cache.find(channel => channel.name === results[0].announceChannel);

            channel.send(results[0].quitText.allReplace({
                "{mention}": "<@" + member.id + ">",
                "{username}": member.user.username,
                "{guildName}": member.guild.name
            }))
        }
    });
});