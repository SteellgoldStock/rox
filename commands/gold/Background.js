const Discord = require("discord.js");
const { client, botConfg, fs, colors, msg, database} = require("../../rox");
const path = require("path")

const axios = require('axios') //you can use any http client
const tf = require('@tensorflow/tfjs-node')
const nsfw = require('nsfwjs')

let request = require(`request`);

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    let type = args[0];
    if(!type){ return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)}
    const types = ["color","img"];
    if(!types.includes(type)){ return await msg.sendMsg("ARGS_BACKGROUND",message,dataServer) }

    switch (type){
        case "color":
            let color = args[1];
            if(!color){ return await msg.sendMsg("ARGS_BACKGROUND_1",message,dataServer)}
            if(!await isHexColor(color)){ return await msg.sendMsg("ARGS_BACKGROUND_1",message,dataServer)}

            let db = JSON.parse(fs.readFileSync("database/users/users.json", "utf8"));
            if(!db[message.author.id]){db[message.author.id] = {type:"color",color:`${args[1]}`}}else{
                db[message.author.id].type = "color";
                db[message.author.id].color = color;
            }

            fs.writeFileSync("database/users/users.json", JSON.stringify(db), "utf-8");
            await msg.sendMsg("UPDATED",message,dataServer);
            break;

        case "img":
            let sql = `SELECT * FROM goldUsers WHERE userid = ${message.author.id}`;
            database.query(sql, function (error, results, fields) {
                if (error) {
                    return console.log(error);
                } else if (results.length > 0) {
                    if(path.extname(message.attachments.first().url) == ".png" || path.extname(message.attachments.first().url) == ".jpg" || path.extname(message.attachments.first().url) == ".jpeg"){
                        fn(message.attachments.first().url)

                        /**let db = JSON.parse(fs.readFileSync("database/users/users.json", "utf8"));
                        if(!db[message.author.id]){db[message.author.id] = {type:"img",color:null}}else{
                            db[message.author.id].type = "img";
                        }
                        fs.writeFileSync("database/users/users.json", JSON.stringify(db), "utf-8");

                        download(message.attachments.first().url, message.author.id);
                        return msg.sendMsgA(language("DOWNLANDED",dataServer.prefix),message,dataServer);
                         **/
                    }else{
                        return msg.sendMsg("NOT_IMG",message,dataServer)
                    }
                } else {
                    return msg.sendMsg("NOT_GOLD_USER",message,dataServer)
                }
            });
            break
    }
}

async function isHexColor (hex) {
    return typeof hex === 'string'
        && hex.length === 6
        && !isNaN(Number('0x' + hex))
}

async function download(url,id){
    request.get(url)
        .on('error', console.error)
        .pipe(fs.createWriteStream('database/users/backgrounds/' + id + ".png"));
}

function attachIsImage(msgAttach) {
    var url = msgAttach.url;
    return url.indexOf("png" || "jpg", url.length - "png".length) !== -1;
}

async function fn(url) {
    const pic = await axios.get(url, {
        responseType: 'arraybuffer',
    })

    const model = await nsfw.load()
    const image = await tf.node.decodeImage(pic.data,3)
    const predictions = await model.classify(image)
    image.dispose()
    console.log(predictions)
    console.log(predictions)
}

exports.help = {
    name: "background"
}
