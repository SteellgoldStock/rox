const Discord = require("discord.js");
const { client, database, msg, colors, fs, team, servers, ops} = require("../../rox");
const { MessageAttachment } = require('discord.js');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return await msg.sendMsgA(language("MUSIC_NO_QUEUE", message.guild.name), message, dataServer);
    if (message.guild.me.voice.channel.id !== message.member.voice.channel.id) return await msg.sendMsg("MUSIC_NOT_SAME_CHANNEL", message, dataServer);
    if (!fetched.dispatcher.paused) return await msg.sendMsgA(language("MUSIC_ALREADY_RESUME",dataServer.prefix,fetched.queue[0].songTitle), message, dataServer);
    fetched.dispatcher.resume();
    return await msg.sendMsgA(language("MUSIC_RESUME",dataServer.prefix,fetched.queue[0].songTitle), message, dataServer);
}


exports.help = {
    name: "resume",
}