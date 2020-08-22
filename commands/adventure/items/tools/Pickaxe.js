const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, green, red, beta, embedBuilder, advBank, advGems, advResources} = require("../../../../rox");

const pkMax = 5;

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results) => {
        if (error) {
            return console.error(error.message);
        } else if (results.length > 0) {
            if (!args[0]) {
                return embedBuilder.embed0Field(
                    message.channel,
                    language("ADV_INVENTORY_TITLE") + message.author.username,
                    language("ADV_PICKAXE_DESCRIPTION",results[0].pickaxeLvl),
                    embedBuilder.bColor,
                    embedBuilder.bFooter
                )
            } else {
                switch (args[0]) {
                    case "upg":
                    case "upgrade":
                        if (results[0].pickaxeLvl == pkMax) {
                            return embedBuilder.embed0Field(message.channel,"",language("MAX"),red,embedBuilder.bFooter);
                        }
                        

                        break;
                }
            }
        } else {
            msg.sendMsg("ADV_NOT_IN", message, dataServer)
        }
    });
}

exports.help = {
    name: 'adv_pick',
};