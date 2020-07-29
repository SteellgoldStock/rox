const Discord = require("discord.js");
const { client, database, msg, colors, fs, team, token} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!team.includes(message.author.id)){
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }

    await resetBot(message.channel)
}

async function resetBot(channel) {
    channel.send("I'm going to go restart, please be patient")
    await client.destroy();
}

exports.help = {
    name: "restart",
}