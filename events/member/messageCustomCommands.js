const { client, colors, botConfg, fs, database, msg} = require("../../rox");

client.on('message',message => {
    if (!message.guild) return;
    let dbC = JSON.parse(fs.readFileSync("database/ccommands/" + message.guild.id + ".json", "utf8"));

    let sql = `SELECT * FROM servers WHERE guildid = ${message.guild.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        const prefix = results[0].prefix

        Object.keys(dbC).forEach(function (prop) {
            exports.commandName = prop;

            if (message.content.startsWith(prefix + exports.commandName)) {
                if (Object.keys(dbC).includes(exports.commandName)) {
                    String.prototype.allReplace = function (obj) {
                        var retStr = this;
                        for (var x in obj) {
                            retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
                        }
                        return retStr;
                    };

                    const args = message.content.slice(prefix.length).trim().split(/ +/g);
                    message.channel.send(dbC[prop].allReplace(
                        {
                            '{mention}': "<@" + message.author.id + ">",
                            '{serverName}': message.guild.name,
                            '{username}': message.author.username,
                            '{sayMessage}': args.slice(1).join(" ")
                        }))
                } else {

                }
            }
        });
    });
});


String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};