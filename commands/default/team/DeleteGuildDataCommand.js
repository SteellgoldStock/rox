const Discord = require("discord.js");
const { client, botConf } = require('../../../index');
const fs = require("fs");
const prefixs = require("../../../servers/config");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    const language = require(`../../../languages/${db["lang"]}.js`);

    if (message.content.startsWith(prefix + "deleteGuild")) {
        if(botConf.maintenance == true){
            const config = require("./../../../servers/config");
            if(!config.teamMemberIds.includes(message.author.id)){
                messages.inMaintenance(message);
                return;
            }
        }

        if(prefixs.teamMemberIds.includes(message.author.id)){
            const id = message.content.split(" ")[1];
            if(fs.existsSync('database/guilds/' + id + ".json")){
                message.channel.send(language("GUILD_DELETED",id))
                const channel = client.guilds.get(id).channels.filter(c => c.type === 'text').find(x => x.position == 0);

                let invite = channel.createInvite({
                    unique: true
                })

                let db2 = JSON.parse(fs.readFileSync("database/guilds/" + id + ".json", "utf8"));

                message.channel.send(language("GUILD_INVITE") + db2["invitation"]);
                client.guilds.get(id).leave()
                return fs.unlinkSync("database/guilds/" + id + ".json");
            }else{
                return message.channel.send(language("GUILD_NOT_EXIST",id));
            }
        }else{
            return message.channel.send(language("NOT_IN_TEAM"));
        }
    }
});