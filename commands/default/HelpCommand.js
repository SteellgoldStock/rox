const Discord = require("discord.js");
const { client, botConf } = require('../../index');
const fs = require("fs");
const messages = require("./../../events/functions/messages");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    let config = require('../../servers/config')
    const guildLanguage = db["lang"] || "en";
    const language = require(`../../languages/${guildLanguage}`);

    if(message.content.startsWith(prefix + "help")) {
        let embed = new Discord.RichEmbed()
        embed.setTitle(config.helpBook + language("HELP_EMBED_TITLE"))
        embed.setDescription(language("HELP_EMBED_DESCRIPTION"))
        embed.addField("× " + language("HELP_EMBED_FIELD_INFORMATIONS"), language('HELP_COMMAND_INVITE'))
        embed.addField("× " + language("HELP_EMBED_FIELD_FUN"), "L")
        embed.addField("× " + language("HELP_EMBED_FIELD_MODERATION"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
        embed.addField("× " + language("HELP_EMBED_FIELD_ADMINISTRATOR"), language('HELP_COMMAND_PREFIX_SET', prefix) + language('HELP_COMMAND_LANG_SET', prefix) + language('HELP_COMMAND_XP_STATUS_SET', prefix))
        if (config.teamMemberIds.includes(message.author.id)) {
            embed.addField("× " + language("HELP_EMBED_FIELD_TEAM"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
        }
        embed.setFooter(config.footerEmbed)

        message.channel.send(embed)
    }
});