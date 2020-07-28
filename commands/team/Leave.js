const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!team.includes(message.author.id)){
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }

    client.guilds.cache.get(message.guild.id).leave()
}

exports.help = {
    name: "leave",
}