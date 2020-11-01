describe('SPEC retrieve_all_users()', function(){
  const {random} = Math

    describe("when token is a not string", function () {
        let token ;
    
        beforeEach(function () {
            token = [1, true, null, undefined, {}, []].random()
            
        });
    
        it("should fail if token is not a string", function () {
                 expect(function () {
                 retrieveAllUsers(token, function () {});
              }).toThrowError(TypeError, `${token} is not a token`);
        });
    
      });

    //--------------------------------------------------------------------------------
     
    describe("when token is empty or blank", function () {
        let token ;
    
        beforeEach(function () {
        token = ['', ' ', '\t', '\n'].random()
            
        });
    
        it("should fail if token is empty or blank", function () {
                 expect(function () {
                 retrieveAllUsers(token, function () {});
              }).toThrowError(Error, `token is empty or blank`);
        });
    
      });
     //--------------------------------------------------------------------------------------
     describe("when function is not a callback", function () {
        let token ;
    
        beforeEach(function () {
        token = random().toString()
        callback = [1, true, null, undefined, {}, [], 'string', new Date].random()
            
        });
    
        it("should fail if callback is not a function", function () {
                 expect(function () {
                 retrieveAllUsers(token, callback);
              }).toThrowError(TypeError, `${callback} is not a callback`);
        });
    
      });

    
    })
