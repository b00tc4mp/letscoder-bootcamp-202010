var children = document.body.children;



printSemanticElements(children)
function printSemanticElements(elements, indent) {
    if (indent === undefined) indent = 1

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        

        var indentation = ''

        for (var j = 0; j < indent; j++) indentation = indentation + '\t'
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        if (
        element.tagName == "DIV" ||
        element.tagName == "SPAN" ||
        element.tagName == "NOSCRIPT" ||
        element.tagName == "STYLES" ||
        element.tagName == "IFRAME"
        ){
        }else {
        console.log(element.tagName)
        }

        printSemanticElements(element.children, indentation + 1)
        }
    }
