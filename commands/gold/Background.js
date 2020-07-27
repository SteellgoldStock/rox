const Discord = require("discord.js");
const { client, botConfg, fs, colors, msg, database} = require("../../rox");

let request = require(`request`);

function download(url,id){
    request.get(url)
        .on('error', console.error)
        .pipe(fs.createWriteStream('database/users/backgrounds/' + id + ".png"));
}

function isImg(msgAttach) {
    var url = msgAttach.url;
    return url.indexOf("png", url.length - "png".length) !== -1;
}

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    console.log("e")
    let sql = `SELECT * FROM goldUsers WHERE userid = ${message.author.id}`;
    database.query(sql, function (error, results, fields) {
        if (error) {
            return console.log(error);
        } else if (results.length > 0) {
            if(message.attachments.first()){
                if(isImg(message.attachments.first())){
                    download(message.attachments.first().url, message.author.id);

                    return msg.sendMsgA(language("DOWNLANDED",dataServer.prefix),message,dataServer);
                }else{
                    return msg.sendMsg("NOT_IMG",message,dataServer)
                }
            }else{
                return msg.sendMsg("NOT_IMG",message,dataServer)
            }
        } else {
            return msg.sendMsg("NOT_GOLD_USER",message,dataServer)
        }
    });
}

exports.help = {
    name: "background"
}
