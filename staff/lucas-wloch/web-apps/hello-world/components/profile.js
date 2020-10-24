// function mountProfile(onRetrieve,onUpdate,onRegister){
function mountProfile(onRetrieve){
    
    var container = mountContainer(`<section class="profile">
    <button class="profile__retrieve-user"></button>
    <button class="profile__update-user"></button>
    <button class="profile__unregister-user"></button>
    </section>`);

    var retrieve = container.querySelector('.profile__retrieve-user');
    retrieve.onClick = onRetrieve;
    // var update = container.querySelector('.profile__update-user');
    // update.onClick = onUpdate;
    // var unRegister = container.querySelector('.profile__unregister-user');
    // unRegister.onClick = onRegister;


    

    return container
}