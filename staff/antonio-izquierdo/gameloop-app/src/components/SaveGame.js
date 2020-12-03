import './SaveGame.sass'

export default function ({onSaveGame}) {
    const handleSubmitGame = event => {
        event.preventDefault()

        let { target: {
            name: { value: name },
            description: { value: description },
            budget: { value: budget}           

        }} =event

        onSaveGame(name, description, budget)

    }
    return <section className="save-game">
        <form onSubmit={handleSubmitGame}> 
            <input name="name" type="text" placeholder="Game Tittle"></input>
            <textarea name="description" type ="text" placeholder="Description"></textarea>
            <input name="budget" type ="text" placeholder="Price"></input>
            <button>Save</button>
        </form>
    </section>

} 