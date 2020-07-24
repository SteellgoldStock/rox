const languageData = {
    // MSG UTIL
    MENTION_BOT: (prefix, username) => `Grrr ${username}, if you want to pet me do \`${prefix}rub\` if you want to know what I'm capable of, execute the command. \`${prefix}help\``,

    // ERROR MSG
    LANG_LIST: "Ecco l'elenco delle lingue disponibili: `fr`, `en`,`es`,`jp`,`it`,`troll`",
    NOT_GUILD: `Spiacenti, non è possibile utilizzare i comandi nei messaggi privati.`,
    NOT_PRENIUM_GUILD: `Mi dispiace, questa gilda non ha Rox Gold.`,
    PERMISSION_DENIED: `Non avete il permesso di usare questo comando, chiedete a qualcuno più in alto di voi di aiutarvi.`,
    NOT_PRENIUM: `Non sei un membro del Rox prenium, quindi non puoi attivare un server.`,
    ALREADY_ACTIVED: `Questo server è già stato attivato`,
    ACTIVE_USED: `Avete già attivato un server`,
    MISSED_ARGUMENTS: `Vi siete persi alcuni argomenti`,
    CHANNEL_NOT_EXIST: `Questo salone non esiste`,
    IS_NAME_ALREADY: (name) => `Il nome di questo server è già *${name}*`,
    CC_EXIST: (prefix, command) => `Questo ordine esiste già, fatto \`${prefix}custcmds update ${command} [message]\` per modificare il messaggio che invia o \`${prefix}custcmds del ${command}\` per cancellare l'ordine`,
    CC_NOT_EXIST: (prefix, command) => `Questo comando non esiste, utilizzare \`${prefix}custcmds add ${command} [message]\` per aggiungerlo`,

    // HELP MSG
    // ROLES
    ROLES_TYPE_HELP: (prefix) => `Hai dimenticato l'argomento \`type\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLES_ROLE_HELP: (prefix) => `Hai dimenticato l'argomento \`role\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLE_NOT_EXIST: (role) => `Il ruolo \`${role}\` non esiste`,
    ROLES_TYPE_LIST: (action) => `Il tipo \`${action}\` non esiste, utilizzare \`adminRole\` or \`modRole\``,
    ROLES_AUTOROLE_USE: (prefix) => `Hai dimenticato l'argomento \`action\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}autoRole [config/status]\``,
    ROLES_AUTOROLE_USE_2: (prefix) => `Hai dimenticato l'argomento \`status\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}autoRole status [on/off]\``,
    ROLES_AUTOROLE_USE_3: (prefix) => `Hai dimenticato l'argomento \`role\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}autoRole config [Role name]\``,
    // XP
    XP_TYPE_HELP: (prefix) => `Hai dimenticato l'argomento \`type\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}xpconf [status/xplevel/maxlevel/logsChannel/upMsg]\``,
    XP_TYPE_STATUS: (prefix) => `Hai dimenticato l'argomento \`status\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}xpconf status [on/off]\``,

    // JOIN & QUIT
    JQ_ARGS: (prefix) => `Hai dimenticato l'argomento \`param\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}jqconf [join/quit] [channel/msg/status]\``,
    JQ_CHANNEL: (prefix) => `Hai dimenticato l'argomento \`channelName\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}jqconf [join/quit] channel [Channel Name]\``,
    JQ_MSG: (prefix) => `Hai dimenticato l'argomento \`msg\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}jqconf [join/quit] channel [msg]\` you can use use \`${prefix}jqconf tags\` tags to set in your msg`,
    JQ_STATUS: (prefix) => `Hai dimenticato l'argomento \`status\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}jqconf [join/quit] status [on/off]\``,

    // EMBED
    EMBED_CONF_OPTION: `Hai dimenticato l'argomento \`option\` ecco l'elenco delle opzioni disponibili, \`[config/status]\``,
    EMBED_CONF_OPTION_ARGS: `Hai dimenticato l'argomento \`param\` ecco l'elenco delle opzioni disponibili, \`[title/imgUrl]\``,
    EMBED_CONF_OPTION_STATUS: `Hai dimenticato l'argomento \`status\` ecco l'elenco delle opzioni disponibili, \`[on/off]\``,

    // SUCCESS MSG
    ACTIVED_SERVER: (serverName, prefix) => `Il server è stato attivato **${serverName}** eseguire l'ordine \`${prefix}benefits\` per vedere i vantaggi di Gold`,
    UPDATED: `Le vostre modifiche sono state salvate`,
    CC_ADD: (command) => `Avete aggiunto il comando \`${command}\``,
    CC_DELETED: (command) => `Avete cancellato l'ordine \`${command}\``,

    // CUSTOM COMMANDS
    CC_ARGUMENTS: (prefix) => `Hai dimenticato l'argomento \`type\` ecco un aiuto per spiegare meglio come funziona il comando: \`${prefix}custcmds [add/del/update] [command name]\` e \`[message] per add e del\`, è possibile utilizzare \`${prefix}custcmds tags\` il comando vi darà diversi tag che potrete inserire nel vostro messaggio`
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
