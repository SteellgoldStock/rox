const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (await msg.Role(message.member, "modo", message, dataServer) === true || await msg.Role(message.member, "admin", message, dataServer) === true) {

        const mentionUser = message.mentions.members.first();
        if (!mentionUser) {
            return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
        }

        database.query(`SELECT * FROM warns WHERE userId=${mentionUser.id} AND guildid=${message.guild.id}`, function (error, result) {
            if (error) {
                console.error(error);
                return;
            }

            let embed = new Discord.MessageEmbed()
                .setTitle(language("WARN_TITLE") + ` ${mentionUser.user.username}`)
            for (i = 0; i < result.length; i++)
                embed.addField(`ID: ${result[i].id}`, language("WARNS_MOD_FIELD") + message.guild.member(result[i].modId).user.username + "\n" +
                    language("WARNS_REASON_FIELD") + result[i].reason)
                    .setThumbnail(client.user.avatarURL())
                    .setTimestamp()
                    .setFooter('Rox • v0.1', client.user.avatarURL())
            message.channel.send(embed)
        });
    } else {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

exports.help = {
    name: "warns"
}
