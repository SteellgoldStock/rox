const { client, colors, botConfg, fs, messages } = require("../../rox");

client.on("message", message => {
    if (!message.guild) return;

    let db = JSON.parse(fs.readFileSync("database/guilds/base/" + message.guild.id + ".json", "utf8"));
    let dbC = JSON.parse(fs.readFileSync("database/guilds/ccommands/" + message.guild.id + ".json", "utf8"));
    let dbXp = JSON.parse(fs.readFileSync("database/guilds/xp/" + message.guild.id + ".json", "utf8"));

    const guildLanguage = db["lang"];
    const language = require(`../../database/lang/${guildLanguage}`);
    const prefix = db["prefix"];

    var mention = message.mentions.members.first();
    if(mention && mention.id == 733760070503890994) {
        messages.sendMsg(message,message.guild.id,language("MENTION_BOT", prefix, message.author.username),message.guild.name)
        return;
    }

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;

    switch (cmd.help.type)
    {
        default:
            cmd.run(client, message, args, fs, botConfg, colors, db, dbC, dbXp, language);
            break;
    }
});