(function(){


    var root = document.getElementById('root');

    //title 
    function reset(){
       root.innerHTML = '';
        root.append(title);
        root.append(access); 
    }
    
    var title = mountTitle(function(){
        root.innerHTML = '';
        root.append(title);
        root.append(access);
        
        
        // limpiarLogin();
        // limpiarRegister();
        
    })
    
    root.append(title)
    
    
    
    //Panel Options (access)
    //al elegir register muestra el panel de registro y oculta el de options
    //al elegir login muestra el panel de login y oculta el de options
    
        
    
    var access = mountAccess(function(){
        access.replaceWith(register)
    },function(){
        access.replaceWith(login)
    });
    root.append(access)
    
    
    //panel de registro.. 
    //al rellenar todos los campos y darle register se cargara un nuevo usuario en users
    //tambien se ocultara este panel y se mostrara el panel de registrado exitosamente
        
    
    var register = mountRegister(function(fullname,email,password,repassword){
        registerUser(fullname,email,password,repassword,function(error){
            if(error){
                // alert(error.message);
                var texto = register.querySelector('.register__h3')
                texto.innerText = error.message;
            }else {
                register.replaceWith(confirm);
                // limpiarRegister();
            }; 
        });
    });
    
    //Register Corfirm panel
    //este panel muestra que te registraste correctamente y tiene un boton para ir al panel de login
    
    var confirm = mountRegisterConfirm(function(){
        confirm.replaceWith(login)
    });
    
    //Login Panel
    //al rellenar todos los campos y darle logi se comprobara si el usuario esta registrado
    //si el usuario se registro previamente tambien se ocultara este panel y se mostrara la pantalla de bienbenido a Hello World App      
    
    var token1
    var login = mountLogin('Login',function(email,password){
        
        authenticateUser(email,password, function(error,token){
            if(error){
                var reTry = login.querySelector('.login__h3');
                reTry.innerText = error.message;
                reTry.classList.remove('off');
            } else {
                
                retrieveUser(token, function(error, user){
                    if (error === null){
                        var name = user.fullname
                        // welcome.append('Welcome ' + name + ', good to see you again!')
                        // welcome.innerHTML = '<h3>"Welcome ' + name + ', good to see you again!"</h3>'
                        // welcome.innerHTML = `<h3>"Welcome "` + name + `", good to see you again!"</h3>`
                        welcome.querySelector('h3').innerText = "Welcome " + name + ", good to see you again!"
                    }
                    
                })
                login.replaceWith(welcome)
                root.append(profile);
                // limpiarLogin();
            };
        });
    })

    // welcome
 
    var welcome = mountWelcome();

    //  profile
    //on retrieve
    var profile = mountProfile(function(){
        var login = mountLogin('Search info',function(email,password){
            
            authenticateUser(email,password,function(error,token){
                if (error){
                    var retry = login.querySelector('.login__h3');
                    reTry.innerText = error.message;
                    reTry.classList.remove('off');
                } else {
                    var token = token
                    retrieveUser(token,function(error,user){
                        if (error === null){
                            var userInfo = '';
                            for (var key in user){
                                userInfo += key + ' : ' + user[key] + '\n'
                            }
                            responseDisplay.innerText = userInfo;
                        }
                    })
                    login.replaceWith(responseDisplay)
                }
            })
        }); 
        //chequeo primero cuantos paneles hay en la pantalla
        for (var i = 3; i < root.children.length;i++){
            root.children[i].remove();
        }
        root.append(login)
    },//on update
    function(){
        var login = mountLogin('Update info',function(email,password){
            authenticateUser(email,password,function(error,token){
                if (error){
                    var retry = login.querySelector('.login__h3');
                    reTry.innerText = error.message;
                } else {
                    var token = token
                    var updateProfile = mountUpdate(function(characteristic,value){
                        modifyUser(token,function(error){
                            if (error === null){
                                responseDisplay.innerText = 'Ok, user updated succesfully!'
                            }else {
                                responseDisplay.innerText = error.message
                            }
                        },'{"'+characteristic+'": "'+value+'"}');
                        updateProfile.replaceWith(responseDisplay);
                    })
                    
                    login.replaceWith(updateProfile)
                }
            })
        });
        
        for (var i = 3; i < root.children.length;i++){
            root.children[i].remove();
        }
        root.append(login)
        

       
    },//on delete
    function(){
        var login = mountLogin('Delete account',function(email,password){
            var password = password
            authenticateUser(email,password,function(error,token){
                if (error){
                    var retry = login.querySelector('.login__h3');
                    reTry.innerText = error.message;
                    reTry.classList.remove('off');
                } else {
                    var token = token
                    
                    unRegisterUser(token,password, function(response){
                        if (error === null){
                            responseDisplay.innerText = 'Ok, user deleted succesfully!'
                            reset()
                            root.append(responseDisplay)
                        } else {
                            responseDisplay.innerText = error.message
                            root.append(responseDisplay)
                        }
                    })
                    
                    
                }
            })
        }); 
        for (var i = 3; i < root.children.length;i++){
            root.children[i].remove();
        }
        root.append(login)
    });

    
    
    var responseDisplay = mountDisplay();
    


})();