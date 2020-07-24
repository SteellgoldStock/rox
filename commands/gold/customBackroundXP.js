const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

let request = require(`request`);

function download(url){
    request.get(url)
        .on('error', console.error)
        .pipe(fs.createWriteStream('database/users/backgrounds/' + message.author.id + ".png"));
}

function isImg(msgAttach) {
    var url = msgAttach.url;
    return url.indexOf("png", url.length - "png".length) !== -1;
}

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if(message.attachments.first()){
        if(isImg(message.attachments.first())){
            download(message.attachments.first().url);
        }else{
            message.channel.send("not img")
        }
    }
}

exports.help = {
    name: "background",
    type: "gold"
}
