// import './styles/SavedFood.sass'

export default function SavedFood ({ food }) {

    const {name, calories} = food

    return <section className="saved-food">
        <p>{name}</p><p>{calories}</p>
    </section>
}