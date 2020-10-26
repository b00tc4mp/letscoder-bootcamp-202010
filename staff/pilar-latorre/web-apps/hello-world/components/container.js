function mountContainer(template){

    var temp = document.createElement('div')
    
    temp.innerHTML= template

    var container = temp.firstChild

    return container

}