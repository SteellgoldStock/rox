const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg} = require("../../rox");

const bpSizes = {
    "BP_0": 500,
    "BP_1": 2500,
    "BP_2": 5000,
    "BP_3": 7500,
    "BP_4": 9000,
    "BP_5": 11000,
}

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;
    if (!team.includes(message.author.id)) return message.channel.send("This command is not avaible, is only for the staff, is a feature avaible in really, really, really, long time");

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        } else if (results.length > 0) {
            let embed = new Discord.MessageEmbed()
            embed.setTitle(language("ADV_INVENTORY_TITLE") + message.author.username)
            embed.setDescription(language("ADV_INVENTORY_DESCRIPTION", results[0].backpackLvl, getSizeBP(results[0].backpackLvl), dataServer.prefix))

            embed.addField(language("ADV_INV_FIELD_ECONOMY"),"• "+ results[0].gems + " "+language("ADV_GEMS") +"\n"+
                "• "+ results[0].bank + language("ADV_BANK"))

            message.channel.send(embed)
        } else {
            msg.sendMsg("ADV_NOT_IN", message, dataServer)
        }
    });
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

function getSizeBP(bpLvl){
    return bpSizes["BP_"+bpLvl];
}

exports.help = {
    name: 'adv_inv',
};