searchMusic("BQDWdC7ID-k65gDQk8pY4fbmSPcbp4yv5xcr8qcvaF1UyttgJqjvPpePu6hUfI_wTzBBWXDH3O90tLlo8mcvzJGYsfpJajJWH89NjSGZS26pAPa9d7UGp3nrsLIsWQgEebh7SN0dmpQE0WAmM2Cb8oCoaGt-UNc", 'track', 'jackson', function(error, res){
    console.log('DEMO music()')

    if (error) console.error(error)
    else {
        let musicMock = res.map(({ artists: href, id, name, type, uri}) => ({artists, href, id, name, type, uri}))
        
    console.log(musicMock)
}
})