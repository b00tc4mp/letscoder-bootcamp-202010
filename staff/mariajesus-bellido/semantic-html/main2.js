var children = document.body.children;
var numtab = 0;
var tag;
var texto = "";
var tt = "\t";

function hola(){
    for (var j = 0; j < numtab; j++){
        texto = texto.toString() + " " + tt.toString();
    }
    
}

function printSemanticElements(elements, parentElement) {
    debugger
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var newParentElement = element.parentElement.tagName;
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
                tag = element.tagName;
                hola();
                //console.log(hola());
                console.log(texto + tag);
                numtab++;
            }
            if(parentElement !== newParentElement){
                texto = "";
                numtab= 0; 
            }
        printSemanticElements(element.children, newParentElement);
    };
};

printSemanticElements(children, 'BODY');
jsls