const Profile = ({token}) => {
return <section className="profile">
    <h3 className="profile__title">Current information:</h3>
    <img src={url} alt="avatar"/>
    <p className="profile__fullname">{user.fullname}</p>
</section>

}