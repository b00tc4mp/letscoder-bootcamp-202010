var children = document.body.children;

printSemanticElements(children);

function printSemanticElements(elements) {


    for (var i = 0; i < elements.length; i++) {

        var element = elements[i];

        if (element.tagName !== 'DIV'
            && element.tagName !== 'SPAN'
            && element.tagName !== 'SCRIPT'
            && element.tagName !== 'NOSCRIPT'
            && element.tagName !== 'STYLE'
            && element.tagName !== 'IFRAME')

            console.log(element.tagName);

    }


printSemanticElements(element.children);

}
