const { Component } = React

class Calculator extends Component {
    constructor() {
        super()

        this.state = { value: 0 }
    }

    handleButton = symbol => {
        const { state: { value, prevValue, afterOperation, operation } } = this

        if (typeof symbol === 'number') {
            if (afterOperation) this.setState({ value: symbol, afterOperation: false })
            else if (!value) this.setState({ value: symbol })
            else this.setState({ value: value * 10 + symbol })
        } else if (typeof symbol === 'string') {
            if (symbol === '=')
                switch (operation) {
                    case '+':
                        this.setState({ value: prevValue + value, prevValue: 0 })
                        break
                    case '-':
                        this.setState({ value: prevValue - value, prevValue: 0 })
                        break
                    // TODO other operations
                }
            else
                switch (symbol) {
                    case '+':
                        this.setState({ prevValue: value, afterOperation: true, operation: symbol })
                        break
                    case '-':
                        this.setState({ prevValue: value, afterOperation: true, operation: symbol })
                        break
                    // TODO other operations
                }
        }
    }

    render() {
        const { state: { value }, handleButton } = this

        return <section className="calculator">
            <div className="calculator__display">{value}</div>
            <div className="calculator__buttons">
                <button className="calculator__button" onClick={() => handleButton(7)}>7</button>
                <button className="calculator__button" onClick={() => handleButton(8)}>8</button>
                <button className="calculator__button" onClick={() => handleButton(9)}>9</button>
                <button className="calculator__button" onClick={() => handleButton('/')}>/</button>
                <button className="calculator__button" onClick={() => handleButton(4)}>4</button>
                <button className="calculator__button" onClick={() => handleButton(5)}>5</button>
                <button className="calculator__button" onClick={() => handleButton(6)}>6</button>
                <button className="calculator__button" onClick={() => handleButton('x')}>x</button>
                <button className="calculator__button" onClick={() => handleButton(1)}>1</button>
                <button className="calculator__button" onClick={() => handleButton(2)}>2</button>
                <button className="calculator__button" onClick={() => handleButton(3)}>3</button>
                <button className="calculator__button" onClick={() => handleButton('-')}>-</button>
                <button className="calculator__button" onClick={() => handleButton('C')}>C</button>
                <button className="calculator__button" onClick={() => handleButton(0)}>0</button>
                <button className="calculator__button" onClick={() => handleButton('.')}>.</button>
                <button className="calculator__button" onClick={() => handleButton('+')}>+</button>
            </div>
            <button className="calculator__execute" onClick={() => handleButton('=')}>=</button>
        </section>
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'))