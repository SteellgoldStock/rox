const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!team.includes(message.author.id)) {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }

    let path = args[0];
    let cmdName = args[1];
    if (!path) {
        return await msg.sendMsg("MISSED_ARGUMENTS", message, dataServer)
    }
    if (!cmdName) {
        return await msg.sendMsg("MISSED_ARGUMENTS", message, dataServer)
    }

    loadCommand(path, cmdName, message.channel)
}

function loadCommand(path, cmdName, channel) {
    let props = require(`${path}`);
    console.log(colors.green("(OK) Command " + colors.gray(path) + " has been reloaded"));
    delete require.cache[require.resolve(path)]
    console.log(props.help.name)
    client.commands.delete(cmdName)
    client.commands.set(props.help.name, props);
    channel.send("I reloaded the command `" + cmdName + "`");
}

exports.help = {
    name: "reload",
}