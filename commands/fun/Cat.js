const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const { MessageAttachment } = require('discord.js');
const r2 = require('r2');
const querystring = require('query-string');
const CAT_API_URL = 'https://api.thecatapi.com/';
const CAT_API_KEY   = "77900680-045a-4956-a81e-0543e747c71f";

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    var images = await loadImage(message.author.username);
    var image = images[0];
    await message.channel.send(":cat2: Miaouw\n" + image.url);
}

async function loadImage(sub_id)
{
    var headers = {
        'X-API-KEY': CAT_API_KEY,
    }
    var query_params = {
        //'has_breeds':true,
        'mime_types':'jpg,png',
        'size':'med',
        'sub_id': sub_id,
        'limit' : 1
    }

    let queryString = querystring.stringify(query_params);

    try {
        let _url = CAT_API_URL + `v1/images/search?${queryString}`;
        var response = await r2.get(_url , {headers} ).json
    } catch (e) {
        console.log(e)
    }
    return response;
}


exports.help = {
    name: "cat",
}