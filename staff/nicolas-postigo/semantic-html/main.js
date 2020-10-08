
var children = document.body.children




printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        if (element.tagName !== "DIV" && element.tagName !== "SPAN" && element.tagName !== "SCRIPT" && element.tagName !== "NOSCRIPT" && element.tagName !=="STYLE" && element.tagName !== "IFRAME")
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
}

//PRUEBA
var div = document.getElementsByTagName('div')
var children = document.body.div




printSemanticElements(div)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        console.log(element.tagName)

        printSemanticElements(element.div)
    }
}







// PRUEBA 1

var children = document.body.children
var div = document.getElementsByTagName('div')



printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        div[i] = false;
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
}


//PRUEBA 2 
var children = document.body.div
printSemanticElements(children)
var elements = document.getElementsByTagName(SCRIPT)
function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
}

// PRUEBA

var children = document.body.children
var tagName = "DIV"



printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
}





var children = document.body.children
var elements = document.getElementsByName("DIV")



printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i]
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
}


//PRUEBA

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







var children = document.body.children




printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAM
        if (element.tagName !== "DIV" && element.tagName !== "SPAN" && element.tagName !== "SCRIPT" && element.tagName !== "NOSCRIPT" && element.tagName !=="STYLE" && element.tagName !== "IFRAME")
        console.log(element.tagName)
        printSemanticElements(element.children)
        <script>
        document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
        </script>
    }

    document.getElementById("A")= document.getElementById("HEAD").firstChild.nodeValue;
}



var children = document.body.children




printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
    var nodeChildren = mapping[node.value.Id].children;
    root.children.push({value:node.value, children:nodeChildren})
   for (var i = 0; i < nodeChildren.length; i++) {
        recurse(root, nodeChildren[i], mapping);
    }
    return root;
}
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        if (element.tagName !== "DIV" && element.tagName !== "SPAN" && element.tagName !== "SCRIPT" && element.tagName !== "NOSCRIPT" && element.tagName !=="STYLE" && element.tagName !== "IFRAME")
        console.log(element.tagName)
        
        printSemanticElements(element.children)
    }
    function getIndex(elements) {
        var index=[],
            t=elements.target;
        
        while (t!==document.body) {
            index.unshift(Array.prototype.indexOf.call(t.parentElement.children,t));
            t=t.parentElement;
        }
        return index;
        }

var data = [{ depth: 0, id: "HEADER" }, { depth: 0, id: "INPUT" }, { depth: 1, id: "I", parent_id: "HEADER" },
tree = function (data, root) {
    var t = {};
    data.forEach(o => {
        Object.assign(t[o.id] = t[o.id] || {}, o);
        t[o.parent_id] = t[o.parent_id] || {};
        t[o.parent_id].children = t[o.parent_id].children || [];
        t[o.parent_id].children.push(t[o.id]);
    });
    return t[root].children;
},
console.log(tree)]



////


var children = document.body.children


const hierarchy = (data = [], { idKey = 'id', parentKey = 'HEADER', childrenKey = 'A' } = {}) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
        const { [idKey]: id, [parentKey]: parentId = 0 } = item;
        childrenOf[id] = childrenOf[id] || [];
        item[childrenKey] = childrenOf[id];
        parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(item) : tree.push(item);
    });
    return tree;
}

printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        if (element.tagName !== "DIV" && element.tagName !== "SPAN" && element.tagName !== "SCRIPT" && element.tagName !== "NOSCRIPT" && element.tagName !=="STYLE" && element.tagName !== "IFRAME")
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
}


///

var children = document.body.children


const hierarchy = (data = [], { idKey = 'id', parentKey = 'HEADER', childrenKey = 'A' } = {}) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
        const { [idKey]: i, [parentKey]: parentId = 0 } = item;
        childrenOf[i] = childrenOf[i] || [];
        item[childrenKey] = childrenOf[i];
        parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(item) : tree.push(item);
    });
    return tree;
}

printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        if (element.tagName !== "DIV" && element.tagName !== "SPAN" && element.tagName !== "SCRIPT" && element.tagName !== "NOSCRIPT" && element.tagName !=="STYLE" && element.tagName !== "IFRAME")
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
}




var children = document.body.children
var toggler = document.getElementsByTagName("HEADER");
var i;




printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        if (element.tagName !== "DIV" && element.tagName !== "SPAN" && element.tagName !== "SCRIPT" && element.tagName !== "NOSCRIPT" && element.tagName !=="STYLE" && element.tagName !== "IFRAME")
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
   
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
}




var children = document.body.children




printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        if (element.tagName !== "DIV" && element.tagName !== "SPAN" && element.tagName !== "SCRIPT" && element.tagName !== "NOSCRIPT" && element.tagName !=="STYLE" && element.tagName !== "IFRAME")
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
}


var children = document.body.children
var HEADER = document.getElementsByTagName(header);
var A = document.getElementsByTagName(a);
var IMG = document.getElementsByTagName(img);
var FORM = document.getElementsByTagName(form);
var BUTTON = document.getElementsByTagName(button);
var I = document.getElementsByTagName(I);
var NAV = document.getElementsByTagName(nav);




printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        if (element.tagName !== "DIV" && element.tagName !== "SPAN" && element.tagName !== "SCRIPT" && element.tagName !== "NOSCRIPT" && element.tagName !=="STYLE" && element.tagName !== "IFRAME")
        console.log(element.tagName)

        printSemanticElements(element.children)
    }
}