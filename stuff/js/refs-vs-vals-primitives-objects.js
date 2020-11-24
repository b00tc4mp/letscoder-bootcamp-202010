note1 = { text: 'Hola, Mundo!', tags: ['hola', 'mundo'] }
note2 = { text: 'Hola, Mundo!', tags: ['hola', 'mundo'] }
{text: "Hola, Mundo!", tags: Array(2)}
note1 === note2
false
note1.tags === note2.tags
false
note3 = note1
{text: "Hola, Mundo!", tags: Array(2)}
note1 === note3
true
s1 = 'Hello, World!'
"Hello, World!"
s2 = 'Hello, World!'
"Hello, World!"
s1 === s2
true
s3 = s1
"Hello, World!"
s1 === s3
true
