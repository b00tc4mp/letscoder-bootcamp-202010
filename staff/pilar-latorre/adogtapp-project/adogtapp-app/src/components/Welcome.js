import { useState } from 'react'
import SearchPet from './SearchPet'
import CreatePet from './CreatePet'
import './Welcome.sass'

function Welcome({userName, onCreatePet}){

        const [welcomeView, setWelcomeView] = useState('welcome')

        //handle search pet (query, patBusqueda){ retrievePet(token, query,patBusqueda)}

        /*
                retrievePets(token, query, patBuqueda){
                        if(patBusqueda===breed) call(token, undefined, undefined, undefined, query)
                        if(patBusqueda=== species)  call(token, undefined, undefined, query, undefined)
                }

        */
return <section className="welcome">
        
        <h1 className="welcome__welcome">Welcome {userName}!</h1>

        <input className="welcome__input" type="search" name="search" placeholder="search pet"/> 
        <button className="welcome__search" onClick={()=>{setWelcomeView('search-pet')}}>SEARCH PET</button>
        
        <button className="welcome__create" onClick={()=>{setWelcomeView('create-pet')}}>CREATE NEW PET</button>
        {welcomeView === 'welcome' && <div><img className="welcome__img"src="paw.jpg"/></div>}
        
        {welcomeView === 'search-pet' && <SearchPet />}
        {welcomeView === 'create-pet' && <CreatePet onCreatePet={onCreatePet}/>}
</section>



}

export default Welcome