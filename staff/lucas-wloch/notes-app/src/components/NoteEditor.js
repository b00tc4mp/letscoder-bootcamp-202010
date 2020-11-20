import saveNote from "../logic/save-note"

function NoteEditor({ onSavedNote, userId }) {
    // (id, text, tags, owner, visibility, callback)

    // onSaveNote = (id, text, tags, owner, visibility, callback) => {
    //     saveNote
    // }
    return <>
        <section>
            <h1>Create Your Note </h1>
            <form onSubmit={event => {
                event.preventDefault()

                const { target: { text: { value: text }, visibility: { value: visibility } } } = event
                if (text && [] && userId && visibility)
                    saveNote(undefined, text, [], userId, visibility, error => {
                        if (error) {
                            const { error } = JSON.parse(error)
                            alert(error)
                        }
                        onSavedNote()
                    })
                else return console.log('text is empty or blank')
            }}>
                <input type="text" name="text" placeholder="Create your note" />
                <select name="visibility" id="visibility">
                    <option value="private">private</option>
                    <option value="public">public</option>
                </select>
                <button>Send</button>
            </form>
        </section>
    </>
}

export default NoteEditor

