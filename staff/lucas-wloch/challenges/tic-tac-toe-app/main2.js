class game {
    constructor (jugador,jugando){
      this.jugando = jugando;
      this.jugador = jugador;
     // clear()
   };
    /*clear (){
        i = 0
        this.jugador = ""
        this.jugando = ""
        buttons.forEach( button => {
            button.textContent = ""
        })
    }*/
    play (num) {    
        //if (jugando.textContent !=="O" && jugando.textContent !== "X"){
            switch(num) {
                case 0:
                case 2:
                case 4:
                case 6:
                case 8: {this.jugador = "O";
                proximoJugador = "X";
                };
                break;
                case 1:
                case 3:
                case 5:
                case 7 : {this.jugador = "X";
                proximoJugador = "O";
                };
                break;
            };
            jugador = this.jugador;
            //updateDisplay();
      //  } /*return;*/
    };
    updateDisplay() {
        this.jugando = `${"turno de: "} ${proximoJugador}`;
        jugando.textContent = this.jugando;
    };
    endgame() {
        let result
        if (buttons[0].textContent === buttons[1].textContent && buttons[1].textContent === buttons[2].textContent && buttons[2].textContent !== "") { result = `${"GANA "} ${buttons[0].textContent}`
        jugando.textContent = result
        }
        else if (buttons[3].textContent === buttons[4].textContent && buttons[4].textContent === buttons[5].textContent && buttons[5].textContent !== "") { result = `${"GANA "} ${buttons[3].textContent}`
        jugando.textContent = result
        }
        else if (buttons[6].textContent === buttons[7].textContent && buttons[7].textContent === buttons[8].textContent && buttons[8].textContent !== "") { result = `${"GANA "} ${buttons[6].textContent}`
        jugando.textContent = result
        }
        else if (buttons[0].textContent === buttons[3].textContent && buttons[3].textContent === buttons[6].textContent && buttons[6].textContent !== "") { result = `${"GANA "} ${buttons[0].textContent}`
        jugando.textContent = result
        }
        else if (buttons[1].textContent === buttons[4].textContent && buttons[4].textContent === buttons[7].textContent && buttons[7].textContent !== "") { result = `${"GANA "} ${buttons[1].textContent}`
        jugando.textContent = result
        }
        else if (buttons[2].textContent === buttons[5].textContent && buttons[5].textContent === buttons[8].textContent && buttons[8].textContent !== "") { result = `${"GANA "} ${buttons[2].textContent}`
        jugando.textContent = result
        }
        else if (buttons[0].textContent === buttons[4].textContent && buttons[4].textContent === buttons[8].textContent && buttons[8].textContent !== "") { result = `${"GANA "} ${buttons[0].textContent}`
        jugando.textContent = result
        }
        else if (buttons[2].textContent === buttons[4].textContent && buttons[4].textContent === buttons[6].textContent && buttons[6].textContent !== "") { result = `${"GANA "} ${buttons[2].textContent}`
        jugando.textContent = result
        } else if (buttons[0].textContent !== "" &&
                   buttons[1].textContent !== "" &&
                   buttons[2].textContent !== "" &&
                   buttons[3].textContent !== "" &&
                   buttons[4].textContent !== "" &&
                   buttons[5].textContent !== "" &&
                   buttons[6].textContent !== "" &&
                   buttons[7].textContent !== "" &&
                   buttons[8].textContent !== "") 
                    {
                    result = `${"EMPATE"}`
                    jugando.textContent = result
                    };
    };
};


// const( desde [0] hasta [8])
/*const button1 = document.querySelector("[data-button-1]")
const button2 = document.querySelector("[data-button-2]")
const button3 = document.querySelector("[data-button-3]")
const button4 = document.querySelector("[data-button-4]")
const button5 = document.querySelector("[data-button-5]")
const button6 = document.querySelector("[data-button-6]")
const button7 = document.querySelector("[data-button-7]")
const button8 = document.querySelector("[data-button-8]")
const button9 = document.querySelector("[data-button-9]")*/
const buttons = document.querySelectorAll("[data-button]");
const jugando = document.querySelector("[data-jugando]");
let jugador;
let proximoJugador; 
let i = 0;


game = new game(jugador,jugando);


buttons.forEach( button => {
    button.addEventListener("click", () => {
           if (button.textContent !=="O" && button.textContent !=="X"){
            game.play(i);
            button.textContent = `${jugador}`;
            game.updateDisplay();
            game.endgame();
            i++;
            };
    });
});

/*if (i = buttons.length) {
                game.endgame()
            } return*/
//button1.addEventListener ("click")
/*for (let i = 0; i < buttons.length; i++) {
}*/
/*for (let i=0;i<buttons.length;i++) {
    //en Juego
    buttons.forEach( button => {
        button.addEventListener("click", () => {
            //game.rotate()
            game.play(i)
            button.textContent = `${jugador}`
            game.updateDisplay()
            console.log("hello")
            //i++
        })
    })
}*/

   

