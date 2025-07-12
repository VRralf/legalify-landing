var es = require("./es.json");
var en = require("./en.json");
var it = require("./it.json");
var ar = require("./ar.json");
var mx = require("./mx.json");

const i18n = {
    translations: {
        es: es,
        en: en,
        it: it,
        mx: mx,
        ar: ar,
    },
    defaultLang: "ar",
    // useBrowserDefault: true
}

module.exports = i18n;
