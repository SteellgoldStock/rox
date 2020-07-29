const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!args[0]){ return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)}

    const answers = args.join(" ").split("/");
    if (answers.length < 2) return msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)
    if (answers.some(answer => !answer))
        return msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)

    await msg.sendMsg("CHOICE_PROGRESS",message,dataServer)

    setTimeout(() => {
        const result = answers[parseInt(Math.floor(Math.random() * answers.length))];
        message.channel.send("```" + result + "```");
    }, 1500);
}


exports.help = {
    name: "choice",
}