const FeedbackAccess = ({ error, color = "red" }) =>
    <>
        <p className={`feedbackAccess feedbackAccess--${color}`}>{error}</p>
        <style jsx>{`
    .feedbackAccess{
        font-size: 12px
    }
    .feedbackAccess--white{
        color: white
    }
    .feedbackAccess--black{
        color: black
    }
    .feedbackAccess--red{
        color: red
    }
`}</style>
    </>


export default FeedbackAccess