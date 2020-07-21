const Discord = require("discord.js");
const { client, botConf } = require('../../../index');
const fs = require("fs");
const messages = require("./../../../events/functions/messages");
const prefixs = require("./../../../servers/config");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    const language = require(`../../../languages/${db["lang"]}.js`);

    if (message.content.startsWith(prefix + "servers")) {
        if(botConf.maintenance == true){
            const config = require("./../../../servers/config");
            if(!config.teamMemberIds.includes(message.author.id)){
                messages.inMaintenance(message);
                return;
            }
        }

        if (prefixs.teamMemberIds.includes(message.author.id)) {
            let embed = new Discord.RichEmbed()
            embed.setTitle(prefixs.prefixFox + "Servers")
            embed.setDescription(client.guilds.map(r => r.name + " - " + r.memberCount + " users"))
            embed.setFooter(prefixs.footerEmbed)

            return message.channel.send(embed);
        } else {
            return message.channel.send(language("NOT_IN_TEAM"));
        }
    }
});