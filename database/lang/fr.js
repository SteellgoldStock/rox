const languageData = {
    /** Errors **/
    PERMISSION_DENIED: "Vous n'avez pas les permissions d'utiliser cette commande",
    MISSED_ARGUMENTS: "Vous avez manquées des arguments, veuillez réesseyer",
    MAXIMUM_VALUE: "Vous ne pouvez pas utiliser plus de 3 caractères, symboles ou lettres dans votre prefix, par exemple `rox!` n'est pas autorisé, par contre `r!` est autorisé, et vous pouvez ajouter encore 1 caractère",
    HELP_UNKNOW_COMMAND: (command) => `La commande \`!${command}\` n'existe pas`,
    LANG_NOT_FOUND: (lang, langs) => "La langue `" + lang + "` n'a pas été trouvé s'il vous plaît, définissez une langue valide " + langs,
    NOT_YOURSELF: "Tu ne peux pas te ban",

    /** SUCCESS **/
    UPDATED: "Vos modifications ont été enregistrées",

    /** EMBED **/
    HELP_ADMIN_FIELD: "Commande d'administrations",
    HELP_MOD_FIELD: "Commande de modérateurs",
    HELP_FUN_FIELD: "Commandes fun",
    HELP_XP_FIELD: "Système d'XP",
    HELP_BASIC_FIELD: "Commandes essentiels",
    HELP_CC_FIELD: (serverName) => "Commandes personnalisées (**" + serverName + "**)",
    HELP_GOLD_USER_FIELD: "Avantages de Gold User",
    HELP_GOLD_SERVER_FIELD: "Avantages de Gold Server",
    HELP_DESCRIPTION: (prefix) => `<:rox:737051270980042783> Pour mieux vous aider, vous pouvez utiliser \`${prefix}help [command]\` pour obtenir l'usage de la commande, les arguments, la description tout ce qui peut vous aider à utiliser le bot`,
    
    /** BAN **/
    SUCCESS_BAN: (user, reason) => `Tu as réussi à ban ${user} pour ${reason}`,
    BAN_IMPOSSIBLE: "Tu ne peux pas ban",
    BAN_NO_USER: "L'utilisateur est invalid",
    
    /** KICK **/
    SUCCESS_KICK: (user, reason) => `Tu as réussi à kick ${user} pour ${reason}`,
    KICK_IMPOSSIBLE: "Tu ne peux pas kick",
    KICK_NO_USER: "L'utilisateur est invalid"
    
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
