function suma() {
  return 2 + 2;
}
var callback = suma;
var funcionAnonima = function (nombre, valorFuncion) {
  console.log("hola" + nombre);
  console.log(valorFuncion);
};
funcionAnonima("pepe", callback());
