const callbacks = [];
let doing = false;

const done = () => {
  //if (callbacks.length) return callbacks.shift()(done);
  if (callbacks.length) {
    const hola = callbacks.shift();
    hola(done);
  }
  doing = false;
};

module.exports = (callback) => {
  callbacks.push(callback);

  if (!doing) {
    doing = true;

    done();
  }
};
