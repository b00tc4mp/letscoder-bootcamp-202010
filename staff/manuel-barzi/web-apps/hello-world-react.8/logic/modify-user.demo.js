modifyUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE4NzJkMjE3YzAwMTc2ZDhiNzEiLCJpYXQiOjE2MDM4OTkyNDAsImV4cCI6MTYwMzkwMjg0MH0.PC28kXu1NWgGiPGRJMZk7vnfcE0ZVe2xpaGC6_8e3Ds',
    { age: 24, country: 'Argentina', image: 'https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif' },
    function (error) {
        if (error) return console.error(error.message)

        console.log('ok, modified')
    })