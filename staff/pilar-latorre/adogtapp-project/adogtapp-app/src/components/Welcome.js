import { useState } from 'react'
import SearchPet from './SearchPet'
import CreatePet from './CreatePet'
import './Welcome.sass'

function Welcome({userName}){

        const [welcomeView, setWelcomeView] = useState('welcome')

return <section className="welcome">
        
        <h1 className="welcome__welcome">Welcome {userName}!</h1>

        <input className="welcome__input" type="search" name="search" placeholder="search pet"/> 
        <button className="welcome__search" onClick={()=>{setWelcomeView('search-pet')}}>SEARCH PET</button>
        
        <button className="welcome__create" onClick={()=>{setWelcomeView('create-pet')}}>CREATE NEW PET</button>
        {welcomeView === 'welcome' && <div><img className="welcome__img"src="paw.jpg"/></div>}
        
        {welcomeView === 'search-pet' && <SearchPet />}
        {welcomeView === 'create-pet' && <CreatePet />}
</section>



}

export default Welcome