const Discord = require('discord.js');
const {colors, client, fs, botConfg,messages} = require('./../../rox')

String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

client.on('guildMemberRemove',(member) =>{
    let db = JSON.parse(fs.readFileSync("database/guilds/base/" + member.guild.id + ".json", "utf8"));

    if(db["quitMsg"] == true){
        const channel = member.guild.channels.cache.find(channel => channel.name === db["quitChannel"]);

        messages.sendEvMsg(channel,member.guild.id,db["quitText"].allReplace({
            '{mention}': "<@" + member.id + ">",
            '{serverName}': member.guild.name,
            '{username}': member.user.username,
            '{users}': member.guild.memberCount
        }),member.guild.name);
    }
})