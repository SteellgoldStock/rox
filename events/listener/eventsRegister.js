const Discord = require('discord.js');
const {colors, client,fs} = require('./../../rox')

loadEvent("events/client/");
loadEvent("events/member/");

function loadEvent(path) {
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
            console.log(colors.yellow("(OK) " + file + " has been loaded"));
            require("../../" + path + file);
        });
    });
}