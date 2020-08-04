const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;
    if(!team.includes(message.author.id)) return message.channel.send("This command is not avaible, is only for the staff, is a feature avaible in really, really, really, long time");

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }else if(results.length > 0){
            let embed = new Discord.MessageEmbed()
            .setTitle("Inventory of " + message.author.username)
            .addField("Stats:", `<:gems:740261046480142377> Gems: ${results[0].gems}\n:wrench: ${jobFormater(results[0].job,language)}\n:house: ${houseFormater(results[0].house,language}\n`)

            message.channel.send(embed)
        }else{
            message.channel.send("Vous n'existez pas dans l'aventure")
        }
    });
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

function houseFormater(int, language) {
    switch (int) {
        case 0:
            return language("ADV_HOUSE_LEVEL_0");
        case 1:
            return language("ADV_HOUSE_LEVEL_1");
        case 2:
            return language("ADV_HOUSE_LEVEL_2");
        case 3:
            return language("ADV_HOUSE_LEVEL_3");
        case 4:
            return language("ADV_HOUSE_LEVEL_4");
        case 5:
            return language("ADV_HOUSE_LEVEL_5");
    }
}

function jobFormater(int, language) {
    switch (int) {
        case 0:
            return language("ADV_JOB_LEVEL_0");
        case 1:
            return language("ADV_JOB_LEVEL_1");
        case 2:
            return language("ADV_JOB_LEVEL_2");
        case 3:
            return language("ADV_JOB_LEVEL_3");
        case 4:
            return language("ADV_JOB_LEVEL_4");
        case 5:
            return language("ADV_JOB_LEVEL_5");
    }
}

exports.help = {
    name: 'inv',
};