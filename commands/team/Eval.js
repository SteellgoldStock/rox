const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!team.includes(message.author.id)){
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }

    try {
        const code = args.join(' ');
        if (!code) return;
        let evaled = eval(code);

        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

        await message.channel.send(clean(evaled), { code: 'xl' });
    } catch (err) {
        await message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

exports.help = {
    name: "eval",
}