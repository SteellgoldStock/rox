const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer) => {
    if(!message.member.roles.cache.find(r => r.name === dataServer.adminRole)){
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }

    if(!args[0]){ return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)}
    if(args[0].length >= 3){ return await msg.sendMsg("MAXIMUM_VALUE",message,dataServer)}

    var sql = `UPDATE servers SET prefix = '${args[0]}' WHERE guildid = '${message.guild.id}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });

    await msg.sendMsg("UPDATED",message,dataServer);
}

exports.help = {
    name: "prefix",
}