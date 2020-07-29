const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");

const fr = {
    "DESCRIPTION": "Je vous dis la vérité !",
    "ERR_QUESTION": "Vous devez me poser une question!",
    "RESPONSE_1": "Je suis sur de ça.",
    "RESPONSE_2": "c'est définitivement sûr.",
    "RESPONSE_3": "oui, définitivement.",
    "RESPONSE_4": "mieux vaut ne pas vous le dire maintenant.",
    "RESPONSE_5": "demandez plus tard.",
    "RESPONSE_6": "ne comptez pas là-dessus.",
    "RESPONSE_7": "Je ne pense pas.",
    "RESPONSE_8": "mes sources me disent que non.",
    "RESPONSE_9": "non.",
    "RESPONSE_10": "les pronostics ne sont pas très bons."
}
const en = {
    "DESCRIPTION": "I'm telling you the truth!",
    "ERR_QUESTION": "You have to enter a question to ask me!",
    "RESPONSE_1": "I'm sure of it.",
    "RESPONSE_2": "it's definitely safe.",
    "RESPONSE_3": "yes, definitely.",
    "RESPONSE_4": "better not tell you now.",
    "RESPONSE_5": "ask again later.",
    "RESPONSE_6": "don't count on it.",
    "RESPONSE_7": "I don't think.",
    "RESPONSE_8": "my sources say no.",
    "RESPONSE_9": "no.",
    "RESPONSE_10": "outlook not so good."
}

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!args[0]){ return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)}

    const answerNO = parseInt(Math.floor(Math.random() * 10), 10);
    switch (answerNO){
        case 1:
            if(dataServer.lang == "fr"){
                await message.reply(fr.RESPONSE_1);
            }else{
                await message.reply(en.RESPONSE_1);
            }
            break;
        case 2:
            if(dataServer.lang == "fr"){
                await message.reply(fr.RESPONSE_2);
            }else{
                await message.reply(en.RESPONSE_2);
            }
            break;
        case 3:
            if(dataServer.lang == "fr"){
                await message.reply(fr.RESPONSE_3);
            }else{
                await message.reply(en.RESPONSE_3);
            }
            break;
        case 4:
            if(dataServer.lang == "fr"){
                await message.reply(fr.RESPONSE_4);
            }else{
                await message.reply(en.RESPONSE_4);
            }
            break;
        case 5:
            if(dataServer.lang == "fr"){
                await message.reply(fr.RESPONSE_5);
            }else{
                await message.reply(en.RESPONSE_5);
            }
            break;
        case 6:
            if(dataServer.lang == "fr"){
                await message.reply(fr.RESPONSE_6);
            }else{
                await message.reply(en.RESPONSE_6);
            }
            break;
        case 7:
            if(dataServer.lang == "fr"){
                await message.reply(fr.RESPONSE_7);
            }else{
                await message.reply(en.RESPONSE_7);
            }
            break;
        case 8:
            if(dataServer.lang == "fr"){
                await message.reply(fr.RESPONSE_8);
            }else{
                await message.reply(en.RESPONSE_8);
            }
            break;
        case 9:
            if(dataServer.lang == "fr"){
                await message.reply(fr.RESPONSE_9);
            }else{
                await message.reply(en.RESPONSE_9);
            }
            break;
        case 10:
            if(dataServer.lang == "fr"){
                await message.reply(fr.RESPONSE_10);
            }else{
                await message.reply(en.RESPONSE_10);
            }
            break;
    }
}


exports.help = {
    name: "8ball",
}