const Discord = require("discord.js");
const { client, guildLanguages, guildPrefixs } = require('../../index');
const config = require('../../servers/config');
const fs = require('fs');

client.on('guildCreate',guild => {
    const channel = guild.channels.filter(c => c.type === 'text').find(x => x.position == 0);
    sendBaseMsg(channel)

    if(fs.existsSync("database/guilds/" + guild.id + ".json")) {
        console.log(guild.name + " has already a file data, can't re-create one");
    } else {
        let invite = channel.createInvite();

        var jsonData = `{
            "name":"${guild.name}",
            "lang": "en",
            "prefix": "!",
            "eventMsg": false,
            "autoRole": false,
            "autoRoleId": "0",
            "joinChannelId": "0",
            "quitChannelId": "0",
            "joinMsg": "0",
            "adminRole": "0",
            "modRole": "0"
        }`;

        var jsonObj = JSON.parse(jsonData);

        var jsonContent = JSON.stringify(jsonObj);
        fs.writeFile("database/guilds/" + guild.id + ".json", jsonContent, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }

            console.log("Création du fichier " + guild.id + ".json - pour le serveur : " + guild.name);
        });
    }
});

function sendBaseMsg(channel) {
    let embed = new Discord.RichEmbed()
    embed.setTitle(config.prefixFox + "Rox")
    embed.setDescription("Thanks for adding me, you can configure the language of the bot on the server with the `!setlang` command, or view the help page with `!help`.")
    embed.setFooter(config.footerEmbed)
    try {
        channel.send(embed);
    }catch (error) {
        console.log(error);
    }
}