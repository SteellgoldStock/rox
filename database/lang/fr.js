const languageData = {
    /** Errors **/
    TEAM_NOT: "Cette commande ne peut être utilisée que par un utilisateur au sein de l'équipe",
    PERMISSION_DENIED: "Vous n'avez pas la permission d'utiliser cette commande",
    MISSED_ARGUMENTS: "Vous avez oublié des arguments, réessayez s'il vous plaît.",
    MAXIMUM_VALUE: "Vous ne pouvez pas utiliser plus de 3 caractères, symboles ou lettres dans votre préfixe, par exemple `rox!` n'est pas autorisée, mais `r!` est autorisé, et vous pouvez à nouveau ajouter 1 caractère",
    HELP_UNKNOW_COMMAND: (command) => `La commande \`!${command}\` n'existe pas`,
    LANG_NOT_FOUND: (lang, langs) => "La langue `" + lang + "` n'a pas été trouvé s'il vous plaît, définissez une langue valide " + langs,
    NOT_YOURSELF: "Vous ne pouvez pas vous bannir vous mêmes",
    NOT_IMG: `Vous n'avez pas envoyé d'image, essayez à nouveau, seulement \`.png\`,\`.jpg\` and \`.jpeg\` est pris en charge pour le moment, attendez une mise à jour s'il vous plaît`,
    NOT_ARGS_LOVE: `Vous n'avez pas envoyé \`@mention 1 and you\` or \`@mention 1 and @mention 2\` or \`user and you\` or \`user 1 and user 2\``,
    NOT_GOLD_USER: "Vous n'êtes pas un utilisateur de Rox Gold\n\nSi vous voulez voir les avantages que Rox Gold pour les utilisateurs vous offre, https://doc.rox.wtf/rox-gold",
    NOT_GOLD_SERVER: "Ce serveur n'a pas Rox Gold\n\nSi vous voulez voir les avantages que Rox Gold pour les serveurs vous offre, https://doc.rox.wtf/rox-gold",
    IS_NAME_ALREADY: "Le serveur se nomme déjà à ce nom, veuillez essayer un autre",
    CHANNELS_ARGS: "Vous n'avez pas saisi de valeur valide, voici les valeurs disponibles: `logs`, `joinquit`",
    MENTION_CHANNEL: "Vous n'avez mentionné aucun salons",
    MENTION_ROLE: "Vous n'avez mentionné aucun rôle",
    ARGS_BACKGROUND: "L'argument, n'est pas valable, ceux qui existent sont `color`, `img` (et `server` pour les serveurs gold)",
    ARGS_BACKGROUND_1: "Vous devez entrer un code couleur valide, vous pouvez utiliser ce générateur: https://colors.rox.wtf",

    INVALID_ARGS_BLACKLIST: "Vous devez saisir un type de option valide, les options disponibles à configurer sont: `add` ou `remove`",
    INVALID_ARGS_XP: "Vous devez saisir un type de option valide, les options disponibles à configurer sont: `rewards` ou `status`",
    INVALID_ARGS_XP_1: "Vous devez saisir un type de option valide, les options disponibles à configurer sont: `add`, `update` ou `remove`",
    INVALID_ARGS_XP_2: "Vous devez saisir un type de option valide, les options disponibles à configurer sont: `on` ou `off`",
    INVALID_ARGS_XP_LEVEL_REMOVE: "Vous devez entrer un numéro correspondant à un niveau, pour retirer sa récompense",
    INVALID_ARGS_XP_LEVEL_ADD: "Vous devez entrer un numéro correspondant à un niveau, et une mention de rôle pour définir la récompense une fois le niveau atteint",
    INVALID_ARGS_XP_LEVEL_UPDATE: "Vous devez entrer un numéro correspondant à un niveau, et une mention de rôle pour redéfinir la récompense une fois le niveau atteint",
    XP_LEVEL_NOT_FOUND: "La récompense pour ce niveau n'existe pas, il faut d'abord l'ajouter avant de le modifier",
    XP_LEVEL_EXIST: "Une récompense est déjà associée à ce niveau, changez-la ou supprimez-la avant de faire quoi que ce soit",
    INVALID_ARGS_ROLES: "Vous devez saisir un type de rôle valide, les rôles disponibles à configurer sont: `adminRole`, `modRole` ou `autoRole`",
    INVALID_ARGS_TEXTS: "Vous devez entrer un type de texte valide, les textes disponibles à configurer sont: `joinText`, `quitText` ou `lvlUpText`",
    INVALID_ARGS_CHANNELS: "Vous devez entrer un type de d'argument valide, les arguments disponibles à configurer sont is: `joinquit`, `logs`, `ticket [category name]`, `is (Salon de message inter-serveurs)` ou `commands`",
    INVALID_ARGS_COMMANDS: "Vous devez entrer un type d'argument valide, les arguments disponibles à configurer sont: `add`, `remove` ou `update`",
    INVALID_ARGS_TEXT_COMMANDS: "Vous n'avez pas saisi de texte que le bot enverra si la personne utilise la commande, si vous voulez avoir des messages plus cool que d'autres utilisent des balises\n\nhttps://tags.rox.wtf",
    INVALID_ARGS_TICKET: "Vous devez saisir un type de option valide, les options disponibles sont : `create`, `delete`,`add` ou `remove`",

    COMMAND_REACHED_MAXIMUM: "Ce serveur a atteint la limite de commande personnalisée qu'il peut avoir, pour améliorer cette limite à 30 vous pouvez prendre l'abonnement Rox Gold pour ce serveur\n\nhttps://doc.rox.wtf/rox-gold",
    COMMAND_ALREADY_EXIST: (prefix, name) => `Cette commande existe déjà, vous pouvez la supprimer avec \`${prefix}commands remove ${name}\``,
    COMMAND_NOT_EXIST: (prefix, name) => `Cette commande n'existe pas, vous pouvez l'ajouter avec \`${prefix}commands add ${name} [text]\``,

    MISSED_TEXT: (prefix, type) => `Vous avez oublié(e) d'inserer un texte, vous pouvez ajoutées plusieurs tags dans votre texte, pour voir ceux qui sont disponibles pour ce texte utilisez \`${prefix}tags ${type}\``,
    MISSED_TEXTS: "Vous avez oublié(e) d'inserer un texte",
    TOO_MUCH_ARGS: "Il y a trop de caractère la limite est 12",

    INVALID_CHANNEL_COMMANDS: (id) => "Ce serveur a mis en place un salon pour l'utilisation des commandes, veuillez vous y rendre <#"+id+">",

    CATEGORY_NAME_NFOUND: "Vous n'avez pas précisé le nom de la catégorie qui sera utilisée comme boîte aux lettres pour vos tickets",

    DELETE_IS_CHANNEL: "Pour désactiver les messages inter-serveurs vous devez supprimer le salon !",

    /** SUCCESS **/
    UPDATED: "Vos modifications ont été sauvegardées avec succès",
    DOWNLANDED: (prefix) => `Bravo, vous avez défini votre arrière plan, pour le voir executer la commande \`${prefix}level\``,

    /** EMBED **/
    HELP_CUST_NOT: (prefix) => `Ce serveur n'a pas de commande personnalisée, pour en ajouter utilisez \`${prefix}custcmds [add/remove] [commandName] [text]\` pour ajouter ou supprimer une commande personnalisée, si vous voulez avoir un message qui sort de l'ordinaire [cliquez ici](https://doc.rox.wtf/configs/messages/tags)`,
    HELP_ADMIN_FIELD: "Administrateur",
    HELP_MOD_FIELD: "Modérateur",
    HELP_FUN_FIELD: "Fun",
    HELP_MUSIC_FIELD: "Musique",
    HELP_XP_FIELD: "Système d'XP",
    HELP_BASIC_FIELD: "Basique",
    INVITE: "ici pour invité le bot discord dans ton server",

    WARN_TITLE: "Avertissements de ",
    WARNS_REASON_FIELD: "Raison: ",
    WARNS_MOD_FIELD: "Modérateur: ",

    HELP_CC_FIELD: (serverName) => "Commandes personnalisées (**" + serverName + "**)",
    HELP_GOLD_USER_FIELD: "Avantages pour l'utilisateur Gold",
    HELP_GOLD_SERVER_FIELD: "Avantages du serveur Gold",
    HELP_DESCRIPTION: (prefix) => `<:rox:737051270980042783> Pour mieux vous aider, vous pouvez utiliser la commande \`${prefix}help [command]\` pour obtenir les usages, les arguments, la description tout ce qui peut vous aider à utiliser le bot`,

    // Moderations commands messages
    PUNISH_Y: `Vous ne pouvez pas vous punir`,
    PUNISH_BOT: `Vous ne pouvez pas me punir`,
    PU_NO_MENTION: "Veuillez entrer une mention d'utilisateur",
    PU_NO_REASON: "Veuillez indiquer une raison",
    PU_NO_ID: "Veuillez saisir une ID valide",
    PU_NO_ID_USER: (user) => `Cette ID n'est pas appropriée pour ${user}, veuillez regarder les avertissements de ${user} et voir la bonne ID`,
    PU_NO_USER: "Cet utilisateur n'existe pas dans ce serveur",
    PU_IMPOSSIBLE: "Je ne peux pas punir cet utilisateur",
    SUCCESS_BAN: (moderator,user, reason) => `${moderator} a interdit d'accéder au serveur à ${user} pour ${reason}`,
    SUCCESS_KICK: (moderator,user, reason) => `${moderator} a expulser du serveur ${user} pour ${reason}`,
    SUCCESS_WARN: (moderator,user, reason) => `${moderator} a avertit ${user} pour ${reason}`,
    SUCCESS_UNWARN: (moderator,user) => `${moderator} a retiré l'avertissement de ${user}`,
    SUCCESS_MUTE: (moderator,user, reason) => `${moderator} a mis au silence ${user} pour ${reason}`,
    SUCCESS_TMUTE: (moderator,user, reason, time) => `${moderator} à mis au silence temporairement ${user} pour ${reason} pendant ${time}`,
    SUCCESS_UNMUTE: (moderator,user) => `${moderator} a retirer la mise au silence de ${user}`,
    ALREADY_MUTE: (user) => `${user} déjà mise au silence`,
    NO_TIME: "Vous devez spécifier des chiffres, et non des lettres.",
    NO_MUTE: (user) => `${user} n'est actuellement pas réduite au silence`,

    BLACKLISTED: "Désolé, mais je ne peux pas vous laisser utiliser le bot. Vous êtes sur liste noire.",
    PICTURE_NOT_ALLOWED: `Votre photo n'est pas autorisée, veuillez choisir une autre`,
    CHECK_PICTURE: "Soyez patients, nous vérifions l'image",

    // FUN
    CHOICE_PROGRESS: "Je suis entrain de choisir... hmm est difficile",
    CHOICE_DONE: "Je réponds...",
    DOOR_OPEN: "3ème porte à gauche, au fond tu couloir, c'est la sortie",
    DOOR_TEAM_NOT: "Tu ne peut pas faire sortir un membre de l'équipe du développement de Rox, sinon il n'y aura plus de nouveautées :-|",
    KISS: (user1, user2) => `${user2}, ${user1} t'embrasse`,
    HUG: (user1, user2) => `${user2}, ${user1} te fait un calin`,
    PUNCH: (user1, user2) => `${user2}, ${user1} te donne un coup de poing`,

    // SERVER
    LEVEL_SERVER_UP: (prefix) => `Niveau supérieur du serveur, vous pouvez voir le niveau du serveur avec \`${prefix}server\`, utilisez \`${prefix}server top\` pour voir votre niveau par rapport aux autres serveurs utilisant Rox`,

    // 8BALL
    DESCRIPTION: "Je vous dis la vérité!",
    ERR_QUESTION: "Vous devez entrer une question à me poser!",
    RESPONSE_1: "J'en suis certain.",
    RESPONSE_2: "C'est définitivement sûr.",
    RESPONSE_3: "Oui, définitivement.",
    RESPONSE_4: "Mieux vaut ne pas vous le dire maintenant.",
    RESPONSE_5: "Demandez moi cela plus tard.",
    RESPONSE_6: "N'y comptez pas.",
    RESPONSE_7: "Je ne le pense pas.",
    RESPONSE_8: "Mes sources disent que non.",
    RESPONSE_9: "Non.",
    RESPONSE_10: "Les perspectives ne sont pas si bonnes.",

    // TEAM
    BLACKLIST_ADD: "Tu as ajouté ce membre dans la blacklist",
    BLACKLIST_REMOVE: "Tu as supprimé ce membre de la blacklist",

    // EMBED CONF
    INVALID_ARGUMENT_EMBECONF: "Vous devez entrer un type d'option valide, l'option disponible à configurer est: `config` ou `status`",
    INVALID_ARGUMENT_EMBECONF_1: "Vous devez entrer un type d'option valide, l'option disponible à configurer est: `on` ou `off`",
    INVALID_ARGUMENT_EMBECONF_0: "Vous devez entrer un type d'option valide, l'option disponible à configurer est: `title`, `color` ou `imgUrl`",
    IMG_URL_DISABLE: (prefix) => `Pour désactiver l'image faite la commande \`${prefix}embed config imgUrl\` sans texte à la suite`,
    IMG_TITLE_DISABLE: (prefix) => `Pour désactiver le titre faite la commande \`${prefix}embed config title\` sans texte à la suite`,

    // MUSIC
    MUSIC_NO_VOICE: "Tu n'es pas dans un canal vocal",
    MUSC_ALREADY_CONNECTED: "Je suis déjà connecté à un canal vocal",
    MUSC_NOT_CONNECTED: "Je ne suis pas connecté à un canal vocal",
    MUSIC_NO_ARGS: "Veuillez entrer un lien valide vers une vidéo Youtube ou effectuer une recherche",
    MUSIC_NO_QUEUE: (name) => "**" + name + "** n'ont pas de musiques en attente",
    MUSIC_NO_QUEUE_NUMBER: (name, number) => "**" + name + "** n'ont pas de musiques en attente **" + number + "**",
    MUSIC_LEAVE_CHANNEL: (name) => "Je quitte le canal **" + name + "**",
    MUSIC_NOT_SAME_CHANNEL: "Si vous voulez arrêter la musique, connectez-vous dans le même canal où se trouve le bot",
    MUSIC_QUEUE_ADD: (name, username) => "J'ai ajouté à la file d'attente **" + name + "** Demandé par **" + username + "**",
    MUSIC_CHANGE: (name, username) => "Je joue **" + name + "** Demandé par **" + username + "**",
    MUSIC_NOW_PLAY: "En cours de lecture",
    MUSIC_REQUEST: "Demandé par",
    MUSIC_QUEUE: "En attente",
    MUSIC_SKIP_VOTE_AV: (requi) => "Vous avez déjà voté pour sauter, " + requi + " vote obligatoire pour sauter la chanson",
    MUSIC_VOTE_SKIP_VOTED: (requi) => "Vous avez voté avec succès pour un saut de musique, " + requi + " vote obligatoire pour sauter la chanson",
    MUSIC_SKIP: "Je saute la chanson !",
    MUSIC_VOLUME_LIMIT: "Veuillez donner un nombre supérieur à 0 et inférieur à 500",
    MUSIC_VOLUME_SET: (volume, songName) => "Vous avez réglé le volume sur **" + volume + "** à la chanson **" + songName + "**",
    MUSIC_CHOOSE: "Envoyez le numéro que vous souhaitez pour choisir votre musique",
    MUSIC_PAUSE: (prefix, name) => "A réussi à mettre la musique en pause, à utiliser " + `${prefix}resume` + " pour reprendre la musique",
    MUSIC_ALREADY_PAUSE: (prefix, name) => "Cette musique est déjà en pause, utilisez " + `${prefix}resume` + " pour reprendre la musique",
    MUSIC_RESUME: (prefix, name) => "Reprenez la musique avec succès, utilisez " + `${prefix}pause` + " pour mettre la musique en pause",
    MUSIC_ALREADY_RESUME: (prefix, name) => "This music is already in playing, use " + `${prefix}pause` + " to pause the music",

    // TICKET
    ALREADY_CHANNEL: "Vous avez déjà un ticket ouvert",
    CREATE_CHANNEL: "Vous venez d'ouvrir un ticket",
    NOT_EXISTS_CHANNEL_MOD: "Le channel n'existe pas veuillez entrée l'id du channel ou son nom",
    NOT_EXISTS_CHANNEL: "Vous n'avez pas de ticket ouvert",
    DELETE_CHANNEL: "Vous venez de fermer votre ticket",

    // ADVENTURE
    ADV_GEMS: "Gemmes",
    ADV_JOB: "Métier:",
    ADV_HOUSE: "Maison:",
    ADV_HOUSE_LEVEL_0: "Feu de camp",
    ADV_HOUSE_LEVEL_1: "Camp de réfugiés",
    ADV_HOUSE_LEVEL_2: "Maison dans l'arbre",
    ADV_HOUSE_LEVEL_3: "Maison en pierre",
    ADV_HOUSE_LEVEL_4: "Château de pierre",
    ADV_HOUSE_LEVEL_5: "Château fort",
    ADV_JOB_LEVEL_0: "Agriculteur",
    ADV_JOB_LEVEL_1: "Bibliothécaire",
    ADV_JOB_LEVEL_2: "Pêcheur",
    ADV_JOB_LEVEL_3: "Vendeur",
    ADV_JOB_LEVEL_4: "Négociateur",
    ADV_JOB_LEVEL_5: "PDG"

};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;