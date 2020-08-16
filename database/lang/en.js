const languageData = {
    /** Errors **/
    TEAM_NOT: "This command can be used only by a user in a team",
    PERMISSION_DENIED: "You don't have permission to use this command",
    MISSED_ARGUMENTS: "You missed someone's arguments, please try again.",
    MAXIMUM_VALUE: "You cannot use more than 3 characters, symbols, or letters in your prefix, exemple `rox!` is not allowed, but `r!` is allowed, and you can again add 1 character",
    HELP_UNKNOW_COMMAND: (command) => `The command command \`!${command}\` not exist`,
    LANG_NOT_FOUND: (lang, langs) => "The lang `" + lang + "` not found please, set a valid lang " + langs,
    NOT_YOURSELF: "You can't ban yourself",
    NOT_IMG: `You didn't send an image, try again, only \`.png\`,\`.jpg\` and \`.jpeg\` is supported for now, wait a update please`,
    NOT_ARGS_LOVE: `You didn't send an \`@mention 1 and you\` or \`@mention 1 and @mention 2\` or \`user and you\` or \`user 1 and user 2\``,
    NOT_GOLD_USER: "You are not a Rox Gold user\n\nIf you want to see what advantages Rox Gold User has to offer you, https://doc.rox.wtf/rox-gold",
    NOT_GOLD_SERVER: "This server don't have Rox Gold\n\nIf you want to see what advantages Rox Gold Server has to offer you, https://doc.rox.wtf/rox-gold",
    IS_NAME_ALREADY: "The server as already this name, please try another",
    CHANNELS_ARGS: "You did not enter a valid value, here are the available values: `logs`, `joinquit`",
    MENTION_CHANNEL: "You didn't mention any channels",
    MENTION_ROLE: "You didn't mention any role",
    ARGS_BACKGROUND: "The argument, is invalid, those that exist are `color`, `img` (and `server` for gold server)",
    ARGS_BACKGROUND_1: "You must enter a valid color code, you can use this generator: https://colors.rox.wtf",

    INVALID_ARGS_BLACKLIST: "You must enter a valid option type, the avaibles option to config is: `add` or `remove`",
    INVALID_ARGS_XP: "You must enter a valid option type, the available options to configure are: `rewards` or `status`",
    INVALID_ARGS_XP_1: "You must enter a valid option type, the available options to configure are: `add`, `update` or `remove`",
    INVALID_ARGS_XP_2: "You must enter a valid option type, the available options to configure are: `on` or `off`",
    INVALID_ARGS_XP_LEVEL_REMOVE: "You must enter a number corresponding to a level, to remove its reward once reached",
    INVALID_ARGS_XP_LEVEL_ADD: "You must enter a number corresponding to a level, and a role to define the reward once the level is reached",
    INVALID_ARGS_XP_LEVEL_UPDATE: "You must enter a number corresponding to a level, and a role mention to redefine the reward once the level is reached.",
    XP_LEVEL_NOT_FOUND: "The reward for this level does not exist, you have to add it first before modifying it",
    XP_LEVEL_EXIST: "A reward is already associated with this level, modify it, or delete it before doing anything",
    INVALID_ARGS_ROLES: "You must enter a valid role type, the avaibles roles to config is: `adminRole`, `modRole` or `autoRole`",
    INVALID_ARGS_TEXTS: "You must enter a valid text type, the avaibles texts to config is: `joinText`, `quitText` or `lvlUpText`",
    INVALID_ARGS_CHANNELS: "You must enter a valid channel type, the avaibles channels to config is: `joinquit`, `logs`, `ticket (name of an category)`, `is (Inter Server MSG)` or `commands` if you want to de-select a channel add `unset' before putting the option",
    INVALID_ARGS_COMMANDS: "You must enter a valid channel type, the avaibles channels to config is: `add` or `remove` or `update`",
    INVALID_ARGS_TEXT_COMMANDS: "You haven't entered any text that the bot will send to if the person uses the command, if you want to have cooler messages than others use tags\n\nhttps://tags.rox.wtf",
    INVALID_ARGS_TICKET: "You must enter a valid option type, the avaibles option is: `create`, `delete`,`add` or `remove`",

    COMMAND_REACHED_MAXIMUM: "This server has reached the custom order limit it can have, to raise this limit to 30 you can take the Rox Gold subscription for this server\n\nhttps://doc.rox.wtf/rox-gold",
    COMMAND_ALREADY_EXIST: (prefix, name) => `This command already exist, you can remove it with \`${prefix}commands remove ${name}\``,
    COMMAND_NOT_EXIST: (prefix, name) => `This command not exist, you can add it with \`${prefix}commands add ${name} [text]\``,

    MISSED_TEXT: (prefix, type) => `You have missed the text, you can add a differents tags to diversify your text, use the \`${prefix}tags ${type}\` to see the avaible tags`,
    MISSED_TEXTS: "You have missed the text",
    TOO_MUCH_ARGS: "There are too many characters, the limit is 12",

    INVALID_CHANNEL_COMMANDS: (id) => "This server has set up a special room to use commands, please go there in <#"+id+"> only members with one of these permissions `ADMINISTRATOR`, `MANAGE MESSAGES`, `MANAGE CHANNELS` can bypass this system",

    CATEGORY_NAME_NFOUND: "You did not specify the name of the category that will be used as a ticket mailbox",
    DELETE_IS_CHANNEL: "To disable inter-server messages you have to delete the channel !",

    TOP_XP_ARGUMENTS: (prefix) => `You must enter a valid argument if you want display the top of this guild use \`${prefix}top\` or if you want display top all of guilds level where rox is here use \`${prefix}top server\``,
    FOOTER_TOP_XP: (prefix) => `Use \`${prefix}top [null/server]\` for change display`,
    TITLE_TOP_XP_GUILDS: `Top of highest level guilds`,
    TITLE_TOP_XP_USERS: `Top of this guild's highest level users`,
    DESCRIPTION_TOP_XP: (level, xp) => `is level **${level}** with a total of **${xp}** xp`,
    DESCRIPTION_TOP_XP_U: (level, xp, messages) => `is level **${level}** with a total of **${xp}** xp, with more than **${messages}** sended messages`,

    LEVEL: "Level",
    LEVEL_TEXT: (level) => "You are level **"+level+"**",
    LEVEL_TEXT_O: (level) => "This member is level **"+level+"**",
    XP: "XP(s)",
    XP_TEXT: (xp,maxXP) => "With more than: **"+xp+"**/**"+maxXP+"** xp",
    XP_TEXT_O: (xp, maxXp) => "This member have **"+xp+"**/**"+maxXp+"** xp",
    MSGS_SEND: "Messages send",
    MSGS_TEXT: (msgs) => "With more than **"+msgs+"** messages sent to the server since Rox's join.",

    /** SUCCESS **/
    UPDATED: "Your changes have been successfully saved",
    DOWNLANDED: (prefix) => `Well done, you have defined your background, to see it do the command \`${prefix}level\``,

    /** EMBED **/
    HELP_CUST_NOT: (prefix) => `This guild don't have custom command, to add use \`${prefix}custcmds [add/remove] [commandName] [text]\` to add or remove a custom command, if you want have a message out of the ordinary [click here](https://doc.rox.wtf/configs/messages/tags)`,
    HELP_ADMIN_FIELD: "Administrator",
    HELP_MOD_FIELD: "Moderator",
    HELP_FUN_FIELD: "Fun",
    HELP_MUSIC_FIELD: "Music",
    HELP_XP_FIELD: "XP System",
    HELP_BASIC_FIELD: "Basics",
    INVITE: "here to invite the discord bot in your server",

    WARN_TITLE: "Warns of ",
    WARNS_REASON_FIELD: "Reason: ",
    WARNS_MOD_FIELD: "Moderator: ",

    HELP_CC_FIELD: (serverName) => "Customs Command (**" + serverName + "**)",
    HELP_GOLD_USER_FIELD: "Gold User benefits",
    HELP_GOLD_SERVER_FIELD: "Gold Server benefits",
    HELP_DESCRIPTION: (prefix) => `<:rox:737051270980042783> To help you better you can use the \`${prefix}help [command]\` to get the uses, arguments, description all that can help you to use the bot`,

    // Moderations commands messages
    PUNISH_Y: `You can't punish yourself`,
    PUNISH_BOT: `You can't punish me`,
    PU_NO_MENTION: "Please enter a user mention",
    PU_NO_REASON: "Please enter a reason",
    PU_NO_ID: "Please enter a valid id",
    PU_NO_ID_USER: (user) => `This ID is not appropriate for ${user}, please look in the ${user} warning list and check the correct ID`,
    PU_NO_USER: "This user doesn't exist in this guild",
    PU_IMPOSSIBLE: "I cannot punish this user",
    SUCCESS_BAN: (moderator,user, reason) => `${moderator} has banned ${user} for ${reason}`,
    SUCCESS_KICK: (moderator,user, reason) => `${moderator} has kick ${user} for ${reason}`,
    SUCCESS_WARN: (moderator,user, reason) => `${moderator} has warned ${user} for ${reason}`,
    SUCCESS_UNWARN: (moderator,user) => `${moderator} has unwarned ${user}`,
    SUCCESS_MUTE: (moderator,user, reason) => `${moderator} has mute ${user} for ${reason}`,
    SUCCESS_TMUTE: (moderator,user, reason, time) => `${moderator} has tempmuted ${user} for ${reason} while ${time}`,
    SUCCESS_UNMUTE: (moderator,user) => `${moderator} has unmuted ${user}`,
    ALREADY_MUTE: (user) => `${user} This person is already muted`,
    NO_TIME: "You must specify numbers, not letters.",
    NO_MUTE: (user) => `${user} This person is currently not being silenced`,

    BLACKLISTED: "Sorry, but I can't let you use the bot. You're blacklisted.",
    PICTURE_NOT_ALLOWED: `Your picture is not allowed please choose a other`,
    CHECK_PICTURE: "Please be patient we are checking the image",

    // FUN
    CHOICE_PROGRESS: "I'm choose.. hmm is difficult",
    CHOICE_DONE: "I'm answering it.",
    DOOR_OPEN: "Third door on the left, at the end of the corridor, it's the exit",
    DOOR_TEAM_NOT: "You can't take a member of Rox's development team out, or there won't be any more news.. :-|",
    KISS: (user1, user2) => `${user2}, ${user1} just kiss you`,
    HUG: (user1, user2) => `${user2}, ${user1} just hug you`,
    PUNCH: (user1, user2) => `${user2}, ${user1} just punch you`,

    // SERVER
    LEVEL_SERVER_UP: (prefix) => `The server as level up, you can see your level with \`${prefix}server\`, use \`${prefix}server top\` to see your level compared to other servers using Rox`,

    // 8BALL
    DESCRIPTION: "I'm telling you the truth!",
    ERR_QUESTION: "You have to enter a question to ask me!",
    RESPONSE_1: "I'm sure of it.",
    RESPONSE_2: "it's definitely safe.",
    RESPONSE_3: "yes, definitely.",
    RESPONSE_4: "better not tell you now.",
    RESPONSE_5: "ask again later.",
    RESPONSE_6: "don't count on it.",
    RESPONSE_7: "I don't think.",
    RESPONSE_8: "my sources say no.",
    RESPONSE_9: "no.",
    RESPONSE_10: "outlook not so good.",

    // TEAM
    BLACKLIST_ADD: "You have add this member in blacklist",
    BLACKLIST_REMOVE: "You have remove this member in blacklist",

    // EMBED CONF
    INVALID_ARGUMENT_EMBECONF: "You must enter a valid option type, the avaibles option to config is: `config` or `status`",
    INVALID_ARGUMENT_EMBECONF_0: "You must enter a valid option type, the avaibles option to config is: `on` or `off`",
    INVALID_ARGUMENT_EMBECONF_1: "You must enter a valid option type, the avaibles option to config is: `title`, `color` or `imgUrl`",
    IMG_URL_DISABLE: (prefix) => `To disable the image use the command \`${prefix}embed config imgUrl\` without text following`,
    IMG_TITLE_DISABLE: (prefix) => `To disable the title use the command \`${prefix}embed config title\` without text following`,

    // MUSIC
    MUSIC_NO_VOICE: "You are not in a voice channel",
    MUSC_ALREADY_CONNECTED: "I'm already connected to a voice channel",
    MUSC_NOT_CONNECTED: "I'm not connected to a voice channel",
    MUSIC_NO_ARGS: "Please enter a valid link to a YouTube video or search",
    MUSIC_NO_QUEUE: (name) => "**" + name + "** don't have musics in queue",
    MUSIC_NO_QUEUE_NUMBER: (name, number) => "**" + name + "** don't have musics in queue **" + number + "**",
    MUSIC_LEAVE_CHANNEL: (name) => "I'm leave the channel **" + name + "**",
    MUSIC_NOT_SAME_CHANNEL: "If you want stop the music, connect in the same channel where is the bot",
    MUSIC_QUEUE_ADD: (name, username) => "I'm added to the queue **" + name + "** request by **" + username + "**",
    MUSIC_CHANGE: (name, username) => "I'm playing **" + name + "** request by **" + username + "**",
    MUSIC_NOW_PLAY: "Now playing",
    MUSIC_REQUEST: "Requested by",
    MUSIC_QUEUE: "Queue",
    MUSIC_SKIP_VOTE_AV: (requi) => "You already voted to skip, " + requi + " required vote to skip the song",
    MUSIC_VOTE_SKIP_VOTED: (requi) => "Successfully voted to a music skip, " + requi + " required vote to skip the song",
    MUSIC_SKIP: "I'm skipped the song !",
    MUSIC_VOLUME_LIMIT: "Please give a number greater than 0 and less than 500",
    MUSIC_VOLUME_SET: (volume, songName) => "You have set the volume to **" + volume + "** to the song **" + songName + "**",
    MUSIC_CHOOSE: "Send the number do you want to choose your music",
    MUSIC_PAUSE: (prefix, name) => "Successfuly paused the music, use " + `${prefix}resume` + " to resume the music",
    MUSIC_ALREADY_PAUSE: (prefix, name) => "This music is already paused, use " + `${prefix}resume` + " to resume the music",
    MUSIC_RESUME: (prefix, name) => "Successfuly resume the music, use " + `${prefix}pause` + " to pause the music",
    MUSIC_ALREADY_RESUME: (prefix, name) => "This music is already in playing, use " + `${prefix}pause` + " to pause the music",

    // TICKET
    ALREADY_CHANNEL: "You already have a ticket open",
    CREATE_CHANNEL: "You just opened a ticket",
    NOT_EXISTS_CHANNEL_MOD: "The channel does not exist please enter the channel id or name",
    NOT_EXISTS_CHANNEL: "You don't have an open ticket",
    DELETE_CHANNEL: "You just closed your ticket",

    // ADVENTURE
    ADV_GEMS: "Gems",
    ADV_JOB: "Job:",
    ADV_HOUSE: "House:",
    ADV_HOUSE_LEVEL_0: "Fire Camp",
    ADV_HOUSE_LEVEL_1: "Refugee Camp",
    ADV_HOUSE_LEVEL_2: "Tree house",
    ADV_HOUSE_LEVEL_3: "Stone house",
    ADV_HOUSE_LEVEL_4: "Stone castle",
    ADV_HOUSE_LEVEL_5: "Reinforced castle",
    ADV_JOB_LEVEL_0: "Farmer",
    ADV_JOB_LEVEL_1: "Librarian",
    ADV_JOB_LEVEL_2: "Fisherman",
    ADV_JOB_LEVEL_3: "Seller",
    ADV_JOB_LEVEL_4: "Negotiator",
    ADV_JOB_LEVEL_5: "PDG"

};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
