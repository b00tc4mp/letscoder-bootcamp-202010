import saveNote from "../logic/save-note"


function Note( {onSavedNote, userId}){

  /*   onSaveNote = (id, text, tags, owner, visibility, callback) => {
        saveNote
    }
 */

    return <>
        <section>
            <h1>Create your note</h1>
            <form onSubmit={event => {
            event.preventDefault()

            // const { target: { text: { value: text }, tag: { value: tag }, visibility: {value: visibility} } } = event
            const { target: { text: { value: text }, visibility: {value: visibility} } } = event

            saveNote(undefined, text, [], userId, visibility, error => {
                if (error) {
                    const  {error} =JSON.parse(error)
                    alert(new Error(error))

                }
                onSavedNote()
            })
        }}>
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

export default Note