const replaceAll = (content,key,value) => {
    do {
        content = content.replace(key, value)

    }while(content !== content.replace(key, value))

    return content
}
module.exports = (req,res) => {
    let {content , changes} = res

    if(changes)
        for(const key in changes) {
            content = content.split(key).join(changes[key])
            // content = replaceAll(content,key, changes[key])
        }
    
    res.send(content)
}
// const changes = { '{fullname}' : user.fullname, '{email}': user.email,}
// 

// var string = 'ababcabc'

// const regexp1 = /ab/g;

// const ammount = [...string.matchAll(regexp1)]

// ammount
// (3) [Array(1), Array(1), Array(1)]
// 0: ["ab", index: 0, input: "ababcabc", groups: undefined]
// 1: ["ab", index: 2, input: "ababcabc", groups: undefined]
// 2: ["ab", index: 5, input: "ababcabc", groups: undefined]
// length: 3