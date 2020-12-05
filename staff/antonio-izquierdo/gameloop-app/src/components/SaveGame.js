import './SaveGame.sass'

export default function SaveGame ({onSaveGame}) {
    const handleSubmitGame = event => {
        event.preventDefault()

        let { target: {
            name: { value: name },
            description: { value: description },
            gameconsole: { value: gameconsole},
            budget: { value: budget}          
        }} =event

        onSaveGame(name, description, gameconsole, budget)
    }
    return <section className="save-game">
        <form onSubmit={handleSubmitGame}> 
            <input name="name" type="text" placeholder="Game Tittle"></input>
            <textarea name="description" type ="text" placeholder="Description"></textarea>
            <input name="budget" type ="text" placeholder="Price"></input>
            <select className="save-game__select" name="gameconsole" id="gameconsole">
                <option className="save-game__option" value="nintendo">Nintendo DS</option>
                <option className="save-game__option" value="playstation">Play Station</option>
            </select>
            <button>Save</button>
        </form>
    </section>

} 