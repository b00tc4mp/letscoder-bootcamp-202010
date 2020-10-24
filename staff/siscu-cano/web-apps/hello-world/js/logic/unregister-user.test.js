(function () {
    console.log('TEST unregisterUser()');

    (function () {
        console.log(' should fail when token is different to string (Test1)')
        var token = [1, true, null, undefined, {}, [], new Date].random()
        var password = "MyPass" + Math.random();
        var fail
        try {
            unregisterUser(token, password, function(){})
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === token + ' is not a token', 'should error message match expected')                 
    })();

    (function () {
        console.log(' should fail when token is empty or blank (Test2)')
        var token = ['', ' ', '\t', '\n'].random()
        var password = "MyPass" + Math.random();
        var fail

        try {
            unregisterUser(token, password, function(){})
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
        console.assert(fail.message === token + ' is empty or blank', 'should error message match expected')
                            
    })();

    (function () {
        console.log(' should fail when token is different to string (Test3)')
        var password = [1, true, null, undefined, {}, [], new Date].random()
        var token = (Math.random() *1000).toString();
        var fail
        try {
            unregisterUser(token, password, function(){})
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === password + ' is not a password', 'should error message match expected')                 
    })();

    (function () {
        console.log(' should fail when token is empty or blank (Test4)')
        var password = ['', ' ', '\t', '\n'].random()
        var token = (Math.random() *1000).toString();
        var fail

        try {
            unregisterUser(token, password, function(){})
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof Error, 'should error be defined and an instance of Error')
        console.assert(fail.message === password + ' is empty or blank', 'should error message match expected')              
    })();

    (function () {
        console.log(' should fail when callback is not a function (Test5)')
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkzZmMwNTAxYmZkNjAwMTc3ZTI0ZTAiLCJpYXQiOjE2MDM1NjU4MDIsImV4cCI6MTYwMzU2OTQwMn0.SeN0CI-dFxr5b8Ib04CAHrKePhqETKO26h-L9K___eQ"
        var callback = [1, true, null, undefined, {}, [], new Date].random()
        var password = "MyPass" + Math.random();
        var fail

        try {
            unregisterUser(token, password, callback)
        } catch (error) {
            fail = error
        }
        console.assert(fail instanceof TypeError, 'should error be defined and an instance of TypeError')
        console.assert(fail.message === callback + ' is not a callback', 'should error message match expected')
                               
    })();

})();