const { client, colors, botConfg, fs, messages, database,dataGet} = require("../../rox");

client.on("message", message => {
    if (!message.guild) return;

    let sql = `SELECT * FROM servers`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        exports.prefix = results[0].prefix;
        exports.dataServer = results[0];
        console.log(exports.prefix)
    });

    if (message.content.indexOf(exports.prefix) !== 0) return;

    const args = message.content.slice(exports.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;

    switch (cmd.help.type)
    {
        default:
            cmd.run(client, message, args, fs, colors, database, exports.dataServer);
            break;
    }
});