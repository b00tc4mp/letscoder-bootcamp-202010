var children = document.body.children



function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        if (element.tagName !== "DIV" 
            && element.tagName !== "SPAN"
            && element.tagName !== "SCRIPT"
            && element.tagName !== "NOSCRIPT"
            && element.tagName !== "STYLE"
            && element.tagName !== "IFRAME"
            && element.tagName !== "A"
            && element.tagName !== "BR"
            && element.tagName !== "HR"
            ){
                console.log(element.tagName);
            }

        printSemanticElements(element.children)
    };
};

printSemanticElements(children)