const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!message.guild) return;

    if(!args[0]){
        const embed = new Discord.MessageEmbed()
            .setTitle("Rox • Help")
            .setDescription(language("HELP_DESCRIPTION",dataServer.prefix))
            .addField(language("HELP_ADMIN_FIELD"),"`prefix`,`lang`,`channels`,`roles`,`messages`")
            .addField(language("HELP_MOD_FIELD"),"`kick`,`ban`,`mute`,`tempmute`,`unmute`,`warn`,`warns`,`unwarn`,`purge`")
            .addField(language("HELP_FUN_FIELD"),"`cat`,`dog`,`memes`,`door`,`challmc`,`achimc`,`8ball`,`choice`,`ascii`")
            .addField(language("HELP_BASIC_FIELD"),"`help`")
            .addField(language("HELP_CC_FIELD",message.guild.name),"liste des commandes custom du serveur a faire (enfin la j'ai la flemme)")
            .addField(language("HELP_GOLD_USER_FIELD",message.guild.name),"`background`")
            // .addField(language("HELP_GOLD_SERVER_FIELD",message.guild.name),"`embedconf`")
            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setFooter('Rox • v0.1',client.user.avatarURL())

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
    console.log(data.lang);
    if(data.lang === "fr"){
        exports.desc = res.descriptionFr;
    }else{
        exports.desc = res.descriptionEn;
    }

    let embed = new Discord.MessageEmbed()
        .setTitle("Rox • !" + res.name + " | help")
        .setDescription(exports.desc + "\n\n» `" + res.usage + "`")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter('Rox • v0.1',client.user.avatarURL())
    message.channel.send(embed)
}

exports.help = {
    name: "help",
}