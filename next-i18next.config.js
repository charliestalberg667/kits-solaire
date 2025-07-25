const path = require('path');
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'nl'],
  },
  defaultNS: 'translation',
  localePath: path.resolve('./public/locales'),
};
