modifyUser( '{"Country":"Spain"}','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE5ZTJkMjE3YzAwMTc2ZDhiNzgiLCJpYXQiOjE2MDM2MjU0MTIsImV4cCI6MTYwMzYyOTAxMn0.dTST3n0WH2L8CqKPDcgBOQZR_mRkUMmquUNtVjEhE_Y',
    function(error){
    if (error===undefined) console.log( "ok, perfect, data has been updated")
    else console.error("ERROR" + error.message)



}, )