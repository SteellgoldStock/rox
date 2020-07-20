const prefix = require('../servers/config');
const fs = require('fs');

const languageData = {
    WARNING_PRENIUM: prefix.warning + ": is configurable",
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

    CC_EXIST: (pr) => `Cette commande existe déjà, veuillez choisir un autre nom ou la supprimer avec \`${pr}customCmds del [commandName]\``,
    CC_NOT_EXIST: (pr) => `Cette commande n'existe pas, si vous voulez l'ajouter utilisez \`${pr}customCmds add [commandName] [messageContent]\``,
    CC_DELETED: (cmd) => `Vous avez supprimer la commande \`${cmd}\``,
    CC_ADD: (cmd) => `Vous avez ajouté(e) la commande \`${cmd}\``,
    CC_UPDATED: (msgSend) => `Vous avez modifié le message que donne la commande en \`${msgSend}\``,
    CC_MAX: (haveCC) => `Vous avez atteint la limite des commandes personalisées que vous pouvez avoir pour le moment ` + "**(" + haveCC + "/15)**" + `, nous avons fixé une limite pour optimiser notre serveur, une amélioration du bot sera faite, ou nous allons augmenter la limite et ajouter une "version" prenium :star: du bot pour désactiver cette limite, et avoir d'autres avantages`,
    CC_SEND_LIMIT: (haveCC) => `You have created an order without the prenium option, you have **` + haveCC + `** commands out of **15** maximum, in the future, we'll increase the commands limit without the prenium option.`,

    // TRANSLATE
    TRANSLATED_TEXT: (te) => `J'ai traduit votre demande, voici le résultat de votre traduction en ` + te + " :flag_" + te + ":",

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
    JOIN_MSG_MISSING_ARGUMENTS: (p) => `Vous avez manqué des arguments, si vous voulez de l'aide avec cette commande utilisez \`${p}joinMsg help\``,

    // PRENIUM EMBED
    PRENIUM_WARNING: "Tous les litiges ouverts sur PayPal, seront sanctionnés par une liste noire du bot, aucune commandes provenant de vous ne pourra être exécutée, ou même de votre serveur si l'insistance est forte",
    PRENIUM_SKILLS_USER: "Avantage de l'utilisateur",
    PRENIUM_SKILLS_SERVER: "Avantages du serveur choisi",



    // MINI
    USER: "Utilisateur",
    SERVER: "Serveur",

    ALREADY_PRENIUM: (us) => "Wow, " + us + " vous êtes un utilisateur du prenium, accédez à vos avantages dans la page d'aide du bot, une catégorie s'affichera automatiquement, les commandes ne seront utilisables que pour vous",
    // BENEFITS
    PRENIUM_USER_BENEFIT_1: "**×** Lors ce que vous parler, vos messages se transforme automatiquement en embed, cette option à malheuresement un cooldown de 3 seconde avant chaque embed, si le rechargement n'est pas finis, le message sera sous forme de texte simple" + prefix.warning,
    PRENIUM_USER_BENEFIT_2: "**×** Pouvoir choisir un arière plan des jauges d'xp" + prefix.warning,
    PRENIUM_USER_BENEFIT_3: "**×** Rôle prenium sur le serveur discord du bot",
    PRENIUM_USER_BENEFIT_4: "**×** Les personne ayant le prenium peuvent utiliser les commandes même lors ce que le bot est en maintenance",
    PRENIUM_USER_BENEFIT_5: "**×** Vous pouvez changer le serveur auquel vous avez attribué le prenium",

    PRENIUM_SERVER_BENEFIT_1: "**×** Dans le classement des serveurs ayant le plus d'xp, afficher un emoji " + prefix.prefixPrenium + " pour mettre en avant le serveur",
    PRENIUM_SERVER_BENEFIT_2: "**×** Pour pouvoir activer **Rox Beta** sur son serveur" + prefix.warning,
    PRENIUM_SERVER_BENEFIT_3: "**×** Ajoutez autant de commandes personalisées que vous le souhaitez",

    REFUND: "__Aucun remboursement n'est possible__"
};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(args);
    else return translation;
};

module.exports = translate;
