const Discord = require("discord.js");
const { client, database, msg, colors, fs, team, servers, ops} = require("../../rox");
const { MessageAttachment } = require('discord.js');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) return await msg.sendMsgA(language("MUSIC_NO_QUEUE",message.guild.name),message,dataServer);

    let queue = fetched.queue;
    let now = queue[0];

    let title = language("MUSIC_NOW_PLAY");
    let requester = language("MUSIC_REQUEST");
    let queuei = language("MUSIC_QUEUE");

    let resp = `__**${title}**__\n**${now.songTitle}** -- __${requester}__: **${now.requester}**\n\n__**${queuei}**__\n`

    if(!args[0]){

        if(queue.length > 30){

            for (var i = 1; i < 30; i++) {
                resp += `${i}. **${queue[i].songTitle}** -- __${requester}__: **${queue[i].requester}**\n`
            }

        } else {

            for (var i = 1; i < queue.length; i++) {
                resp += `${i}. **${queue[i].songTitle}** -- __${requester}__: **${queue[i].requester}**\n`
            }
        }

        } else if (args[0] && args[0] > 0){

            if(!queue[parseInt(args[0]) - 30]) return await msg.sendMsgA(language("MUSIC_NO_QUEUE_NUMBER",message.guild.name, args[0]),message,dataServer);

            for (var i = parseInt(args[0]) - 30; i < parseInt(args[0]); i++) {
                resp += `${i}. **${queue[i].songTitle}** -- __${requester}__: **${queue[i].requester}**\n`
            }
        }

    return await msg.sendMsgA(resp,message,dataServer);
}


exports.help = {
    name: "queue",
}