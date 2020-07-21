const languageData = {
    // MSG UTIL
    MENTION_BOT: (prefix, username) => `Grrr ${username}, if you want to pet me do \`${prefix}rub\` if you want to know what I'm capable of, execute the command. \`${prefix}help\``,

    // ERROR MSG
    NOT_GUILD: `Sorry, you can't use commands in privates messages`,
    NOT_PRENIUM_GUILD: `Sorry, this guild doesn't have a prenium`,
    PERMISSION_DENIED: `You do not have permission to use this command, ask someone higher up than you to help you`,
    NOT_PRENIUM: `You are not a member of Rox prenium, so you cannot activate a server.`,
    ALREADY_ACTIVED: `This server has already been activated.`,
    ACTIVE_USED: `You have already actived a server`,

    // HELP MSG
    ROLES_TYPE_HELP: (prefix) => `You forgot the argument \`type\` here is a help to better explain how the command works: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLES_ROLE_HELP: (prefix) => `You forgot the argument \`role\` here is a help to better explain how the command works: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLE_NOT_EXIST: (role) => `The role \`${role}\` is not exist`,
    ROLES_TYPE_LIST: (action) => `The type \`${action}\` not exist, use \`adminRole\` or \`modRole\``,
    ROLES_UPDATED: `Roles has been modified`,

    // SUCCESS MSG
    ACTIVED_SERVER: (serverName, prefix) => `You have been activated the server ${serverName} execute the \`${prefix}benefits\` to see the advantages of prenium`
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
