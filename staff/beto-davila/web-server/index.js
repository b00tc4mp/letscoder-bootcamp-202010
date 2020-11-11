const express = require('express') // bring express module
const app = express()
const port = 3000
const authenticateUser = require('./logic/authenticate-user')
const fs = require('fs') // file system module
const registerUser = require('./logic/register-user')
const path = require('path') // solve path problems when execting the scripts from different locations

// TODO change paths using __dirname and 'path' module (on readFile and writeFile methods)

/*
app.get('/helloworld', (req, res) => {

  //res.set('Content-type', 'text/plain')
  //res.set('Access-Control-Allow-Origin', '*')
  //res.send(`<h1 style="color:greenYellow;text-align:center;background-color:blue">Hello World!</h1>`)
  
  // Asynchronously reads the entire content of a file. @params(path, encoding for the result)
  fs.readFile(path.join(__dirname + './public/helloworld/index.html'), 'utf-8', (error, content) => {
    if (error) return res.send(`sorry, found error :( ERROR: ${error.message}`);

    res.send(content);
  })
})
*/



// register form, 'get' method. send HTML content
app.get('/register', (req, res) => {
  fs.readFile(path.join(__dirname, './public/register/index.html'), 'utf8', (error, content) => {
      if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

      res.send(content)
  })
})


// register form, post method to send user data
app.post('/register', (req, res) => {

    req.setEncoding('utf8') // sets the character encoding for data read from the stream

    let content = ''
    // Readable stream emits 'data' events once a listener is added.
    req.on('data', chunk => {
      content += chunk
    })
    
    /* The on method binds an event to a object.
      It is a way to express your intent if there is something happening (data sent), 
      then execute the callback. (Event-driven programming). */

      // The 'end' event indicates that the whole content has been received. (on... end  = cuando... acaba)
      req.on('end', () => {
      
      // split of the content in parts
      const parts = content.split('&')
      let [, fullname] = parts[0].split('=')
      let [, email] = parts[1].split('=')
      let [, password] = parts[2].split('=')

      //fullname = fullname.replaceAll('+', ' ') // WARN!! not supported in NodeJS yet (but in the browsers it is :( ))
      
      fullname = fullname.split('+').join(' ')

      email = decodeURIComponent(email) // decode URI. (i.e.: dagoman19%40gmail.com === dagoman19@gmail.com)

      password = decodeURIComponent(password)

      const id = ` ${Date.now()}${` ${Math.random() * 10**18 } `.padStart(18, '0')} `;
      const user = { id, fullname, email, password }
      const json = JSON.stringify(user) // converts 'user' js to JSON object

      registerUser(id, fullname, email, password, (error) => {
        if (error) {
          // return error html content on wrong registration 
          return fs.readFile(path.join(__dirname, './public/error/index.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content)
        })
        }
        // return home html content on successful registration
        fs.readFile(path.join(__dirname, './public/login/index.html'), 'utf8', (error, content) => {
          if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

          res.send(content)
        })
        //res.send(`ok, user registered with ID: ${id}`)
      })


      // replaces the specified file and content if it exists, if it doesnt, a new file with that content will be created.
      /*
      fs.writeFile(`./data/users/${id}.json`, json, error => {
          if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

          res.send(`ok, user registered ,) ID: ${id}`)
      })
      */
    })
})

app.get('/login', (req, res) => {
  fs.readFile(path.join(__dirname, './public/login/index.html'), 'utf8', (error, content) => {
      if (error) return res.send(`sorry, found error :( ERROR: ${error.message}`)

      // 'content' refers to the html doc as a response
      res.send(content)
  })
})


app.post('/login', (req, res) => {
  
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => {

        // chunk refers to the whole string 'email=xxxx%40mail.com&password=xxxxx' that we need to split in parts 'on end'
        content += chunk
      debugger
    })

    req.on('end', () => {
        const parts = content.split('&')

        let [, email] = parts[0].split('=')
        let [, password] = parts[1].split('=')

        email = decodeURIComponent(email) 

        password = decodeURIComponent(password)
        // check if user exists in files (read them one at a time, and try to match user and password, otherwise login error)
        authenticateUser(email, password, (error, userId) => {
          if (error) {
            // return error html content on wrong auth
            return fs.readFile(path.join(__dirname, './public/error/index.html'), 'utf8', (error, content) => {
              if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

              res.send(content)
          })
          }
          // return home html content on successful auth
          fs.readFile(path.join(__dirname, './public/home/index.html'), 'utf8', (error, content) => {
            if (error) return res.send(`sorry, there was an error :( ERROR: ${error.message}`)

            res.send(content)
          })
          
        })
    })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})