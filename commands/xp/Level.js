const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    const user = message.mentions.users.first();
    if(!user){
        database.query(`SELECT * FROM servers_xp WHERE guildid=${message.guild.id} AND userid=${message.author.id}`, function (error, result) {
            if (error) {
                console.error(error);
                return;
            }

            let MaxXpU1 = result[0].level * 500 + result[0].level * 40

            let embed = new Discord.MessageEmbed()
                .setTitle(isTeam(message.author.id) + correctName(message.author.id,message.author.username))
                .addField(language("LEVEL"),language("LEVEL_TEXT",result[0].level))
                .addField(language("XP"),language("XP_TEXT",kFormatter(result[0].xp), MaxXpU1))
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

            let MaxXpU2 = result[0].level * 500 + result[0].level * 40

            let embed = new Discord.MessageEmbed()
                .setTitle(isTeam(user.id) + correctName(user.id,user.username))
                .addField(language("LEVEL"), language("LEVEL_TEXT_O", result[0].level))
                .addField(language("XP"),language("XP_TEXT_O",kFormatter(result[0].xp), MaxXpU2))
                .addField(language("MSGS_SEND"), language("MSGS_TEXT", kFormatter(result[0].messagesCount)))
                .setTimestamp()
                .setColor("#4e64b5")
            return message.channel.send(embed);
        });
    }
}

function isTeam(id){
    if(team.includes(id)){
        return "<:rox:737051270980042783> ";
    }else{
        return "";
    }
}

function correctName(id, name){
    if(id == 504392983244832780){
        return "Gaëtan";
    }else{
        return name;
    }
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

exports.help = {
    name: "level",
}