module.exports = (req, res, next) => {

    req.setEncoding('utf8')

    let content = ''
  
    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        const body = {}


        if (content) {
            const keyValues = content.split('&')


            for (const keyValue of keyValues) {
                const [key, value] = keyValue.split('=')

                body[key] = decodeURIComponent(value.split('+').join(' '))
            }
        }

        req.body = body
       
        next()
    })

}




/* app.post('/login', (req, res)=>{
    debugger
  
    req.setEncoding('utf8')
    
    let content = ''
  
    req.on('data', chunk =>{
  
      //console.log(chunk)
  
      content += chunk
    })
  
    req.on('end', ()=>{
      const parts = content.split('&')
  
      let[, email] = parts[0].split('=')
      let [, password] = parts[1].split('=')
  
      email = decodeURIComponent(email)
  
      password = decodeURIComponent(password)
  
      console.log(email, password)
  
      res.send('ok, logged in :)')
  
  
    })
  
  }) */