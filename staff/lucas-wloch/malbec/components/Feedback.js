const Feedback = ({ error, color = "red" }) =>
    <>
        <p className={`feedback feedback--${color}`}>{error}</p>
        <style jsx>{`
    .feedback{
        font-size: 12px
    }
    .feedback--white{
        color: white
    }
    .feedback--black{
        color: black
    }
    .feedback--red{
        color: red
    }
`}</style>
    </>


export default Feedback