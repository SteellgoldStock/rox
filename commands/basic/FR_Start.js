const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!message.guild) return;

    let embed = new Discord.MessageEmbed()
        .setTitle("Salut !")
        .setDescription("Merci de m'avoir ajouté, j'espère que je ne vous décevrai pas.")
        .addField("<:rox:746093259432001687> Invite","Pour m'inviter, c'est très simple, utilisez la commande `!invite` pour recevoir [le lien d'invitation ou cliquer simplement ici](https://discord.com/api/oauth2/authorize?client_id=733760070503890994&permissions=8&scope=bot), une question **pourquoi je demande la permission de l'administrateur?** car j'ai énormement de fonctionnalitées, donc pour éviter de deviner quel permission il faut pour tel fonctionnalitées, le meuilleur est de mettre administrateur, pendant ma phase de bêta tout les serveurs ou j'était, on m'a donné la permission administrateur, et il n'y a eu aucun problème, cependant si vous ne me faite toujours pas confiance je vous donne ce lien au quel vous pourrez choisir les permissions [cliquer ici](https://discord.com/api/oauth2/authorize?client_id=733760070503890994&permissions=2147483639&scope=bot) en qui vous n'avez pas confiance ou qui ne me fait pas confiance, qui sera votre libre choix")
        .addField("<:book3:746093702489047151> Support","Avez-vous besoin d'aide ? Si oui, je vous invite à vous joindre à mon [discord](https://discord.gg/NVBwmFz) qui est fait pour cela, ou aller voir mon [wiki](https://doc.rox.wtf), il est très bien fourni!")
        .addField("<a:config:738108401208262738> Configuration","Pour commencer à utiliser le bot, configurez un rôle d'administrateur et un autre de modérateur, avec la commande `!roles` qui n'est utilisable que par les *aminRole*, et les personnes ayant la permission `ADMINISTRATOR`")
        .setTimestamp()
        .setColor("#4e64b5")
        .setFooter('Rox • ' + msg.version,client.user.avatarURL())
    message.channel.send(embed)
    message.channel.send(":flag_us: For a english version of the message, execute the command `!us_start`")

}

exports.help = {
    name: "fr_start",
}
