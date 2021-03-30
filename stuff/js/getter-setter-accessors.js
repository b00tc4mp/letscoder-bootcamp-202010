var o = {
    __name__: null,

    set name(name) { this.__name__ = name.toUpperCase() },

    get name() { return `<${this.__name__}>` }
}
{__name__: null}
o.name
"<null>"
o.name = 'pepito'
"pepito"
o.name
"<PEPITO>"