const withSass = require('@zeit/next-sass')
// module.exports = withSass()
module.exports = withSass({
    env: {
        PORT: "3000",
        NEXT_APP_API_URL: "http://localhost:4000/api"
    }
})