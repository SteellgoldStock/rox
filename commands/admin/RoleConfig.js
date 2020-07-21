const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
        return await messages.sendMsg(message,message.guild.id,language("PERMISSION_DENIED"),message.guild.name);
    }

    return await messages.sendMsg(message,message.guild.id,"truc bidule explication",message.guild.name);
}

exports.help = {
    name: "roles",
    type: "fun"
}