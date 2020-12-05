import { useState } from 'react'
import CreatePet from './CreatePet'
import './Welcome.sass'
import SearchPets from './SearchPets'


function Welcome({userName, onCreatePet}){

        const [welcomeView, setWelcomeView] = useState('welcome')

      
return <section className="welcome">
        
        <h1 className="welcome__welcome">Welcome {userName}!</h1>
{/* 
        <input className="welcome__input" type="search" name="search" placeholder="search pet"/>  */}
        <button className="welcome__search" onClick={()=>{setWelcomeView('search-pet')}}>SEARCH PET</button>
        
        <button className="welcome__create" onClick={()=>{setWelcomeView('create-pet')}}>CREATE NEW PET</button>
        {welcomeView === 'welcome' && <div><img className="welcome__img"src="variosperretes4.jpg"/></div>}
        
        {welcomeView === 'search-pet' && <SearchPets />}
        {welcomeView === 'create-pet' && <CreatePet onCreatePet={onCreatePet}/>}
</section>



}

export default Welcome