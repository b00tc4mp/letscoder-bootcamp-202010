import './SaveNote.sass'

const SaveNote = ({ onSave }) => {
    return <section className='note'>
        <h1 className='note__title'>TODO's</h1>
        <h5 className='note__subtitle'>Add a new note</h5>

        <form className='note__form' onSubmit={event => {
            event.preventDefault()

            const { target: { text: { value: text }, tags: {value: tags }, visibility: { value: visibility} }} = event

            onSave(text, tags.split(' '), visibility)

        }}>
            <input type="text" name="text" placeholder="TODO" required></input>
            <input type="text" name="tags" placeholder="tags" required></input>
            <input type="text" name="visibility" placeholder="public or private" required></input>
            <button className='note__btn'>Add note!</button>
        </form>
    </section>
}

export default SaveNote;