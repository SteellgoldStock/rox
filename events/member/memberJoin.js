const Discord = require("discord.js");
const { client, botConf } = require('../../index');
const fs = require("fs");
const messages = require("./../../events/functions/messages");

client.on('guildMemberAdd',member => {
    let db = JSON.parse(fs.readFileSync("database/guilds/" + member.guild.id + ".json", "utf8"));
    if(db["autoRole"] == false){ return; }

    const roleId = db["autoRoleId"];
    let autoRole = member.guild.roles.get(roleId);
    member.addRole(autoRole);
});