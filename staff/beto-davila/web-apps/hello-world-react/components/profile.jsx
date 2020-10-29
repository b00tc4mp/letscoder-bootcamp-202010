function Profile(props) {
    return <>
        <h4>Profile</h4>
        <form className="profile__form" onSubmit={function (event) {
            event.preventDefault();

            const fullname = event.target.fullname.value;
            const image = event.target.image.value;
            
            props.onModify(fullname, image);
        }}>
            <input type="text" name="fullname" placeholder="full name" defaultValue={props.fullname} />
            <input type="text" name="image" placeholder="image url" defaultValue={props.image} />

            <button className="btn">Save</button>
        </form>
    </>
}