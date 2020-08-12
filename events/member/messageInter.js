const { client, colors, botConfg, fs, database, msg, team} = require("../../rox");

client.on("message", message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    let sql = `SELECT * FROM servers WHERE guildid = ${message.guild.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        const prefix = results[0].prefix
        const dataServer = results[0];

        const language = require('../../database/lang/' + dataServer.lang)

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);

        if(message.channel.id == results[0].interServerChannel) {
            if (!cmd) {
                message.delete();
                client.guilds.cache.forEach((guild) => {
                    let sql2 = `SELECT * FROM servers WHERE guildid = ${guild.id}`;
                    database.query(sql2, (error, results2, fields) => {
                        if (error) {
                            return console.error(error.message);
                        }

                        if (results2[0].interServerChannel !== "false") {
                            guild.channels.cache.get(`${results2[0].interServerChannel}`).send("[" + message.guild.name + "] - " + message.author.username + "**:** " + message.content);
                        }
                    });
                });
            } else {
                message.delete();
            }
        }
    });
});


String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};
