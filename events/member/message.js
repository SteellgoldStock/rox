const { client, colors, botConfg, fs, database} = require("../../rox");

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

        if (message.content.indexOf(prefix) !== 0) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        database.query(`SELECT * FROM blacklist WHERE userid=${message.author.id}`, function (error, results, fields) {
            if (error) {
                return false;
            } else if (results.length > 0) {
                return message.channel.send("Vous êtes blacklist du bot CHEH") // Message a edit via en.js 
            } else {
                const cmd = client.commands.get(command);
                if (!cmd) return;

                switch (cmd.help.type)
                {
                    default:
                        cmd.run(client, message, args, fs, colors, database, dataServer, language);
                        break;
                }
            }
        });
    });
});