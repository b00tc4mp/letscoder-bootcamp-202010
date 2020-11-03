function ResultList(props) {
    console.log(props)

    return (
        <section className="u-p-h-20">
            <ul className="u-grid-items">

                {props.movies.map((movie) => (
                    <li>
                        <Card movie={movie} />
                    </li>
                ))}
            </ul></section>
    )


}