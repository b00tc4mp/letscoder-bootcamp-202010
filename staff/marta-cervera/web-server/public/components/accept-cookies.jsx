
function AcceptCookies({ onAccept }) {
    return <section className="accept-cookies">
    <h2>Accept cookies on this browser?</h2>
    
    <button onClick={onAccept}>Accept Cookies</button>

    </section>
}