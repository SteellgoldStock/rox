const languageData = {
    /** Errors **/
    PERMISSION_DENIED: "Vous n'avez pas les permissions d'utiliser cette commande",
    MISSED_ARGUMENTS: "Vous avez manquées des arguments, veuillez réesseyer",
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;