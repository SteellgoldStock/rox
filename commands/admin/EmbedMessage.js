const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if(!message.member.roles.cache.find(r => r.name === db["adminRole"])){
        return await messages.sendMsg(message,message.guild.id,language("PERMISSION_DENIED"),message.guild.name);
    }

    if(!db["prenium"] == true){
        return await messages.sendMsg(message,message.guild.id,language("NOT_PRENIUM_GUILD"),message.guild.name)
    }

    if(!args[0]){
        
    }

}

exports.help = {
    name: "embedconf",
    type: "fun"
}