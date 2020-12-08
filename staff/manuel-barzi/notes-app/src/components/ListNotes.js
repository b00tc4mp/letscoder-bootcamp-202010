import './ListNotes.sass'

// const { env: { REACT_APP_API_URL: API_URL } } = process // WARN! babel does not transpile this destructuring with process env vars!
const API_URL = process.env.REACT_APP_API_URL

export default function ({ notes }) {
    return <section className="list-notes">
        {notes && notes.length && <ul>
            {notes.map(({ id, text, visibility }) => <li key={id} className="list-notes__note">
                <p>{text}</p>
                <span>{visibility}</span>
                <img src={`${API_URL}/notes/${id}/images`} width="600px" />
            </li>)}
        </ul>}
    </section>
}