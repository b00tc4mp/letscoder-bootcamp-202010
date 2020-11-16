const urlencodedBodyParser = require('./urlencoded-body-parser');

module.exports = {
    cookieParser: require('./cookie-parser'),
    cookieSession: require('./cookie-session'),
    fillTemplate: require('./fill-template'),
    urlencodedBodyParser: require('./urlencoded-body-parser')
}