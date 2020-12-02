modifyUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkyZTI2Y2EzM2U4NDAwMTcwNjM4MWIiLCJpYXQiOjE2MDM1MjMxMTMsImV4cCI6MTYwMzUyNjcxM30.5crTzgcWV0PLySAQI1PXnVjojf99WPOB8nK6bFa5X40.EUr9hHGwg763KPbrKJ1Hlw24z5ZJChDx9IdUqc5LZrg', 
'{"fullname": "Lobo Feroz", "repassword": "123123123"}', 
function(error){
    console.log('Demo modifyUser()');
    if (error) console.error(error.message);
});