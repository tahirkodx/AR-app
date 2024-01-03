const path = require('path')

module.exports = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {
        locales: [
            "uae-en",
            "uae-ar",
        ],
        defaultLocale: 'uae-en',
        localDetection: false,
        ns: ["common"],
        defaultNS: "common",
        fallbackLng: {
            'uae-en': ['en'],
            'uae-ar': ['ar'],
          },
    },
    localePath: path.resolve('./public/locales'),
}
