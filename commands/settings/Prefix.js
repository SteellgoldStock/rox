const Discord = require("discord.js");
const { client, database, messages, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!message.member.roles.cache.find(r => r.name === dataServer.adminRole)){
        return message.channel.send("You don't have permission to use this command");
    }
}


exports.help = {
    name: "prefix"
}