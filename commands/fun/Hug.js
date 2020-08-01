const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, msg} = require("../../rox");

const { MessageAttachment } = require('discord.js');

const hug = [
    "https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
    "https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif",
    "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
    "https://media.giphy.com/media/fLv2F5rMY2YWk/giphy.gif",
    "https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif",
    "https://media.giphy.com/media/3og0ILx8f9adnoQRos/giphy.gif",
    "https://media.giphy.com/media/XcTFzOcRuoQ6Y/giphy.gif",
    "https://media.giphy.com/media/2Yvyg3Ipk7UIg/giphy.gif",
    "https://media.giphy.com/media/1dOH0aFZz3LyVVEMn9/giphy.gif",
    "https://media.giphy.com/media/skVEP0BeduG4/giphy.gif",
    "https://media.giphy.com/media/bvFS4rALdNDag/giphy.gif",
    "https://media.giphy.com/media/KG5oq4vesf9r8JbBEN/giphy.gif"
];

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    const random = Math.floor(Math.random() * hug.length);

    if(!args[0]){

        return msg.sendMsg("PU_NO_MENTION",message,dataServer)

    } else {

        let member1 = message.author;

        let member2 = message.guild.member(message.mentions.users.first());

        if(member2){

            const Attach = new MessageAttachment(hug[random], `${message.author.id}.gif`);

            return msg.sendMsgI("HUG", member1.username, member2.user.username, Attach, hug[random], message, dataServer)

        } else {

            return await msg.sendMsg("PU_NO_USER", message, dataServer);

        }

    }
}

exports.help = {
    name: 'hug',
};