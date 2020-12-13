import './ListNotes.sass'

export default function ({ notes }) {
    return <section className="list-notes">
        {notes && notes.length && <ul>
            {notes.map(({ text, visibility }) => <li className="list-notes__note">
                <p>{text}</p>
                <span>{visibility}</span>
            </li>)}
        </ul>}
    </section>
}