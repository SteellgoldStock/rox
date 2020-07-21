const languageData = {
    // MSG UTIL
    MENTION_BOT: (prefix, username) => `Grrr ${username}, if you want to pet me do \`${prefix}rub\` if you want to know what I'm capable of, execute the command. \`${prefix}help\``,

    // ERROR MSG
    NOT_GUILD: `Sorry, you can't use commands in privates messages`,
    PERMISSION_DENIED: `You do not have permission to use this command, ask someone higher up than you to help you`,
    NOT_PRENIUM: `You are not a member of Rox prenium, so you cannot activate a server.`,
    ALREADY_ACTIVED: `This server has already been activated.`,
    ACTIVE_USED: `You have already actived a server`,

    // SUCCESS MSG
    ACTIVED_SERVER: (serverName, prefix) => `You have been activated the server ${serverName} execute the \`${prefix}benefits\` to see the advantages of prenium`
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
