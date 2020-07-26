const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!message.guild) return;

    const embed = new Discord.MessageEmbed()
    .setTitle("Rox • Help")
        .addField("<:roxObsidian:737019320701419542> " + language("HELP_ADMIN_FIELD"),"`prefix`,`lang`")
        .addField("<:roxGlowingObsidian:737038446362886264> " + language("HELP_MOD_FIELD"),"`kick`,`ban`,`mute`,`tempmute`,`unmute`,`warn`,`warns`,`delwarn`,`purge`")
        .addField("<:roxTarget:737039627969495137> " + language("HELP_FUN_FIELD"),"``,")
        .addField("<:roxTarget:737039627969495137> " + language("HELP_BASIC_FIELD"),"``,")
        .addField("<:roxCutomCommands:737040615086489700> " + language("HELP_CC_FIELD",message.guild.name),"liste des commandes custom du serveur")
}

exports.help = {
    name: "help",
}