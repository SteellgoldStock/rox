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

        if (message.guild.id == 699343389291839900){
            return message.reply(":warning: Le bot est actuellement en développement, si vous voulez suivre l'aventure rejoingez le discord du bot, l'invitation sera donnée lors ce que le bot sera finalisée ou prêt à être en bêta\n> https://discord.gg/Yee8dWA").then(message => {
                message.delete({ timeout: 5000 })
            })
        }

        database.query(`SELECT * FROM blacklist WHERE userid=${message.author.id}`, function (error, results, fields) {
            if (error) {
                return false;
            } else if (results.length > 0) {
                return message.channel.send("Vous êtes blacklist dut bot CHEH")
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