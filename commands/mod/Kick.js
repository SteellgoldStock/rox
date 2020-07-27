const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.member.roles.cache.find(r => r.name === dataServer.adminRole) || !message.member.roles.cache.find(r => r.name === dataServer.modRole)) {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }

    const user = message.mentions.users.first();
    const reason = args.slice(1).join(" ");
    if(!reason){ const reason = "No reason" }

    if (user) {
        const member = message.guild.member(user);

        if (member) {
            if(member.id !== message.member.id){
                
                if(!member.roles.cache.find(r => r.name === dataServer.adminRole) || !message.member.roles.cache.find(r => r.name === dataServer.modRole)){
                
                    member
                .kick({
                    reason: reason,
                })
                .then(() => {
                    return msg.sendMsgA(language("SUCCESS_KICK",member.username, reason),message,dataServer)}
                })
                .catch(err => {
                    msg.sendMsg("KICK_IMPOSSIBLE", message, dataServer);
                    return console.error(err);
                });
                    
                } else {
                    
                    return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
                    
            } else {
            
                return await msg.sendMsg("NOT_YOURSELF", message, dataServer);
               
            }
            
        } else {
            
            return await msg.sendMsg("KICK_NO_USER", message, dataServer);
            
        }
    } else {
        
        return await messages.sendMsg(message,message.guild.id,language("KICK_NO_MENTION"),message.guild.name);
        
    }
}

exports.help = {
    name: "kick",
    type: "mod"
}
