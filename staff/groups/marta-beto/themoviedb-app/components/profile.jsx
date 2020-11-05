const Profile = ({avatar, title, likes, fullname, onModify, onMovie}) => {

const pathLocation = 'https://image.tmdb.org/t/p/w500';

return <section className="profile">
    <h3 className="profile__title">Your information:</h3>
    <img className="profile__avatar" src={avatar} alt="avatar"/>
    <p className="profile__fullname">{fullname}</p>

    <div className="carousel">
        <h2 className="carousel__title">{title}</h2>
        {likes.map(({id, poster_path: image}) => <div className="carousel__movie" key={id} onClick={() => onMovie(id)}>
        <img className="carousel__movie--liked" src={pathLocation + image ? pathLocation + image : 'no favorites yet'} alt="movie-img"/>
        </div>)}
    </div>

    <form className ="profile__form" onSubmit={(event) => {
        event.preventDefault();

        const {target: {fullname: {value: fullname}, avatar: {value: avatar}}} = event

        try {
            onModify(fullname, avatar)   
        } catch (error) {
            alert(error.message)
        }

    }}>
        <div className="profile__bottom">
            <input type="text" name="fullname" placeholder="" defaultValue={fullname}/>
            <input type="text" name="avatar" placeholder="" defaultValue={avatar}/>
            <button className="profile__btn btn">Save</button>
        </div>
    </form>
</section>

}