var children = document.body.children

printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME

if ((element.tagName != "DIV" ) && (element.tagName != "SPAN" ) && (element.tagName != "SCRIPT" ) && (element.tagName != "NOSCRIPT") && (element.tagName != "STYLE") && (element.tagName != "IFRAME") ){
            console.log(element.tagName)
        } 

        printSemanticElements(element.children)
    }
}


       var indentation = '\t'.repeat(indent)

       if (element.tagName !== 'DIV' && element.tagName !== 'SPAN')
           console.log(indentation + element.tagName)

       printSemanticElements(element.children, indent + 1)

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