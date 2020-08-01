const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!args[0]){ return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)}

    let random = Math.floor((Math.random() * 100) + 1)

    const answerNO = parseInt(random, 10);

    return await msg.sendMsg(`RESPONSE_${answerNO}`, message, dataServer);
}


exports.help = {
    name: "8ball",
}
