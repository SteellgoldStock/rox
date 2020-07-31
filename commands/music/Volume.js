const Discord = require("discord.js");
const { client, database, msg, colors, fs, team, servers, ops} = require("../../rox");
const { MessageAttachment } = require('discord.js');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(dataServer.isGold == 1){
        if(!args[0]) return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer);
        let fetched = ops.active.get(message.guild.id);
        if(!fetched) return await msg.sendMsgA(language("MUSIC_NO_QUEUE",message.guild.name),message,dataServer);
        if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return await msg.sendMsg("MUSIC_NOT_SAME_CHANNEL",message,dataServer);

        if(isNaN(args[0]) || args[0] > 500 || args[0] <= 0) return await msg.sendMsg("MUSIC_VOLUME_LIMIT",message,dataServer);
        fetched.dispatcher.setVolume(args[0]/100);
        return await msg.sendMsgA(language("MUSIC_VOLUME_SET",fetched.queue[0].songTitle, args[0]),message,dataServer);
    }else{
        return await msg.sendMsg("NOT_GOLD_SERVER", message,dataServer);
    }
}


exports.help = {
    name: "volume",
}