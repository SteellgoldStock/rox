const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (message.member.roles.cache.has(dataServer.adminRole) || message.member.hasPermission('ADMINISTRATOR')) {
        if(dataServer.isGold == 0){
            return await msg.sendMsg("NOT_GOLD_SERVER", message, dataServer)
        }

        if (!args[0]) {
            return await msg.sendMsg("INVALID_ARGUMENT_EMBECONF", message, dataServer)
        }

        switch (args[0]) {
            case "config":
                if (!args[1]) {
                    return await msg.sendMsg("INVALID_ARGUMENT_EMBECONF_0",message, dataServer)
                }

                switch (args[1]){
                    case "title":
                        await update("title", args.slice(2).join(" "), message.guild.id);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        await msg.sendMsgA(language("IMG_TITLE_DISABLE",dataServer.prefix), message, dataServer);
                        break;
                    case "imgUrl":
                        await update("url", args.slice(2).join(" "), message.guild.id);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        await msg.sendMsgA(language("IMG_URL_DISABLE",dataServer.prefix), message, dataServer);
                        break;
                    case "color":
                        await update("color", args.slice(2).join(" "), message.guild.id);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                }
                break;
            case "status":
                if (!args[1]) {
                    return await msg.sendMsg("INVALID_ARGUMENT_EMBECONF_1", message, dataServer)
                }

                switch (args[1]) {
                    case "on":
                        await update("on", args.slice(2).join(" "), message.guild.id);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                    case "off":
                        await update("off", args.slice(2).join(" "), message.guild.id);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                }
                break;
        }
    } else {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

async function update(type, text, guildid){
    switch (type) {
        case "title":
            var title = `UPDATE servers SET embedTitle = '${text}' WHERE guildid = '${guildid}'`;
            database.query(title, function (err) {
                if (err) throw err;
            });
            break;

        case "url":
            var url = `UPDATE servers SET embedImgURL = '${text}' WHERE guildid = '${guildid}'`;
            database.query(url, function (err) {
                if (err) throw err;
            });
            break;

        case "color":
            var color = `UPDATE servers SET embedColor = '${text}' WHERE guildid = '${guildid}'`;
            database.query(color, function (err) {
                if (err) throw err;
            });
            break;

        case "on":
            console.log("on")
            var on = `UPDATE servers SET msgEmbed = 1 WHERE guildid = '${guildid}'`;
            database.query(on, function (err) {
                if (err) throw err;
            });
            break;

        case "off":
            console.log("off")
            var off = `UPDATE servers SET msgEmbed = 0 WHERE guildid = '${guildid}'`;
            database.query(off, function (err) {
                if (err) throw err;
            });
            break;
    }
}

exports.help = {
    name: "embed",
}