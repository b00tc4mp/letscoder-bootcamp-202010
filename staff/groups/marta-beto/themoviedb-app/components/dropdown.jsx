const Dropdown = () => {
    return <select onGenre="if (this.selectedIndex) showMovies();" name="genres" className="genres" placeholder="Genres...">
    <option value="-1">--</option>
    <option value="Action">Action</option>
    <option value="Animation">Animation</option>
    <option value="Comedy">Comedy</option>
    <option value="Documentary">Documentary</option>
    <option value="Fantasy">Fantasy</option>
    <option value="History">History</option>
    <option value="Horror">Horror</option>
    <option value="Mistery">Mistery</option>
    <option value="Mistery">TV Shows</option>
    <option value="Thriller">Thriller</option>
</select>
}