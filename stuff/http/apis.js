var xhr = new XMLHttpRequest

xhr.onreadystatechange = function() {
    if (this.readyState == 4)
        console.log(this.status, this.responseText)
}

xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

xhr.setRequestHeader('Content-type', 'application/json')

xhr.send('{ "name": "Pepito", "surname": "Grillo", "username": "pepito@grillo.com", "password": "123123123" }')

console.log('hola mundo')

// 2

var xhr = new XMLHttpRequest

xhr.onreadystatechange = function() {
    if (this.readyState == 4)
        console.log(this.status, this.responseText)
}

xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

xhr.setRequestHeader('Content-type', 'application/json')

xhr.send('{ "username": "pepito@grillo.com", "password": "123123123" }')

console.log('hola mundo')

// 3

var xhr = new XMLHttpRequest

xhr.onreadystatechange = function() {
    if (this.readyState == 4)
        console.log(this.status, this.responseText)
}

xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNWQ3MDJkMjE3YzAwMTc2ZDhiN2YiLCJpYXQiOjE2MDMzNjIyMzUsImV4cCI6MTYwMzM2NTgzNX0.Ij8LaOXj2I_h7ffXxc8YSnw-8lADE7TxOXKZ2-q56dI')

xhr.send()

console.log('hola mundo')