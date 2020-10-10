var children = document.body.children

printSemanticElements(children)

function printSemanticElements(elements, indent) {
    if (indent === undefined) indent = 1

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME

        /*
        if (element.tagName === 'DIV' || element.tagName === 'SPAN') {
            // NOOP
        } else console.log(element.tagName)
        */

        /*
        if (!(element.tagName === 'DIV' || element.tagName === 'SPAN'))
            console.log(element.tagName)
        */

        /*
        if ((element.tagName !== 'DIV') && (element.tagName !== 'SPAN')) 
            console.log(element.tagName)
        */

        /*
        var indentation = ''
        
        for (var j = 0; j < indent; j++) indentation = indentation + '\t'
        */

        var indentation = '\t'.repeat(indent)

        if (element.tagName !== 'DIV' && element.tagName !== 'SPAN')
            console.log(indentation + element.tagName)

        printSemanticElements(element.children, indent + 1)
    }
}