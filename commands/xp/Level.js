const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    const user = message.mentions.users.first();
    if(!user){
        database.query(`SELECT * FROM servers_xp WHERE guildid=${message.guild.id} AND userid=${message.author.id}`, function (error, result) {
            if (error) {
                console.error(error);
                return;
            }


            let embed = new Discord.MessageEmbed()
                .setTitle(message.author.username)
                .addField(language("LEVEL"),language("LEVEL_TEXT",result[0].level))
                .addField(language("XP"),language("XP_TEXT",kFormatter(result[0].xp)))
                .addField(language("MSGS_SEND"),language("MSGS_TEXT",kFormatter(result[0].messagesCount)))
                .setTimestamp()
                .setColor("#4e64b5")
            return message.channel.send(embed);
        });
    }else {
        database.query(`SELECT * FROM servers_xp WHERE guildid=${message.guild.id} AND userid=${user.id}`, function (error, result) {
            if (error) {
                console.error(error);
                return;
            }


            let embed = new Discord.MessageEmbed()
                .setTitle(user.username)
                .addField(language("LEVEL"), language("LEVEL_TEXT_O", result[0].level))
                .addField(language("XP"), language("XP_TEXT_O", kFormatter(result[0].xp)))
                .addField(language("MSGS_SEND"), language("MSGS_TEXT", kFormatter(result[0].messagesCount)))
                .setTimestamp()
                .setColor("#4e64b5")
            return message.channel.send(embed);
        });
    }
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

exports.help = {
    name: "level",
}