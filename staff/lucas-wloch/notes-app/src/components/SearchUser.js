import { searchUserFullname, followUser } from '../logic'
import { useState } from 'react'
import './SearchUser.sass'


function SearchUser() {
    const [results, setResults] = useState()
    const [lastQuery, setLastQuery] = useState()
    let query;

    const handleSearchUser = (query) => {
        const { token } = sessionStorage
        searchUserFullname(token, query, (error, users) => {
            if (error) return alert(error.message)
            if (users) {
                setResults(users)
            }
        })
    }

    const handleFollowUser = (followId) => {
        const { token } = sessionStorage
        followUser(token, followId, error => {
            if (error) return alert(error.message)

            handleSearchUser(lastQuery)
        })
    }

    const handleOnChange = (event) => {
        query = event.target.value
        setLastQuery(query)
        if (query)
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
                {results.map(({ fullname, id, followed }) => <li key={id} className="searchUser__li">
                    {fullname && <p className="searchUser__result-name">{fullname}</p>}
                    {id && <p className="searchUser__result-id">{id}</p>}
                    <button onClick={event => {
                        event.stopPropagation()
                        handleFollowUser(id)
                    }}>{followed ? 'following' : 'follow'}</button>
                </li>)}
            </ul>) || ''}
        </form>
    </>

}
export default SearchUser