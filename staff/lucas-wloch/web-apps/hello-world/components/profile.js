// function mountProfile(onRetrieve,onUpdate,onRegister){
function mountProfile(onRetrieve,onUpdate,onDelete){
    
    var container = mountContainer(`<section class="profile">
    <button class="profile__retrieve">User info</button>
    <button class="profile__update">Update Profile</button>
    <button class="profile__unregister">Delete Account</button>
</section>`);

    var retrieve = container.querySelector('.profile__retrieve');
    retrieve.onclick = onRetrieve;

    
    var update = container.querySelector('.profile__update');
    update.onclick = onUpdate;

    var unRegister = container.querySelector('.profile__unregister');
    unRegister.onclick = onDelete;


    

    return container;
}