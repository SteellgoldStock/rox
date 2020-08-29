const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!message.guild) return;

    if(!args[0]){
        const dbc = JSON.parse(fs.readFileSync("database/ccommands/" + message.guild.id + ".json", "utf8"));
        if(Object.keys(dbc).length == 0){
            exports.resp = "This guild don't have custom command, to add use `" + dataServer.prefix + "commands add [commandName] [text]`, if you want have a message out of the ordinary click [here](https://doc.rox.wtf/configs/messages/tags)"
        }else {
            var item;

            exports.resp = " ";

            for (item in dbc) {
                exports.resp += "`" + item + "`,"
            }
        }

        const embed = new Discord.MessageEmbed()
            .setTitle("Rox • Help")
            .setDescription(language("HELP_DESCRIPTION",dataServer.prefix))
            .addField(language("HELP_ADMIN_FIELD"),"`prefix`,`lang`,`channels`,`roles`,`messages`,`interserver`")
            .addField(language("HELP_MOD_FIELD"),"`kick`,`ban`,`mute`,`tempmute`,`unmute`,`warn`,`warns`,`unwarn`,`purge`")
            .addField(language("HELP_FUN_FIELD"),"`cat`,`dog`,`memes`,`door`,`challmc`,`achimc`,`8ball`,`choice`,`ascii`, `lovecalc`, `kiss`, `hug`, `punch`, `btt`")
            .addField(language("HELP_MUSIC_FIELD"),"`play`,`splay`,`stop`,`pause`,`resume`,`skip`,`queue`,`volume`")
            .addField(language("HELP_BASIC_FIELD"),"`help`, `invite`, `ticket`")
            .addField(language("HELP_CC_FIELD",message.guild.name),exports.resp)
            .addField("Adventure","Contact a member team of the bot to have chance to enter in the beta")
            // .addField(language("HELP_GOLD_USER_FIELD",message.guild.name),"`background`")
            // .addField(language("HELP_GOLD_SERVER_FIELD",message.guild.name),"`embedconf`")
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setFooter('Rox • ' + msg.version,message.author.avatarURL({dynamic:true}))

        message.channel.send(embed)
    }else{
        database.query(`SELECT * FROM cmds WHERE name='${args[0]}'`, function (error, results, fields) {
            if (error) {
                return console.log(error);
            } else if (results.length > 0) {
                send(results[0],message,dataServer)
            } else {
                return msg.sendMsgA(language("HELP_UNKNOW_COMMAND",args[0]),message,dataServer)
            }
        });
    }
}

async function send(res,message, data){
    if(data.lang === "fr"){
        exports.desc = res.descriptionFr;
    }else{
        exports.desc = res.descriptionEn;
    }

    let embed = new Discord.MessageEmbed()
        .setTitle("Rox • " + data.prefix + res.name + " | help")
        .setDescription(exports.desc + "\n\n» `" + data.prefix + res.usage + "`")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter('Rox • v1.0',client.user.avatarURL())
    message.channel.send(embed)
}

exports.help = {
    name: "help",
}