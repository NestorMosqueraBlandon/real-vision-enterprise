// const NextI18Next = require('next-i18next')

// module.exports = new NextI18Next({
//     otherLenguages: ['es'],
//     defaultNS: 'common',
//     localeSubpaths: {
//         co: 'es'
//     },

//     localePath: 'public/static/locales'
// })

module.exports = {
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
};