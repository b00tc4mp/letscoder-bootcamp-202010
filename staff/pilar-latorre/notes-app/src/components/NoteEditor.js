import saveNote from "../logic/save-note"


function NoteEditor( {onSavedNote, userId}){
    const handleSubmit = event => {
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

    }

    return <>
        <section>
            <h1>Create your note</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="write your note" />

            <select name="visibility" id="visibility">
                <option value="private">Private</option>
                <option value="public">Public</option>
            </select>
          
            <button>Send</button>
            </form>
        </section>
   
    </>

}

export default NoteEditor