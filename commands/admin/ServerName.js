const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if(!message.member.roles.cache.find(r => r.name === db["adminRole"])){
        return await messages.sendMsg(message,message.guild.id,language("PERMISSION_DENIED"),message.guild.name);
    }

    if(!args[0]){ return await messages.sendMsg(message,message.guild.id,language("MISSED_ARGUMENTS"),message.guild.name); }
    const name = args.slice(0).join(" ");
    if(message.guild.name == name){
        return await messages.sendMsg(message,message.guild.id,language("IS_NAME_ALREADY", name),message.guild.name);
    }

    try{
        message.guild.setName(name)
        return await messages.sendMsg(message,message.guild.id,language("UPDATED", name),message.guild.name);
    }catch (e) {
        return await messages.sendErrorMsg(message.channel,e);
    }
}

exports.help = {
    name: "servername",
    type: "admin"
}