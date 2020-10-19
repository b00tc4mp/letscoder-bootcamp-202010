var person = {
  name: "Pablo",
  callName: function () {
    return this.name;
  },
};

var person2 = new Array();

//person2["name"] = "Caterina";
person2.name = "Pedro";
person.age = "52";
console.log(person2.name);
