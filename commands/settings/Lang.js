const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");
const langs = ["fr","en"]

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(await msg.Role(message.member, "admin", message, dataServer) === true || message.member.hasPermission('ADMINISTRATOR')){

    if(!args[0]){ return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)}
    if(!langs.includes(args[0])){ return await msg.sendMsgA(language("LANG_NOT_FOUND",args[0],"fr, en"),message,dataServer)}

    var sql = `UPDATE servers SET lang = '${args[0]}' WHERE guildid = '${message.guild.id}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });

    const newLang = require('../../database/lang/' + args[0]);
    await msg.sendMsgA(newLang("UPDATED"),message,dataServer);
    } else {

        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);

    }
}

exports.help = {
    name: "lang",
}