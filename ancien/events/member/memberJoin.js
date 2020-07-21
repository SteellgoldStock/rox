const Discord = require("discord.js");
const { client, botConf } = require('../../index');
const fs = require("fs");
const messages = require("./../../events/functions/messages");

client.on('guildMemberAdd',member => {
    let db = JSON.parse(fs.readFileSync("database/guilds/" + member.guild.id + ".json", "utf8"));
    if(db["autoRole"] == true){
        const roleId = db["autoRoleId"];
        let autoRole = member.guild.roles.get(roleId);
        member.addRole(autoRole);
    }
});

client.on('guildMemberAdd',member => {
    let db = JSON.parse(fs.readFileSync("database/guilds/" + member.guild.id + ".json", "utf8"));

    if(db["eventMsg"] == true) {
        const channelId = db["joinChannelId"];

        String.prototype.allReplace = function (obj) {
            var retStr = this;
            for (var x in obj) {
                retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
            }
            return retStr;
        };

        member.guild.channels.find(`name`, db["joinChannelId"]).send(db["joinMsg"].allReplace({
            '{mention}': "<@" + member.id + ">",
            '{serverName}': member.guild.name,
            '{username}': member.user.username,
            '{users}': member.guild.memberCount
        }))
    }
});