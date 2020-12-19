function wait(millis) {
    var before = Date.now()

    //for (; Date.now() - before < millis;);
    while (Date.now() - before < millis);
}

function evolution() {
    var emojis =['♀', '♂', '♥️', '⚤', '🥚', '🐣', '🐥', '🐤' , '🐓', '🐔', '🦠', '🍗']

    for (var i = 0; i < emojis.length; i++) {
        console.clear()

        console.log(emojis[i])

        wait(1000)
    }
}

evolution()