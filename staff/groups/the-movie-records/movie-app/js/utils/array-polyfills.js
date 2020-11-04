if (typeof Array.prototype.randomIndex === "undefined")
  Array.prototype.randomIndex = function () {
    return Math.floor(Math.random() * this.length);
  };

if (typeof Array.prototype.random === "undefined")
  Array.prototype.random = function () {
    return this[this.randomIndex()];
  };

if (typeof Array.prototype.shuffle === "undefined")
  Array.prototype.shuffle = function () {
    for (var i = 0; i < this.length; i++) {
      var current = this[i];

      var index = this.randomIndex();

      this[i] = this[index];

      this[index] = current;
    }
  };

if (typeof Array.prototype.truncate === "undefined")
  String.prototype.truncate = function (num) {
    if (this.length > num) {
      return this.slice(0, num) + "...";
    } else {
      return this;
    }
  };

// ... more polyfills here on
