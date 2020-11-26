import './SaveNote.sass'

const SaveNote = ({ onSave }) => {
    return <section className='note'>
        <h1 className='note__title'>TODO's</h1>
        <h5 className='note__subtitle'>Add a new note</h5>

        <form className='note__form' onSubmit={event => {
            event.preventDefault()

            let { target: { text: { value: text }, tags: {value: tags }, visibility: { value: visibility} }} = event

            tags = tags.trim()

            onSave(text, tags ? tags.split(' ') : [], visibility)

        }}>
            <textarea name="text" rows="10" cols="35" placeholder="Input your new task" required></textarea>
            <div className="note__inputs">
            <input type="text" name="tags" placeholder="tags" required></input>
            <input type="radio" name="visibility" value="public" defaultChecked/>
            <label htmlFor="public">Public</label>
            <input type="radio" name="visibility" value="private"/>
            <label htmlFor="private">Private</label>
            </div>
            <button className='note__btn'>Add note!</button>
        </form>
    </section>
}

export default SaveNote;