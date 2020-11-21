import saveNote from "../logic/save-note"
import './NoteEditor.sass'



function NoteEditor({ onSavedNote, userId }) {
    const handleSubmit = event => {
        event.preventDefault()

        const { target: { text: { value: text }, visibility: { value: visibility }, tags: { value: tags } } } = event
        if (text && tags && userId && visibility)
            saveNote(undefined, text, tags.split(' '), userId, visibility, error => {
                if (error) {
                    const res = JSON.parse(error)
                    alert(res.error)
                }
                onSavedNote()
            })
        else return console.log('text is empty or blank')

    }

    return <>
        <section className="noteEditor" >
            {/* <h1 className="noteEditor__title" >Create your note</h1> */}
            <form className="noteEditor__form" onSubmit={handleSubmit}>
                <div>

                <textarea className="noteEditor__textarea" type="text" name="text" placeholder="write your note"></textarea>
                </div>
                <div className="noteEditor__div"> 
                   <input className="noteEditor__inputTag" type="text" id="tags" name="tags" placeholder="tag your note" />
                <select className="noteEditor__select" name="visibility" id="visibility">
                    <option className="noteEditor__option" value="private">Private</option>
                    <option className="noteEditor__option" value="public">Public</option>
                </select>

                <button className="noteEditor__button">Send</button> 
                </div>
                
            </form>
        </section>

    </>

}

export default NoteEditor