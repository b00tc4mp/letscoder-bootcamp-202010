function printSemanticElements(elements, indent) {
    if (elements === undefined) elements = document.body.children
    if (indent === undefined) indent = 1

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        var indentation = '\t'.repeat(indent)

        if (element.tagName !== 'DIV' && element.tagName !== 'SPAN')
            console.log(indentation + element.tagName)

        printSemanticElements(element.children, indent + 1)
    }
}