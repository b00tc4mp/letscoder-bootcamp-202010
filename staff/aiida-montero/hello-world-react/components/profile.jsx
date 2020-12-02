function Profile({ fullname, image, onModify }) {
    return <section className = "profile">
        <h2>Profile</h2>
        <form className = "profile" onSubmit=
        {function (event) {
            event.preventDefault()

            const { target: { fullname: { value: fullname }, image: { value: image } } } = event

            onModify(fullname, image)
        }}>
            <input type="text" name="fullname" placeholder="full name" defaultValue={fullname} />
            <input type="text" name="image" placeholder="image url" defaultValue={image} />

            <button>Save</button>
        </form>
    </section>
}