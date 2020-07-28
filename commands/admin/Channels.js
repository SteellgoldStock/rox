const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!message.member.roles.cache.find(r => r.name === dataServer.adminRole)){
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }

    if(!args[0]){ return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)}
    switch (args[0]) {
        
    }
}

exports.help = {
    name: "lang",
}