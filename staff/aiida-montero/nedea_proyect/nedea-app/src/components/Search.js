import './Search.scss'

export default function ({onSearchPictograms}) {
      return <div className="search">
        <form onSubmit = {(event) => {
          event.preventDefault()
          onSearchPictograms(event.target.search.value)}} className="search-content">
          <input
            name = "search"
            type="text"
            className="search-content__input"
            placeholder="Encuentra tu pictograma"
          />
          <button type="submit" className="search-content__submit">
            <i className="search-content__icon fa fa-search"></i>
          </button>
        </form>
      </div>
}