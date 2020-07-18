const Discord = require("discord.js");
exports.client = new Discord.Client();
exports.client.commands = new Discord.Collection();

const colors = require("colors");

const config = require("./servers/config");
const botconfig = require("./servers/bot-info.json");
const fs = require("fs");

require('./events/registry');

exports.client.on("ready", () => {
    console.log(colors.blue("Le bot est oppérationel"));

    setInterval(async () => {
        const statuslist = [
            `discord.gg/BWrjRz2 `,
            `${exports.client.guilds.size} servers `,
            `${exports.client.users.size - 1} users `,
        ];
        const random = Math.floor(Math.random() * statuslist.length);

        try {
            await exports.client.user.setPresence({
                game: {
                    name: `${statuslist[random]}` + botconfig.status,
                    type: 'Watching',
                },
                status: 'online',
            });
        }
        catch (error) {
            console.error(error);
        }
    }, 5000);
});

exports.client.login(botconfig.token);