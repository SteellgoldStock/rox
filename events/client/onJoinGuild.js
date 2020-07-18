const Discord = require("discord.js");
const { client, guildLanguages, guildPrefixs } = require('../../index');
const config = require('../../servers/config');
const fs = require('fs');

client.on('guildCreate',guild => {
    if (guild.channels.exists('name', "general")) {
        let embed = new Discord.RichEmbed()
        embed.setTitle(config.prefixFox + "Rox")
        embed.setDescription("Thanks for adding me, you can configure the language of the bot on the server with the `!setlang` command, or view the help page with `!help`.")
        embed.setFooter(config.footerEmbed)
        guild.channels.find(`name`,`general`).send(embed);

        let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
        let dbInfo = db[message.guild.id];
        dbInfo.name = message.guild.name
        dbInfo.lang = "en"
        dbInfo.prefix = "!"

        fs.writeFile("./database.json", JSON.stringify(db), (x) => {
            if (x) console.error(x)
        });

        return;
    }else{
        return;
    }
});