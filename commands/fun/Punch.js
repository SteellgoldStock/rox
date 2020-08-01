const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, msg} = require("../../rox");

const { MessageAttachment } = require('discord.js');

const punch = [
    "https://media.giphy.com/media/l0HlLFVBqUVwxSOzu/giphy.gif",
    "https://media.giphy.com/media/xUO4t2gkWBxDi/giphy.gif",
    "https://media.giphy.com/media/TlK63EArT015kVFM7Ty/giphy.gif",
    "https://media.giphy.com/media/P4l2ET85UuedO/giphy.gif",
    "https://media.giphy.com/media/Y3XhQNHrQX0WLieJ2M/giphy.gif",
    "https://media.giphy.com/media/QVyaxfzO5vdby4Fltk/giphy.gif",
    "https://media.giphy.com/media/3oD3YG0sk83VjWz0Wc/giphy.gif",
    "https://media.giphy.com/media/c3JeqZlXrEVX2/giphy.gif",
    "https://media.giphy.com/media/3o6Zt2wf1yKWucbkqY/giphy.gif",
    "https://media.giphy.com/media/DPdz7j7tUefxm/giphy.gif",
    "https://media.giphy.com/media/l0Iyey3m9aNlZs5i0/giphy.gif",
    "https://media.giphy.com/media/l1J3G5lf06vi58EIE/giphy.gif"
];

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    const random = Math.floor(Math.random() * punch.length);

    if(!args[0]){

        return msg.sendMsg("PU_NO_MENTION",message,dataServer)

    } else {

        let member1 = message.author;

        let member2 = message.guild.member(message.mentions.users.first());

        if(member2){

            const Attach = new MessageAttachment(punch[random], `${message.author.id}.gif`);

            return msg.sendMsgI("PUNCH", member1.username, member2.user.username, Attach, punch[random], message, dataServer)

        } else {

            return await msg.sendMsg("PU_NO_USER", message, dataServer);

        }

    }
}

exports.help = {
    name: 'punch',
};