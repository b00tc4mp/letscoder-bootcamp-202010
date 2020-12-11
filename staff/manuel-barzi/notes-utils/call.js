module.exports = (method, url, headers, body, callback) => {
    const xhr = new XMLHttpRequest

    xhr.open(method, url)

    for (const key in headers)
        xhr.setRequestHeader(key, headers[key])

    xhr.send(body)

    if (callback) {
        xhr.onreadystatechange = function () {
            const { readyState, status, responseText } = this

            if (readyState === 4)
                if (status === 0)
                    callback(new Error('network error'))
                else
                    callback(null, { status, body: responseText })
        }
    } else
        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = function () {
                const { readyState, status, responseText } = this

                if (readyState === 4)
                    if (status === 0)
                        reject(new Error('network error'))
                    else
                        resolve({ status, body: responseText })
            }
        })
}