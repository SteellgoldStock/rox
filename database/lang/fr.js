const languageData = {
    // MSG UTIL
    MENTION_BOT: (prefix, username) => `Grrr ${username}, if you want to pet me do \`${prefix}rub\` if you want to know what I'm capable of, execute the command. \`${prefix}help\``,

    // ERROR MSG
    LANG_LIST: "Voici la liste des langues disponibles: `fr`, `en`",
    NOT_GUILD: `Désolé, vous ne pouvez pas utiliser les commandes dans les messages privés`,
    NOT_PRENIUM_GUILD: `Désolé, cette guilde n'a pas de prenium`,
    PERMISSION_DENIED: `Vous n'avez pas la permission d'utiliser cette commande, demandez à une personne plus haut placée que vous de vous aider`,
    NOT_PRENIUM: `Vous n'êtes pas membre de Rox prenium, vous ne pouvez donc pas activer un serveur`,
    ALREADY_ACTIVED: `Ce serveur a déjà été activé`,
    ACTIVE_USED: `Vous avez déjà activé un serveur`,
    MISSED_ARGUMENTS: `Vous avez manqué des arguments`,
    CHANNEL_NOT_EXIST: `Ce salon n'existe pas`,
    IS_NAME_ALREADY: (name) => `Le nom de ce serveur est déjà *${name}*`,
    CC_EXIST: (prefix, command) => `Cette commande existe déjà, faite \`${prefix}custcmds update ${command} [message]\` pour modifier le message quel envoie ou \`${prefix}custcmds del ${command}\` pour supprimer la commande`,
    CC_NOT_EXIST: (prefix, command) => `Cette commande n'existe pas, utilisez \`${prefix}custcmds add ${command} [message]\` pour l'ajouter`,

    // HELP MSG
    // ROLES
    ROLES_TYPE_HELP: (prefix) => `Vous avez oublié l'argument \`type\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLES_ROLE_HELP: (prefix) => `Vous avez oublié l'argument \`role\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLE_NOT_EXIST: (role) => `Le rôle \`${role}\` n'existe pas`,
    ROLES_TYPE_LIST: (action) => `L'option \`${action}\` n'existe pas, utilisez \`adminRole\` ou \`modRole\``,
    ROLES_AUTOROLE_USE: (prefix) => `Vous avez oublié l'argument \`action\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}autoRole [config/status]\``,
    ROLES_AUTOROLE_USE_2: (prefix) => `Vous avez oublié l'argument \`status\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}autoRole status [on/off]\``,
    ROLES_AUTOROLE_USE_3: (prefix) => `Vous avez oublié l'argument \`role\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}autoRole config [Role name]\``,
    // XP
    XP_TYPE_HELP: (prefix) => `Vous avez oublié l'argument \`type\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}xpconf [status/xplevel/maxlevel/logsChannel/upMsg]\``,
    XP_TYPE_STATUS: (prefix) => `Vous avez oublié l'argument \`status\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}xpconf status [on/off]\``,

    // JOIN & QUIT
    JQ_ARGS: (prefix) => `Vous avez oublié l'argument \`param\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}jqconf [join/quit] [channel/msg/status]\``,
    JQ_CHANNEL: (prefix) => `Vous avez oublié l'argument \`channelName\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}jqconf [join/quit] channel [Channel Name]\``,
    JQ_MSG: (prefix) => `Vous avez oublié l'argument \`msg\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}jqconf [join/quit] channel [msg]\` you can use use \`${prefix}jqconf tags\` tags to set in your msg`,
    JQ_STATUS: (prefix) => `Vous avez oublié l'argument \`status\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}jqconf [join/quit] status [on/off]\``,

    // EMBED
    EMBED_CONF_OPTION: `Vous avez oublié l'argument \`option\` voici la liste des options disponibles, \`[config/status]\``,
    EMBED_CONF_OPTION_ARGS: `Vous avez oublié l'argument \`param\` voici la liste des paramètres disponibles, \`[title/imgUrl]\``,
    EMBED_CONF_OPTION_STATUS: `Vous avez oublié l'argument \`status\` voici la liste des status disponibles, \`[on/off]\``,

    // SUCCESS MSG
    ACTIVED_SERVER: (serverName, prefix) => `Vous avez été activé le serveur **${serverName}** exécuter la commande \`${prefix}benefits\` pour voir les avantages du prenium`,
    UPDATED: `Vos modifications ont été enregistrées`,
    CC_ADD: (command) => `Vous avez ajouté(e) la commande \`${command}\``,
    CC_DELETED: (command) => `Vous avez supprimer la commande \`${command}\``,

    // CUSTOM COMMANDS
    CC_ARGUMENTS: (prefix) => `Vous avez oublié l'argument \`type\` voici une aide pour mieux expliquer le fonctionnement de la commande: \`${prefix}custcmds [add/del/update] [command name]\` et \`[message] pour add et update\`, vous pouvez utilisé \`${prefix}custcmds tags\` la commande vous donnera différents tags que vous pourrez placer si vous le shouaitez dans votre message`
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
