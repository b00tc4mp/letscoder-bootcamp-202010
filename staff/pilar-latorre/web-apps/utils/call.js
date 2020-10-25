function call(method, url, headers, body, callback) {
    var xhr = new XMLHttpRequest

    xhr.onreadystatechange = function () {
        if (this.readyState == 4)
            callback(this.status, this.responseText)
    }

    xhr.open(method, url)

    for (var key in headers)
        xhr.setRequestHeader(key, headers[key])

    xhr.send(body)

}