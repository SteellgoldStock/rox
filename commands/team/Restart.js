const Discord = require("discord.js");
const { client, database, msg, colors, fs, team, token} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!team.includes(message.author.id)){
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
    return await message.channel.send("I'm going to go restart, please be patient")
        .then(client.destroy())
        .then(client.login("NzMzNzYwMDcwNTAzODkwOTk0.XxIcqg.Q_H6caapjiGjo-zoxYbq6vMstKU"));
}

exports.help = {
    name: "restart",
}