const prefix = require('../servers/config');
const fs = require('fs');

const languageData = {
    WARNING_PRENIUM: prefix.warning + ": is configurable\n\n",
    PING: (ms) => `:ping_pong: Bot's latency: ${ms}ms`,
    INVITE: prefix.prefixMap + `Oh.. do you want invite me ? Here's an invitation, thank you very much : **discord.gg/Rnq9959**, here is a link to the support server in case of bugs, ideas or others **discord.gg/Rnq9959**`,
    MAINTENANCE_MESSAGE: (reason) => "The bot is currently under maintenance for the reason `" + reason + "`",
    LANGUAGE_UPDATED: prefix.prefixOk + "Bot language updated!",
    PREFIX_UPDATED: (np) => prefix.prefixOk + "Your prefix updated in `" + `${np}` + "`",
    MISSING_LANGUAGE: prefix.prefixNo + "You must specify a valid language! (en or fr)",
    HELLO: "Hello!",
    LANGUAGE_NO_EXIST: prefix.prefixNo + "This langage doesn't exist!",
    MISSING_ARGUMENTS: prefix.prefixNo + "You have missed arguments",
    MISSING_PERMISSIONS: prefix.prefixNo + "You don't have permissions",
    NOT_IN_TEAM: prefix.prefixNo + "You're not on The Bot's team.",
    LEFT: (u) => prefix.prefixOk + "I left this discord, Chief " + u,
    GUILD_NOT_EXIST: (id) => prefix.prefixOk + "The guild **" + id + "** not exist",
    GUILD_DELETED: (id) => prefix.prefixOk + "The data of **" + JSON.parse(fs.readFileSync("database/guilds/" + id + ".json", "utf8"))["name"] + "** has been deleted",
    GUILD_INVITE: prefix.prefixMap + "Here is an invitation from the server: ",

    CC_EXIST: (pr) => `This command already exist, please choose a other name or delete with \`${pr}customCmds del [commandName]\``,
    CC_NOT_EXIST: (pr) => `This command not exist, if you want to add it use \`${pr}customCmds add [commandName] [messageContent]\``,
    CC_DELETED: (cmd) => `You have successfully deleted the \`${cmd}\` command`,
    CC_ADD: (cmd) => `You have added the command \`${cmd}\``,
    CC_UPDATED: (msgSend) => `You have changed the message given by the command in \`${msgSend}\``,
    CC_MAX: (haveCC) => `You have reached the limit of persolanized commands you can have for the moment ` + "**(" + haveCC + "/15)**" + `, we have set a limit on the time to optimize our servers, an improvement of the bot will be made, or we will increase the limit and add a "version" prenium :star: of the bot to disable this limit, and have other advantages`,
    CC_SEND_LIMIT: (haveCC) => `You have created an order without the prenium option, you have **` + haveCC + `** commands out of **15** maximum, in the future, we'll increase the commands limit without the prenium option.`,

    // TRANSLATE
    TRANSLATED_TEXT: (te) => `I have translated your request, here is the result of your translation in ` + te + " :flag_" + te + ":",

    // AUTOROLE
    NO_ROLE_SET: (pr) => prefix.prefixNo + "Your server don't have a role configured, so is was impossible active the autorole, please use " + `${pr}joinRole [on] [roleId]`,
    AUTO_ROLE_ENABLE: (roleId) => prefix.prefixOk + "You have been actived the autorole in your server, the role is <@&" + roleId + ">",
    AUTO_ROLE_DISABLE: prefix.prefixOk + "You have been disable the autorole in your server",

    AUTO_ROLE_ALREADY_ENABLE: (pr) =>  prefix.prefixOk + `The autorole is already enable use \`${pr}joinRole off\` for disable it`,
    AUTO_ROLE_ALREADY_DISABLE: (pr) =>  prefix.prefixOk + `The autorole is already disable use \`${pr}joinRole on\` for enable it`,

    // Help text
    HELP_EMBED_TITLE: "Help document",
    HELP_EMBED_DESCRIPTION: "Here are the commands that are available on me",

    HELP_EMBED_FIELD_INFORMATIONS: "Informations Commands",
    HELP_EMBED_FIELD_SETTINGS: "Settings Commands",
    HELP_EMBED_FIELD_MODERATION: "Moderation Commands",
    HELP_EMBED_FIELD_ADMINISTRATOR: "Administration Commands",
    HELP_EMBED_FIELD_TEAM: "Team Commands",
    HELP_EMBED_FIELD_FUN: "Commands fun",

    // Help Commands
    HELP_COMMAND_INVITE: (p) => "`" + p + "invite`: invite the bot on your server, help us to make the fox even more powerful!",

    HELP_COMMAND_PREFIX_SET: (p) => "`" + p + "prefix`: allows you to set the prefix of the bot on the server, the default prefix when the bot join for the first time is `!` you can set any prefix, even letters. \n",
    HELP_COMMAND_LANG_SET: (p) => "`" + p + "lang`: allows to define the language of the bot on the server the available languages are, `en`, `fr`, other languages will be added afterwards.\n",
    HELP_COMMAND_XP_STATUS_SET: (p) => "`" + p + "sysxp`: allows to activate or deactivate the xp system, when it is activated members earn xp per message sent it is possible to set the number of xp to move from one level to another with the command `!?`.\n",

    // CONFIG MSGS EVENT
    JOIN_MSG_HELP: (p) => `To configure the welcome message, execute the command \`${p}joinMsg [on/off] [channelName] [msg]\` you can use some tags to diversify your message: \n\n- \`{mention}\` to ping the user\n- \`{username}\` to display only the username\n- \`{users}\` to display the number of people on your discord\n- \`{serverName}\` to display the name of the server.`,
    JOIN_MSG_MISSING_ARGUMENTS: (p) => `You have missed arguments, if you want help with this commande use \`${p}joinMsg help\``,

    // PRENIUM EMBED
    PRENIUM_WARNING: "All the litigations opened on PayPal, will be sanctioned by a black list of the bot, no orders coming from you will be able to be carried out, or even of your server if the insistence is strong",
    PRENIUM_SKILLS_USER: "User benefits",
    PRENIUM_SKILLS_SERVER: "Benefits of the chosen server",



    // MINI
    USER: "User",
    SERVER: "Server",

    ALREADY_PRENIUM: (us) => "Wow, " + us + " you are a user of the prenium, access your advantages in the help page of the bot, a category will be displayed automatically, the orders will be usable only for you",
    // BENEFITS
    PRENIUM_USER_BENEFIT_1: "**×** When you talk, your messages automatically turn into an embed, this option unfortunately has a cooldown of 3 seconds before each embed, if the reload is not finished, the message will be in plain text form." + prefix.warning,
    PRENIUM_USER_BENEFIT_2: "**×** Being able to choose a background for xp gauges" + prefix.warning,
    PRENIUM_USER_BENEFIT_3: "**×** Prenium role on the bot's discord server",
    PRENIUM_USER_BENEFIT_4: "**×** People with the prenium can use the commands even when the bot is under maintenance.",
    PRENIUM_USER_BENEFIT_5: "**×** You can change the server to which you have assigned the prenium",

    PRENIUM_SERVER_BENEFIT_1: "**×** In the ranking of servers with the most xp, display an emoji " + prefix.prefixPrenium + " to highlight the server",
    PRENIUM_SERVER_BENEFIT_2: "**×** To be able to activate **Rox Beta** on its server" + prefix.warning,
    PRENIUM_SERVER_BENEFIT_3: "**×** Add as many custom commands as you like",

    REFUND: "__No refund is possible__"
};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(args);
    else return translation;
};

module.exports = translate;
