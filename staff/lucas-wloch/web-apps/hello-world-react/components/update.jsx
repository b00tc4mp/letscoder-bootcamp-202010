function Update(props) {
    return <section className="update">
    <h3 className="update__h3"></h3>
    <form className="update__form" onSubmit={
        function (event){
            
            event.preventDefault();
    
            var characteristic = event.target.characteristic.value;
            var value = event.target.value.value;
            
            try{
                props.onUpdate(characteristic,value);
    
            } catch (error) {
                var reTry = container.querySelector('.update__h3');
                reTry.innerText = error;
            };
            
        }
    }>
        <input type="text" placeholder="Characteristic" name="characteristic" required/><input type="text" placeholder="value" name="value" required/>
        <button className="update__send">Send</button>
    </form>
</section>
}