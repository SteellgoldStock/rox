const Discord = require('discord.js');
const {colors, client,fs} = require('./../../rox')

loadLang("database/lang/");
loadEvent("events/client/");
loadEvent("events/member/");
loadEvent("events/guild/");

function loadEvent(path) {
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
            console.log(colors.yellow("(OK) " + file + " has been loaded"));
            require("../../" + path + file);
        });
    });
}

function loadLang(path) {
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
            console.log(colors.magenta("(OK) " + file + " has been initied"));
        });
    });
}