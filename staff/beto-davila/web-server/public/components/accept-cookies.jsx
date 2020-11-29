// Accept cookies button
function AcceptCookies({ onAccept} ) {
    return <section className="accept-cookies">
        <h2 className="accept-cookies__question">Accept cookies on this browser?</h2>
        
    <button className="accept-cookies__btn" onClick={onAccept}>Accept</button>
    </section>
}