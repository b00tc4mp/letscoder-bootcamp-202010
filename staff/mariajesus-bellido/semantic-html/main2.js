var elements = document.body.children;
 var count = -1;

 printSemanticElements(elements);

 function printTabs(num) {
     return "\t".repeat(num);
 }

 function printSemanticElements(elements) {
     for (var i = 0; i < elements.length; i++) {
         var element = elements[i];

         // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
         if ((element.tagName.toUpperCase() !== "DIV") && (element.tagName.toUpperCase() !== "SPAN") && (element.tagName.toUpperCase() !== "SCRIPT") && (element.tagName.toUpperCase() !== "NOSCRIPT") && (element.tagName.toUpperCase() !== "STYLE") && (element.tagName.toUpperCase() !== "IFRAME")) {

             ++count;
             console.log(printTabs(count) + element.tagName);
             printSemanticElements(element.children);
             --count;
         }
     }
 } 