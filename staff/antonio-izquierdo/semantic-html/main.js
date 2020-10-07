var children = document.body.children

printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
}