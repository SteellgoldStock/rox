const Discord = require('discord.js');
const {colors, client, fs, botConfg} = require('./../../rox')

client.on('guildCreate',(guild) =>{
    var baseJson = `{
        "name": "${guild.name}",
        "prefix": "!",
        "lang": "en",

        "prenium": false,
        "beta":false,
        
        "quitMsg":false,
        "joinMsg":false,
        "joinText":null,
        "quitText":null,

        "adminRole":null,
        "modRole":null,

        "msgEmbed":null,
        "msgImg":null,
        "embedTitle":null,

        "autoRole":false,
        "autoRoleName":null
    }`;
    var xpJson = `{}`;
    var ccJson = `{}`;

    var jsonObj = JSON.parse(baseJson);
    var jsonObjXp = JSON.parse(xpJson);
    var jsonObjCc = JSON.parse(ccJson);

    var jsonContent = JSON.stringify(jsonObj);
    var jsonContentXp = JSON.stringify(jsonObjXp);
    var jsonContentCc = JSON.stringify(jsonObjCc);
    fs.writeFile("database/guilds/base/" + guild.id + ".json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log(colors.red("(ERROR) An error occured while writing JSON Object to File."));
            return console.log(err);
        }

        console.log(colors.green("(OK) Création du fichier " + guild.id + ".json - pour le serveur : " + guild.name));
    });
    fs.writeFile("database/guilds/xp/" + guild.id + ".json", jsonContentXp, 'utf8', function (err) {
        if (err) {
            console.log(colors.red("(ERROR) An error occured while writing JSON Object to File."));
            return console.log(err);
        }

        console.log(colors.green("(OK) Création du fichier commandes personalisées" + guild.id + ".json - pour le serveur : " + guild.name));
    });
    fs.writeFile("database/guilds/ccommands/" + guild.id + ".json", jsonContentCc, 'utf8', function (err) {
        if (err) {
            console.log(colors.red("(ERROR) An error occured while writing JSON Object to File."));
            return console.log(err);
        }

        console.log(colors.green("(OK) Création du fichier de données d'xp " + guild.id + ".json - pour le serveur : " + guild.name));
    });
})