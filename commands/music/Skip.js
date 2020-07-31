const Discord = require("discord.js");
const { client, database, msg, colors, fs, team, servers, ops} = require("../../rox");
const { MessageAttachment } = require('discord.js');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(team.includes(message.author.id) || message.member.roles.cache.has(dataServer.adminRole) || message.member.roles.cache.has(dataServer.modRole)){
        let fetched = ops.active.get(message.guild.id);
        if(!fetched) return await msg.sendMsgA(language("MUSIC_NO_QUEUE",message.guild.name),message,dataServer);
        if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return await msg.sendMsg("MUSIC_NOT_SAME_CHANNEL",message,dataServer);

        await msg.sendMsg("MUSIC_SKIP",message,dataServer);
        return fetched.dispatcher.emit('finish');
    }else{
        let fetched = ops.active.get(message.guild.id);
        if(!fetched) return await msg.sendMsgA(language("MUSIC_NO_QUEUE",message.guild.name),message,dataServer);
        if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return await msg.sendMsg("MUSIC_NOT_SAME_CHANNEL",message,dataServer);
        let userCount = message.member.voice.channel.members.size;
        let required = Math.ceil(userCount/2);
        if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
        if(fetched.queue[0].voteSkips.includes(message.member.id)) return await msg.sendMsgA(language("MUSIC_SKIP_VOTE_AV",fetched.queue[0].voteSkips.length + "/" + required),message,dataServer);
        fetched.queue[0].voteSkips.push(message.member.id);
        ops.active.set(message.guild.id,fetched)
        console.log(fetched.queue[0].voteSkips)
        if(fetched.queue[0].voteSkips.length >= required){
            await msg.sendMsg("MUSIC_SKIP",message,dataServer);
            return fetched.dispatcher.emit('finish');
        }
        return await msg.sendMsgA(language("MUSIC_VOTE_SKIP_VOTED",fetched.queue[0].voteSkips.length+"/"+required),message,dataServer);

    }
}


exports.help = {
    name: "skip",
}