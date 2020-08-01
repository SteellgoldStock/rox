const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!team.includes(message.author.id)) {
        return await msg.sendMsg("TEAM_NOT", message, dataServer);
    }
    
    message.channel.send(args.slice(0).join(" "))
}

exports.help = {
    name: "evalsay",
}