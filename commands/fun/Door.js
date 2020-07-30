const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const { MessageAttachment } = require('discord.js');
const got = require('got');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    let member = message.mentions.users.first().user;

    if(!member){
        msg.sendMsg("PU_NO_MENTION",message,dataServer);
    }

    message.channel.send("<@"+member.user.id +"> " + language("DOOR_OPEN"));
}


exports.help = {
    name: "memes",
}