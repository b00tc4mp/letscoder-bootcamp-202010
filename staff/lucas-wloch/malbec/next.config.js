const withSass = require('@zeit/next-sass')
module.exports = withSass({
    env: {
        // PORT=4000
        MONGODB_URL: "mongodb://localhost:27017/malbec",
        JWT_SECRET: "un dia vi una vaca vestida de uniforme",
        JWT_EXP: "24h"
    },
    
})