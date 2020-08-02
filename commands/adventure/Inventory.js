const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;
    if(!team.includes(message.author.id)) return message.channel.send("This command is not avaible, is only for the staff, is a feature avaible in really, really, really, long time");

    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }else if(results.length > 0){
            const tools = ":pick: Pickaxe: Level " + results[0].pickaxeLvl + "\n" + ":axe: Axe: Level " + results[0].axeLvl + "\n" + "<:shovel:739478132024803349> Axe: Level " + results[0].shovelLvl

            let embed = new Discord.MessageEmbed()
                .setTitle("Inventory Bag of "+ message.author.username)
                .addField("Tools",tools)

            message.channel.send(embed)
        }else{
            message.channel.send("Vous n'existez pas dans l'aventure")
        }
    });
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

exports.help = {
    name: 'inv',
};