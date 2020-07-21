const Discord = require("discord.js");
exports.fs = require('fs');
exports.colors = require("colors");
exports.client = new Discord.Client();
exports.botConfg = require("./config/client/config.json");
exports.messages = require("./functions/messages");
exports.client.commands = new Discord.Collection();

exports.client.on('ready', () => {
    loadCommand("./commands/fun/")
    loadCommand("./commands/admin/")
    loadCommand("./commands/gold/")

    function loadCommand(path)  {
        exports.fs.readdir(path, (err, files) => {
            if (err) console.log(err);

            let jsfile = files.filter(f => f.split(".").pop() === "js")
            if (jsfile.length <= 0) {
                return;
            }

            jsfile.forEach((f, i) => {
                let props = require(`${path}${f}`);
                exports.client.commands.set(props.help.name, props);
            });
        });
    }

    require('./events/listener/eventsRegister');
})

exports.client.login(exports.botConfg.token).then(
    console.log(exports.colors.rainbow("Rox Bot is connected to Discord with 1 servers where is the bot, and 7 total users with all members of the discord"))
);