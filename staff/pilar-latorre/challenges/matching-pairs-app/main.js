var elementos = document.querySelectorAll(".board-imagen")
var defecto = "https://1.bp.blogspot.com/-rRaBpdfZpPw/W__Ey2gcBEI/AAAAAAABEQ4/jNCE0x2cA18eVRHhrd_gWHEZ-kphoBGzACK4BGAYYCw/s1600/7ced3204b0d1f526a68b726adf9405aa.jpg"
var imagenes = ["https://www.eltiempo.com/files/article_multimedia/uploads/2017/11/28/5a1de02e4b411.jpeg",
    "https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-8.png",
    "https://i.pinimg.com/originals/b8/4b/7e/b84b7efc796be09670c3d50a966026f1.jpg",
    "https://i.pinimg.com/originals/62/c8/43/62c843c6aa813d0b955e1a0a14c10f26.jpg",
    "https://www.nationalgeographic.com.es/medio/2019/12/11/harry-walkercomedy-wildlife-photo-awards-2019_0deff3f7_800x800.jpg",
    "https://zenithoteles.com/zenitlife/wp-content/uploads/2019/11/portada.jpg",
    "https://i.pinimg.com/originals/d3/dd/e1/d3dde167b2ffb2af2f67e2c641958e9a.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcs44zO4D-AEP4Y7kEotEZGKq_dOZCrqEMwg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcs44zO4D-AEP4Y7kEotEZGKq_dOZCrqEMwg&usqp=CAU",
    "https://zenithoteles.com/zenitlife/wp-content/uploads/2019/11/portada.jpg",
    "https://i.pinimg.com/originals/d3/dd/e1/d3dde167b2ffb2af2f67e2c641958e9a.jpg",
    "https://www.nationalgeographic.com.es/medio/2019/12/11/harry-walkercomedy-wildlife-photo-awards-2019_0deff3f7_800x800.jpg",
    "https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-8.png",
    "https://i.pinimg.com/originals/b8/4b/7e/b84b7efc796be09670c3d50a966026f1.jpg",
    "https://www.eltiempo.com/files/article_multimedia/uploads/2017/11/28/5a1de02e4b411.jpeg",
    "https://i.pinimg.com/originals/62/c8/43/62c843c6aa813d0b955e1a0a14c10f26.jpg"]

var status1 = null;
var status2 = null;



for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i].src)
    elementos[i].onclick = function () {
        if (status1 === null) {
            status1 = elementos[i]
        }
        else if (status2 === null) {
            status2 = elementos[i]
            checkCards(status1, status2)
            status1 = null
            status2 = null
        }

        if (elementos[i].src === defecto) {
            elementos[i].src = imagenes[i]
        }
    }
}



function checkCards(card1, card2) {

    console.log(card1)
    if (card1.src === card2.src) {
        alert("Has encontrado la pareja")
    }
    else {
        card1.src = defecto
        card2.src = defecto
    }
}




/*
var images = document.querySelectorAll("img")

var img0 = images[0]

img0.onclick = function(){
    if (img0 === defecto) {
        img0 = imagenes[0]
      } else {
        img0 = defecto
      }
    }
*/
