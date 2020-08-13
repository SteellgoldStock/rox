const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!message.guild) return;

    let embed = new Discord.MessageEmbed()
        .setTitle("Hello !")
        .setDescription("Thanks for adding me, i hope I don't disappoint you.")
        .addField("<:rox:737051270980042783> Invite","To invite me it's very simple, use the command `!invite` [to receive the invitation link or click here](https://discord.com/api/oauth2/authorize?client_id=733760070503890994&permissions=8&scope=bot), **why do I ask for admin permission?** because I have a lot of features, so to avoid guessing what permission is needed for this feature, the best thing to do is to put admin, during my beta phase all the servers I was on, I was given admin permission, and there was no problem, however if you still don't trust me I'll give you this link where you can choose the permissions [click here](https://discord.com/api/oauth2/authorize?client_id=733760070503890994&permissions=2147483639&scope=bot)")
        .addField("<:book3:733698761171271750> Support","Do you need help? If so, I invite you to join my [discord](https://discord.gg/NVBwmFz) which is made for that, or go see my [wiki](https://doc.rox.wtf), it's very well provided!")
        .addField("<a:config:738108401208262738> Configuration","To start using the bot, configure one role as admin and another one as moderator, with the command `!roles` which is only usable by roles admins, and people with `ADMINISTRATOR` permission")
        .setTimestamp()
        .setColor("#4e64b5")
        .setFooter('Rox • ' + msg.version,client.user.avatarURL())
    message.channel.send(embed)
    message.channel.send(":flag_fr: Pour une version française du message executez la commande `!fr_start`")

}

exports.help = {
    name: "us_start",
}
