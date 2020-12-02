function Welcome (props) {
    return <section className="welcome">
        
                <h4>Welcome, {props.name}!</h4>
    
                <img className="welcome__image" src={props.image || 'https://avatarfiles.alphacoders.com/116/116483.jpg'} /> 

    </section>
}