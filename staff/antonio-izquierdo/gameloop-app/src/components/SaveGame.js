import './SaveGame.sass'

export default function SaveGame ({onSaveGame}) {
    const handleSubmitGame = event => {
        event.preventDefault()

        let { target: {
            name: { value: name },
            description: { value: description },
            gameconsole: { value: gameconsole},
            budget: { value: budget},
            image       
        }} =event

        onSaveGame(name, description, gameconsole, budget, image.files[0])
    }
 
    return <section className="save-game">
        <form onSubmit={handleSubmitGame}> 
            <input name="name" type="text" placeholder="Game Tittle"></input>
            <textarea name="description" type ="text" placeholder="Description"></textarea>
            <input name="budget" type ="text" placeholder="Price"></input>
            <select className="save-game__select" name="gameconsole" id="gameconsole">
            <option className="save-game__option" value="game boy">Game Boy</option>
            <option className="save-game__option" value="game boy advance">Game Boy Advance</option>
            <option className="save-game__option" value="game boy color">Game Boy Color</option>
            <option className="save-game__option" value="nintendo ds">Nintendo DS</option>
            <option className="save-game__option" value="nintendo 3ds">Nintendo 3DS</option>
            <option className="save-game__option" value="nintendo switch">Nintendo Switch</option>
            <option className="save-game__option" value="wii">Wii</option>
            <option className="save-game__option" value="wii u">Wii U</option>
            <option className="save-game__option" value="play station 1">Play Station 1</option>
            <option className="save-game__option" value="play station 2">Play Station 2</option>
            <option className="save-game__option" value="play station 3">Play Station 3</option>
            <option className="save-game__option" value="play station 4">Play Station 4</option>
            <option className="save-game__option" value="play station 5">Play Station 5</option>
            <option className="save-game__option" value="xbox">Xbox</option>
            <option className="save-game__option" value="xbox 360">Xbox 360</option>
            <option className="save-game__option" value="xbox one">Xbox One</option>
            </select>
            <button>Save</button>
            <input type="file" id="image" name="image" />
            <label htmlFor="image"> Insert Picture </label>
        </form>
    </section>

} 