const Discord = require("discord.js");
const { client, botConf } = require('../../index');
const fs = require("fs");
const messages = require("./../../events/functions/messages");

client.on('guildMemberRemove',member => {
    let db = JSON.parse(fs.readFileSync("database/guilds/" + member.guild.id + ".json", "utf8"));

    if(db["eventMsg"] == true) {
        const channelId = db["quitChannelId"];

        String.prototype.allReplace = function (obj) {
            var retStr = this;
            for (var x in obj) {
                retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
            }
            return retStr;
        };

        member.guild.channels.find(`name`, db["quitChannelId"]).send(db["quitMsg"].allReplace({'{mention}': "<@" + member.user.id + ">",'{username}': member.user.username, '{serverName}':member.guild.name, '{users}':member.guild.memberCount}));
    }
});