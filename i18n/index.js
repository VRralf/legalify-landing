var es = require("./es.json");
var en = require("./en.json");
var it = require("./it.json");

const i18n = {
    translations: {
        es: es,
        en: en,
        it: it,
    },
    defaultLang: "es",
    // useBrowserDefault: true
}

module.exports = i18n;
