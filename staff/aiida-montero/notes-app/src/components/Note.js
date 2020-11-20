import './Note.sass'

const Note = ({ onSave, onRetrieve }) => {
    return <section className='note'>
        <h1 className='note__title'>TODO's</h1>
        <h3 className='note__subtitle'>Add a new note</h3>

        <form className='note__form' onSubmit={event => {
            event.preventDefault()

            const { target: { id: {value: id }, tags: {value: tags }, owner: { value: owner}, visibility: { value: visibility} }} = event

            onSave(id, tags, owner, visibility)

        }}>
            <input type="text" name="id" placeholder="note id or leave blank" ></input>
            <input type="text" name="tags" placeholder="tags"></input>
            <input type="text" name="owner" placeholder="creator user id"></input>
            <input type="text" name="visibility" placeholder="public or private"></input>
            <button className='note__btn'>Add new note!</button>
        </form>
            <div className="note__retrieve">
                <form onSubmit={event => {

                    const { target : { owner: { value: owner }}} = event

                    onRetrieve(owner)

                }}>
                    <input type="text" name="owner" placeholder="creator user id"></input>
                    <button>Show owner tasks</button>
                </form>
                <div className="note__retrieve--tasks">{notes}</div>       
            </div>
    </section>
}
export default Note
