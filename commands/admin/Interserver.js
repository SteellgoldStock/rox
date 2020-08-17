const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (await msg.Role(message.member, "admin", message, dataServer) === true || message.member.hasPermission('ADMINISTRATOR')) {

        if (!args[0]) {
            return await msg.sendMsg("INVALID_ARGS_IS", message, dataServer)
        }
        const mentionedChannel = message.mentions.channels.first();

        let ids = JSON.parse(fs.readFileSync("database/interIDs.json", "utf8"));

        switch (args[0]) {
            case "channel":
                if (!mentionedChannel) {
                    return await msg.sendMsg("MENTION_CHANNEL", message, dataServer)
                }

                await update("channel", mentionedChannel.id, message.guild.id);
                await msg.sendMsgA(language("IS_CHOOSE_SERVER",dataServer.prefix,ids[1],getRandomInt(10),ids[2],getRandomInt(10),ids[3],getRandomInt(2),ids[4],getRandomInt(4),ids[5],getRandomInt(6),ids[6],getRandomInt(36),ids[7],getRandomInt(62),ids[8],getRandomInt(6),ids[9],getRandomInt(26),ids[10],getRandomInt(112)),message,dataServer);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            case "network":
                if (!args[1]) {
                    return await msg.sendMsg("INVALID_ARGS_IS", message, dataServer)
                }

                if(dataServer.interServerNetwork == args[1]){
                    return msg.sendMsg("NETWORK_ALREADY",message,dataServer);
                }

                if(ids[args[1]] >= 5){
                    await msg.sendMsg("NETWORK_FULL_IS",message,dataServer);
                    return await msg.sendMsgA(language("IS_CHOOSE_SERVER",dataServer.prefix,ids[1],getRandomInt(10),ids[2],getRandomInt(10),ids[3],getRandomInt(2),ids[4],getRandomInt(4),ids[5],getRandomInt(6),ids[6],getRandomInt(36),ids[7],getRandomInt(62),ids[8],getRandomInt(6),ids[9],getRandomInt(26),ids[10],getRandomInt(112)),message,dataServer);
                }

                if(dataServer.interServerNetwork !== "false"){
                    ids[dataServer.interServerNetwork] = parseInt(ids[dataServer.interServerNetwork]) - parseInt("1");
                    fs.writeFileSync("database/interIDs.json", JSON.stringify(ids), "utf-8");
                }

                ids[args[1]] = parseInt(ids[args[1]]) + parseInt("1");
                fs.writeFileSync("database/interIDs.json", JSON.stringify(ids), "utf-8");

                await update("network", args[1], message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            default:
                await msg.sendMsg("INVALID_ARGS_IS", message, dataServer)
        }
    }else{
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

async function update(type, id, guildid){
    switch (type) {
        case "channel":
            var channel = `UPDATE servers SET interServerChannel = '${id}' WHERE guildid = '${guildid}'`;
            database.query(channel, function (err) {
                if (err) throw err;
            });
            break;
        case "network":
            var network = `UPDATE servers SET interServerNetwork = '${id}' WHERE guildid = '${guildid}'`;
            database.query(network, function (err) {
                if (err) throw err;
            });
            break;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

exports.help = {
    name: "interserver",
}