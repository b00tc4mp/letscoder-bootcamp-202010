class calculator {
    constructor(textAnterior,textActual) {
        this.textAnterior = textAnterior;
        this.textActual = textActual;
        this.clear();
    };

    clear(){
        this.textActual = "";
        this.textAnterior = "";
        this.operation = undefined;
        textAnterior.innerText = "";
        textActual.innerText = "";
    };

    agregarNumero(number){
       if (number === "." && this.textActual == ""){
        this.textActual = this.textActual.toString() + "0";
       } else if (number === "." && this.textActual.includes(".")) return;
       
        this.textActual = this.textActual.toString() + number.toString();
    };
    chooseOperation(operation){
        if(this.textActual === "") return;
        if(this.textAnterior !== ""){
            this.compute();
        };
        this.operation = operation;
        this.textAnterior = this.textActual;
        this.textActual = "";
    };
    compute(){
        let computation;
        const prev =parseFloat(this.textAnterior);
        const current = parseFloat(this.textActual);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {

            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "x":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            default:
                return;
        };
        this.textActual = computation;
        this.operation = undefined;
        this.textAnterior = "";
        textAnterior.innerText = "";
    };
    updateDisplay(){
        textActual.innerText = this.textActual;
        if(this.operation != null){
            textAnterior.innerText=
            `${this.textAnterior} ${this.operation}`;
        } ;
    };
    reset(){
        this.textActual = "";
    };
    delete(){
        this.textActual = this.textActual.slice(0,this.textActual.toString().length-1);
    };
};


