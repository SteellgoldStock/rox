const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    let reason;
    if (await msg.Role(message.member, "modo", message, dataServer) === true || await msg.Role(message.member, "admin", message, dataServer) === true) {
        const count = args[0];
        if(!count) return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer);

        message.channel.bulkDelete(count);

    } else {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

exports.help = {
    name: "purge"
}
