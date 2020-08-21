const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, green, red, beta, embedBuilder, advBp, advGems, advBank, advResources,advFood, advEnergy} = require("../../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;
    if (!beta.includes(message.author.id)) return message.channel.send("This command is not avaible, is only for the staff, is a feature avaible in really, really, really, long time");

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        } else if (results.length > 0) {
            if(results[0].bread >= 1){
                if(results[0].energy >= 50){
                    embedBuilder.embed0Field(message.channel,"",language("ADV_BREADED_MAX"),red,embedBuilder.bFooter);
                }else{
                    advFood.removeBread(message.author.id,results[0].bread,1,database)
                    advEnergy.addEnergy(message.author.id,results[0].energy,5,database)
                    embedBuilder.embed0Field(message.channel,"",language("ADV_BREADED"),green,embedBuilder.bFooter);
                }
            }else{
                embedBuilder.embed0Field(message.channel,"",language("ADV_BREAD_NOT"),red,embedBuilder.bFooter);
            }
        }
    });
}

exports.help = {
    name: 'adv_bread',
};