import { searchUserFullname } from '../logic'
import {  useState } from 'react'
import './SearchUser.sass'


function SearchUser() {
    const [results, setResults] = useState()
    let query;

    const handleSearchUser = (query) => {
        searchUserFullname(query, (error, users) => {
            if (error) return alert(error.message)
            if (users) {
                setResults(users)
            }
        })
    }
    const handleOnChange = (event) => {
        query = event.target.value
        if(query)
            handleSearchUser(query)
        else
            setResults([])
    } //OPCION QUE SI REFRESCA AUTOMATICAMENTE

    return <>
        <form className="searchUser" onSubmit={(event) => event.preventDefault()}>
            <input
                className="searchUser__input"
                name="query" type="text" placeholder="Search"
                onChange={handleOnChange} />
                {/* onChange={event => (query = event.target.value)} /> OPCION QUE NO REFRESCA AUTOMATICAMENTE*/} 
            <button
                className="searchUser__button"
                // onClick={() => handleSearchUser(query)} OPCION QUE NO REFRESCA AUTOMATICAMENTE
            > 🔍 </button>
            {(results && results.length && <ul className="searchUser__ul">
                {results.map(({ fullname, _id }) => <li key={_id} className="searchUser__li">
                    {fullname && <p className="searchUser__result-name">{fullname}</p>}
                    {_id && <p className="searchUser__result-id">{_id}</p> }
                </li>)}
            </ul>) || ''}
        </form>
    </>

}
export default SearchUser