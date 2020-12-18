import "./SearchPets.sass";
import PetResults from "./PetResults";
import { useState } from "react";
import { findPets } from "../logic";
import RetrievePet from "./RetrievePet";

function SearchPets({ onError, onGoToSignIn }) {
  const [pets, setPets] = useState();
  const [petId, setPetId] = useState();
  const [criteria, setCriteria] = useState();
  const [noResult, setNoResult] = useState();
  const [view, setView] = useState()

  const { token } = sessionStorage;
  const handleResults = (event) => {
    event.preventDefault();

    const {
      target: {
        queryPet: { value: queryPet },
        species: { value: species },
        breed: { value: breed },
      },
    } = event;

    if (event.target.queryShelter) {
      var queryShelter = event.target.queryShelter.value;
    }

    if (event.target.city) {
      var city = event.target.city.value;
    }

    handleSearchPets(queryShelter, city, queryPet, species, breed);
  };

  
  const handleGoToRetrieve = (petId) => {
    setPetId(petId)
    setView('retrievePet')
    
  }
  
  const handleSearchPets = (queryShelter, city, queryPet, species, breed) => {
    try {
      findPets(token, queryShelter, city, queryPet, species, breed, (error, pets) => {
          if (error) return alert(error.message);
          
          if (!pets.length) {
            setNoResult(true);
            setTimeout(() => {
              setNoResult(false);
            }, 5000);
          }
          
          setCriteria({ queryShelter, city, queryPet, species, breed });
          setPets(pets);
          setPetId(null);
        }
        );
      } catch (error) {
        alert(error.message);
      }
    };
    
    const handleRefreshResults = () => {
      const { queryShelter, city, queryPet, species, breed } = criteria;
      
  try {
        findPets(token,queryShelter,city,queryPet, species,breed,(error, pets) => {
            if (error) return alert(error.message);
            setView(null)

            if (!pets.length) {
              setNoResult(true);
              setTimeout(() => {
                setNoResult(false);
              }, 5000);
            }
            
            setCriteria({ queryShelter, city, queryPet, species, breed });
            setPets(pets);
            setPetId(null);
          }
          );
        } catch (error) {
          alert(error.message);
        } 

    };


    return (
    <>
      {!token && <button className="search__logout" onClick={ onGoToSignIn }>Go To Sign In if you are a shelter</button>}
      {!token && <h1 className="search__title">Find your pet</h1>}
      <form className="search" onSubmit={handleResults}>
        {!token && (
          <input
            className="search__input"
            type="text"
            name="queryShelter"
            placeholder="shelter: name, email,..."
          />
        )}
        {!token && (
          <input
            className="search__input"
            type="text"
            name="city"
            placeholder="city"
          />
        )}
        <input
          className="search__input"
          type="text"
          name="queryPet"
          placeholder="Pet: name, weight, gender,..."
        />
        <input
          className="search__input"
          type="text"
          name="breed"
          placeholder="breed"
        />
        <select className="search__select" name="species" id="species">
          <option className="search__option" value="dog">
            Dog
          </option>
          <option className="search__option" value="cat">
            Cat
          </option>
        </select>
        <button className="search__button">Search</button>
      </form>

      {noResult && (
        <p className="search__sorry">Sorry, there are no pets for this query</p>
      )}
      {!petId && pets && pets.length > 0 && (
        <PetResults pets={pets} onRetrieve={handleGoToRetrieve} />
      )}
      {!pets && !petId && (
        <div>
          <img className="search__img" src="patitas.jpg" />
        </div>
      )}
      {view === 'retrievePet' && petId &&(<RetrievePet petId={petId} onDeleted={handleRefreshResults} onError={onError} />)}
    </>
  );
}

export default SearchPets;
