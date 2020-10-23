modifyUser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkwMTNhNzQwNGJkNDAwMTdkMDNiMTQiLCJpYXQiOjE2MDMzNTQ4NTAsImV4cCI6MTYwMzM1ODQ1MH0.FicF_7pspAZukufRjzRYErmjtuVBhZViLMQmFo79uB4", function(error){
    if (error===undefined) console.log( "ok, perfect, data has been updated")
    else console.error("ERROR" + error.message)



}, '"Country":"Spain"')