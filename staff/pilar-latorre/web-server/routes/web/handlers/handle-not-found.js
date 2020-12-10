module.exports = (req, res, handleError) => {
    res.render('not-found', (error, html) => {
        if(error) return handleError(error)

        res.send(html)

    })

}
/*     fs.readFile(path.join(__dirname, '../../views/not-found.html'), 'utf8', (error, content) => {
        if (error) return handleError(error)

        res.status(404).send(content)

    }) */



