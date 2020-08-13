const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    const option = args[0];
    if (!option) {
        database.query(`SELECT * FROM servers_xp WHERE guildid=${message.guild.id} ORDER BY level DESC LIMIT 10`, function (error, result) {
            if (error) {
                console.error(error);
                return;
            }

            let embed = new Discord.MessageEmbed()
                .setTitle(language("TITLE_TOP_XP_USERS"))
            for (i = 0; i < result.length; i++)
                embed.addField(`Top #${i + 1}`, `<@${result[i].userid}> ` + language("DESCRIPTION_TOP_XP_U",result[i].level, kFormatter(result[i].xp), kFormatter(result[i].messagesCount)))
                    .setThumbnail(client.user.avatarURL())
                    .setTimestamp()
                    .setColor("#4e64b5")
                    .setFooter(language("FOOTER_TOP_XP",dataServer.prefix))
            message.channel.send(embed)
        });
    } else {
        if (option == "server") {
            database.query(`SELECT * FROM servers ORDER BY level DESC LIMIT 20`, function (error, result) {
                if (error) {
                    console.error(error);
                    return;
                }

                let embed = new Discord.MessageEmbed()
                    .setTitle(language("TITLE_TOP_XP_GUILDS"))
                for (i = 0; i < result.length; i++) {
                    embed.addField(`Top #${i + 1}`, `${Buffer.from(result[i].tag, 'base64').toString('utf8')}`+`**${Buffer.from(result[i].name, 'base64').toString('utf8')}** ` + language("DESCRIPTION_TOP_XP",result[i].level, kFormatter(result[i].xp)))
                        .setThumbnail(client.user.avatarURL())
                        .setTimestamp()
                        .setColor("#4e64b5")
                        .setFooter(language("FOOTER_TOP_XP", dataServer.prefix))
                }
                message.channel.send(embed)
            });
        } else {
            return await msg.sendMsgA(language("TOP_XP_ARGUMENTS",dataServer.prefix), message, dataServer);
        }
    }
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

exports.help = {
    name: "top",
}