const Discord = require("discord.js");
const { client, botConf } = require('../../../index');
const fs = require("fs");
const messages = require("./../../../events/functions/messages");
const title = require("./../../../servers/config");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    const language = require(`../../../languages/${db["lang"]}.js`);

    if (message.content.startsWith(prefix + "joinMsg")) {
        if(botConf.maintenance == true){
            const config = require("./../../../servers/config");
            if(!config.teamMemberIds.includes(message.author.id)){
                messages.inMaintenance(message);
                return;
            }
        }

        let status = message.content.split(" ")[1];
        let channelName = message.content.split(" ")[2];

        if (status == "help") {
            let embed = new Discord.RichEmbed()
            embed.setTitle(title.helpBook + language("HELP_EMBED_TITLE"))
            embed.setDescription(language("JOIN_MSG_HELP", prefix))
            embed.setFooter(title.footerEmbed)
            return message.channel.send(embed);
        }else{
            return message.channel.send(language("JOIN_MSG_MISSING_ARGUMENTS", prefix));
        }

        if (!channelName) {
            return message.channel.send(language("JOIN_MSG_MISSING_ARGUMENTS", prefix));
        }

        switch (status) {
            case "off":
                break;
        }
    }
});