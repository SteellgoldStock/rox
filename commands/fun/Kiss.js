const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, msg} = require("../../rox");

const { MessageAttachment } = require('discord.js');

const kiss = [
    "https://media.giphy.com/media/108M7gCS1JSoO4/giphy.gif",
    "https://media.giphy.com/media/lTQF0ODLLjhza/giphy.gif",
    "https://media.giphy.com/media/PFjXmKuwQsS9q/giphy.gif",
    "https://media.giphy.com/media/KMuPz4KDkJuBq/giphy.gif",
    "https://media.giphy.com/media/j1l1QRW2YMAec/giphy.gif",
    "https://media.giphy.com/media/9APniZOOUSMvK/giphy.gif",
    "https://media.giphy.com/media/iseq9MQgxo4aQ/giphy.gif",
    "https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
    "https://media.giphy.com/media/KmeIYo9IGBoGY/giphy.gif",
    "https://media.giphy.com/media/HN0vI0nbR9jX2/giphy.gif",
    "https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif",
    "https://cdn.myanimelist.net/s/common/uploaded_files/1483588772-bde49b07ca18ca564d91efa7ac9703d7.gif"
];

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    const random = Math.floor(Math.random() * kiss.length);

    if(!args[0]){

        return msg.sendMsg("PU_NO_MENTION",message,dataServer)

    } else {

        let member1 = message.author;

        let member2 = message.guild.member(message.mentions.users.first());

        if(member2){

            const Attach = new MessageAttachment(kiss[random], `${message.author.id}.gif`);

            return msg.sendMsgI("KISS", member1.username, member2.user.username, Attach, kiss[random], message, dataServer)

        } else {

            return await msg.sendMsg("PU_NO_USER", message, dataServer);

        }

    }
}

exports.help = {
    name: 'kiss',
};