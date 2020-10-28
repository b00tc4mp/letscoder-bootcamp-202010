function Profile(props) {
    return <>
        <h2>Profile</h2>
        <form onSubmit={function (event) {
            event.preventDefault()

            const fullname = event.target.fullname.value
            const image = event.target.image.value

            props.onModify(fullname, image)
        }}>
            <input type="text" name="fullname" placeholder="full name" defaultValue={props.fullname} />
            <input type="text" name="image" placeholder="image url" defaultValue={props.image} />

            <button>Save</button>
        </form>
    </>
}