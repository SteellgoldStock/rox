const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer) => {
    if(await msg.Role(message.member, "admin", message, dataServer) === true || message.member.hasPermission('ADMINISTRATOR')){

    if(!args[0]){ return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)}
    if(args[0].length >= 4){ return await msg.sendMsg("MAXIMUM_VALUE",message,dataServer)}

    var sql = `UPDATE servers SET prefix = '${args[0]}' WHERE guildid = '${message.guild.id}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });

    await msg.sendMsg("UPDATED",message,dataServer);
    } else {

        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);

    }
}

exports.help = {
    name: "prefix",
}