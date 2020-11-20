import './ListNotes.sass'

function ListNotes ({ notes }) {
    return <section className="list-notes">
    {notes && notes.length && <ul>
        {notes.map(({ text, visibility, id }) => <li key={id} className="list-notes__note">
            <p>{text}</p>
            <span className="list-notes__visibility">{visibility}</span>
        </li>)}
    </ul>}
</section>
}

export default ListNotes