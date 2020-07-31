const Discord = require("discord.js");
const { client, database, msg, colors, fs, team, servers, ops} = require("../../rox");
const { MessageAttachment } = require('discord.js');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!message.member.voice.channel) return await msg.sendMsg("MUSIC_NO_VOICE",message,dataServer);
    if(!message.guild.me.voice.channel) return await msg.sendMsg("MUSC_NOT_CONNECTED",message,dataServer);
    if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return await msg.sendMsg("MUSIC_NOT_SAME_CHANNEL",message,dataServer);
    message.guild.me.voice.channel.leave();

    return await msg.sendMsgA(language("MUSIC_LEAVE_CHANNEL",message.guild.me.voice.channel.name),message,dataServer);
}


exports.help = {
    name: "stop",
}