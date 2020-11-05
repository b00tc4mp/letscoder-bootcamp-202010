function Calculator() {
    return <section className="calculator">
        <div className="calculator__display"></div>
        <div className="calculator__buttons">
            <button className="calculator__button">7</button>
            <button className="calculator__button">8</button>
            <button className="calculator__button">9</button>
            <button className="calculator__button">/</button>
            <button className="calculator__button">4</button>
            <button className="calculator__button">5</button>
            <button className="calculator__button">6</button>
            <button className="calculator__button">x</button>
            <button className="calculator__button">1</button>
            <button className="calculator__button">2</button>
            <button className="calculator__button">3</button>
            <button className="calculator__button">-</button>
            <button className="calculator__button">C</button>
            <button className="calculator__button">0</button>
            <button className="calculator__button">.</button>
            <button className="calculator__button">+</button>
        </div>
        <button className="calculator__execute">=</button>
    </section>
}

ReactDOM.render(<Calculator />, document.getElementById('root'))