var children = document.body.children;


printSemanticElements(children);

function printSemanticElements(elements, indent) {
    if (!indent) indent = 1;

    for (var i = 0; i < elements.length; i++) {

        var element = elements[i];

        if (element.tagName !== 'DIV' && element.tagName !== 'SPAN' && element.tagName !== 'SCRIPT' && element.tagName !== 'NOSCRIPT' && element.tagName !== 'STYLE' && element.tagName !== 'IFRAME') {


            for (var j = 0; j < indent; j++) {

                let indentation = '';

                 indentation = indentation + '\t';

                console.log(indentation + element.tagName);

            }

        }
    }


    printSemanticElements(element.children, indent + 1);

}
