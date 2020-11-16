const { call } = require('../utils')

module.exports = (query, callback) => {
    if (typeof query !== "string")
      throw new TypeError(`${query} 'is not a string`)
  
    if (!query.trim().length) throw new Error("query is empry or blank")
  
    if (typeof callback !== "function")
      throw new TypeError(`${callback} is not a callback`)
  
    call(
      "GET",
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=89997664452db5c88e7700a30ee2c5b9`,
      {},
      "",
      function (status, response) {
        if (status === 200) {
          var movie = JSON.parse(response)

             callback(null, movie)
              } else {
                var res = JSON.parse(response)
                callback(new Error(res.error))
              }
            })
        }

         
        

  