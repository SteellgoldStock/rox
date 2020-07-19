const prefix = require('../servers/config');
const fs = require('fs');

const languageData = {
    PING: (ms) => `:ping_pong: Latence du bot: ${ms}ms`,
    INVITE: prefix.prefixMap + `Oh... tu veux m'inviter ? Voici une invitation, merci beaucoup : **discord.gg/Rnq9959**, voici un lien du serveur de support en cas de bugs, d'idées ou d'autres **discord.gg/Rnq9959**`,
    MAINTENANCE_MESSAGE: (reason) => "The bot is currently under maintenance for the reason `" + reason + "`",
    LANGUAGE_UPDATED: prefix.prefixOk + "Langue du bot mise à jour",
    PREFIX_UPDATED: (np) => prefix.prefixOk + "Le prefix du bot a bien été défini sur `" + `${np}` + "`",
    MISSING_LANGUAGE: prefix.prefixNo + "Vous devez préciser une langue valide! (english ou french)",
    HELLO: "Bonjour!",
    LANGUAGE_NO_EXIST: prefix.prefixNo + "Cette langue n'existe pas!",
    MISSING_ARGUMENTS: prefix.prefixNo + "Vous avez oublié des arguments à votre commande",
    MISSING_PERMISSIONS: prefix.prefixNo + "Tu n'a pas les permissions",
    NOT_IN_TEAM: prefix.prefixNo + "Vous n'êtes pas dans l'équipe du Bot",
    LEFT: (u) => prefix.prefixOk + "Je quitte ce discord, Chef " + u,
    GUILD_NOT_EXIST: (id) => prefix.prefixOk + "Le serveur **" + id + "** n'existe pas",
    GUILD_DELETED: (id) => prefix.prefixOk + "Les données du serveur **" + JSON.parse(fs.readFileSync("database/guilds/" + id + ".json", "utf8"))["name"] + "** a été supprimé",
    GUILD_INVITE: prefix.prefixMap + "Voici une invitation du serveur: ",

    // AUTOROLE
    NO_ROLE_SET: prefix.prefixNo + "Votre serveur n'a pas de rôle configuré, il est impossible d'activer l'autorole, veuillez utiliser `!joinRole [on] [roleId]`",
    AUTO_ROLE_ENABLE: (roleId) => prefix.prefixOk + "Vous avez activé l'autorole dans votre serveur, le rôle est <@" + roleId + ">",
    AUTO_ROLE_DISABLE: prefix.prefixOk + "Vous avez désactivé l'autorole dans votre serveur",

    AUTO_ROLE_ALREADY_ENABLE: (pr) =>  prefix.prefixOk + `L'autorole est déjà activé utilisez \`${pr}joinRole off\` pour le désactivé`,
    AUTO_ROLE_ALREADY_DISABLE: (pr) =>  prefix.prefixOk + `L'autorole est déjà désactivé utilisez \`${pr}joinRole on\` pour l'activer`,

    // Help text
    HELP_EMBED_TITLE: "Livre d'aide",
    HELP_EMBED_DESCRIPTION: "Voici les commandes qui sont disponibles sur moi",

    HELP_EMBED_FIELD_INFORMATIONS: "Commandes d'informations",
    HELP_EMBED_FIELD_SETTINGS: "Commandes de configuration",
    HELP_EMBED_FIELD_MODERATION: "Commandes de modération",
    HELP_EMBED_FIELD_ADMINISTRATOR: "Commandes d'administration",
    HELP_EMBED_FIELD_TEAM: "Commandes de la Rox Team",
    HELP_EMBED_FIELD_FUN: "Commandes fun",

    // Help Commands
    HELP_COMMAND_INVITE: (p) => "`" + p + "invite`: invitez le bot sur votre serveur, aidez nous à rendre le renard encore plus puissant !",

    HELP_COMMAND_PREFIX_SET: (p) => "`" + p + "setprefix`: permet de définir le prefix du bot sur le serveur, le prefix par défault quand le bot rejoins pour la première fois est `!` vous pouvez définir n'importe quel prefix, même des lettres\n",
    HELP_COMMAND_LANG_SET: (p) => "`" + p + "setlang`: permet de définir la langue du bot sur le serveur les langues disponibles sont, `en`,`fr`, d'autres langues seront ajoutées par la suite\n",
    HELP_COMMAND_XP_STATUS_SET: (p) => "`" + p + "xpMod`: permet d'activer ou de désactiver le système d'xp, lors ce qu'il est activé les membres gagnent de l'xp par message envoyé il est possible de définir le nombre d'xp pour passer d'un niveau à l'autre avec la commande `!?`\n",

    // CONFIG MSGS EVENT
    JOIN_MSG_HELP: (p) => `Pour configurer les message de bienvenue, executer la commande \`${p}joinMsg [on/off] [channelName] [msg]\` vous pouvez utilisé quelques tags pour diversifier votre message:\n\n- \`{mention}\` pour mentionner l'utilisateur\n- \`{username}\` pour afficher seulement son nom d'utilisateur\n- \`{users}\` pour afficher le nombre de personne sur votre discord,\n- \`{serverName}\` pour afficher le nom du serveur`,
    JOIN_MSG_MISSING_ARGUMENTS: (p) => `Vous avez manqué des arguments, si vous voulez de l'aide avec cette commande utilisez \`${p}joinMsg help\``
};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(args);
    else return translation;
};

module.exports = translate;
