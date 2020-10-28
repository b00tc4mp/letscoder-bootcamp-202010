call('GET', 'https://b00tc4mp.herokuapp.com/proxy?url=https://www.google.com/search?query=blue', {}, '', function(status, response) {
    //console.log(status, response)

    var doc = new DOMParser().parseFromString(response, "text/html")

    var results = doc.querySelectorAll('div.rc')

    results.forEach(result => {
        var title = result.querySelector('h3').innerText

        var brief = result.querySelector('span.aCOpRe>span').innerText

        var url = result.querySelector('a').href

        console.log(title, url, brief)
    })    
})