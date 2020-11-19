import './Note.sass'

function Note ({ onSaveNote }) {    
    return <section className="note">
        <form onSubmit={event =>{
            event.preventDefault()

            const { target: { text: { value: text }, tags: { value: tags }, owner: { value: owner}, visibility: { value: visibility } } } = event

            onSaveNote(text, tags, owner, visibility)
        }}>
            <input type="text" name="text" placeholder="write your note here"/>
            <input type="tag" name="tags" placeholder="tag"/>
            <input type="text" name="owner" placeholder="owner"/>
            <label>
            Choose  note visibility from this list:
            <input list="visibilty" name="visibility" />
          </label>
          <datalist id="visibilty">
            <option value="public" />
            <option value="private" />
            <option value="friends" />
          </datalist>
          <button>Publish</button>
        </form>

    </section>
}

export default Note