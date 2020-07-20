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

    if (message.content.startsWith(prefix + "prenium")) {
        if(botConf.maintenance == true){
            const config = require("./../../../servers/config");
            if(!config.teamMemberIds.includes(message.author.id)){
                messages.inMaintenance(message);
                return;
            }
        }

        let user = language("PRENIUM_USER_BENEFIT_1") + "\n" +language("PRENIUM_USER_BENEFIT_2") + "\n" +language("PRENIUM_USER_BENEFIT_3") + "\n" +language("PRENIUM_USER_BENEFIT_4") + "\n" + language("PRENIUM_USER_BENEFIT_5")
        let server = language("PRENIUM_SERVER_BENEFIT_1") + "\n" +language("PRENIUM_SERVER_BENEFIT_2") + "\n" +language("PRENIUM_SERVER_BENEFIT_3")

        let embed = new Discord.RichEmbed()
        embed.setTitle("Rox Prenium")
        embed.setDescription(language("PRENIUM_WARNING") + "\n" + language("WARNING_PRENIUM"))
        embed.addField("\n" + prefixs.prefixHead + language("PRENIUM_SKILLS_USER"),user)
        embed.addField(prefixs.prefixServer + language("PRENIUM_SKILLS_SERVER"),server)
        embed.setThumbnail("http://51.68.80.56/roxbot/iconPro.png")
        embed.setFooter(prefixs.footerEmbed)
        return message.channel.send(embed);
    }
});