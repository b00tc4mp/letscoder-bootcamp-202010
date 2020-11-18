var c = new Caray()

c.push('a')
c.push('b')
c.push('c')

//for (var i = 0; i < c.length; i++) console.log(c[i])
c.forEach(function(element) { console.log(element) })