const languageData = {
    // MSG UTIL
    MENTION_BOT: (prefix, username) => `Grrr ${username}, si tu veut me caresser fait \`${prefix}rub\` si tu veut savoir de quoi je suis capable execute la commande \`${prefix}help\``,

    // ERROR MSG
    NOT_GUILD: `Désoler, mais vous ne pouvez pas utiliser de commandes dans les messages privées du bot`,
    NOT_PRENIUM_GUILD: `Désolé, ce serveur n'est pas prenium`,
    PERMISSION_DENIED: `Vous n'avez pas la permission d'utiliser cette commande, demandez à une personne plus haut placée que vous de vous aider`,
    NOT_PRENIUM: `Vous n'êtes pas membre de Rox Prenium, vous ne pouvez donc pas activer un serveur`,
    ALREADY_ACTIVED: `Ce serveur a déjà été activé`,
    ACTIVE_USED: `Vous avez déjà activé un serveur`,

    // HELP MSG
    ROLES_TYPE_HELP: (prefix) => `Vous avez oublié l'argument \`type\` voici une aide pour mieux vous expliquer comment fonctione la commande: \`${prefix}roles [adminRole/modRole] [Nom du Rôle]\``,
    ROLES_ROLE_HELP: (prefix) => `Vous avez oublié l'argument \`role\` voici une aide pour mieux vous expliquer comment fonctione la commande: \`${prefix}roles [adminRole/modRole] [Nom du Rôle]\``,
    ROLE_NOT_EXIST: (role) => `Le rôle \`${role}\` n'existe pas`,
    ROLES_TYPE_LIST: (action) => `Le type \`${action}\` n'existe pas, utilisez plutôt \`adminRole\` ou \`modRole\``,
    ROLES_UPDATED: `Les rôles ont été modifiés`,

    // SUCCESS MSG
    ACTIVED_SERVER: (serverName) => `Vous avez été activé le serveur ${serverName} exécuter la commande \`${prefix}benefits\` pour voir les avantages de ce serveur grâce au prenium`
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
