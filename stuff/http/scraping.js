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

// 2

function searchInGoogle(query, callback) {
    call('GET', `https://b00tc4mp.herokuapp.com/proxy?url=https://www.google.com/search?query=${query}`, {}, '', function(status, response) {
    //console.log(status, response)

    var doc = new DOMParser().parseFromString(response, "text/html")

    var results = doc.querySelectorAll('div.rc')

    //debugger

    var res = Array.prototype.map.call(results, result => {
        var title = result.querySelector('h3').innerText

        var preview = result.querySelector('span.aCOpRe>span').innerText

        var url = result.querySelector('a').href

        //console.log(title, url, preview)

        return { title, url, preview }
    }) 

    callback(res)    
})
}

searchInGoogle('hola mundo', function(results) {
var ul = document.createElement('ul')

results.forEach(result => {
    var li = document.createElement('li')

    var { title, preview, url } = result

    var h2 = document.createElement('h2')

    h2.innerText = title

    li.append(h2)

    var a = document.createElement('a')

    a.href = url

    a.innerText = url

    li.append(a)

    var p = document.createElement('p')

    p.innerText = preview

    li.append(p)

    ul.append(li)
})

document.body.append(ul)    
})