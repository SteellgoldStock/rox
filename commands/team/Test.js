const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!team.includes(message.author.id)){
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }

    message.channel.send("la commande a été reload")
}

exports.help = {
    name: "test",
}