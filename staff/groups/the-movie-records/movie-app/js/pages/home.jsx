const {Component} = React;

class Home extends Component{
constructor(){
     super()
     this.state = {resultSearch: [], searchUsed: false}
}

componentWillMount() {
    retrieveNewMovies(1,"es", (error,newMovies) => {
        if (error) return alert(error.message)
        
        this.setState({ newMovies })
    })
    retrieveUpcomingMovies(1,"es", (error,upcomingMovies) => {
        if (error) return alert(error.message)
        
        this.setState({ upcomingMovies })
    })
}

 __handleResult = (resultSearch) => {this.setState({resultSearch, searchUsed: true})}
 __renderResult (){
     return this.state.resultSearch.results.length === 0 ? <p>no result</p> : <ResultList movies = {this.state.resultSearch.results} />
 }
/* handleNewMovies = () => {retrieveNewMovies (function(pages, language, callback))} */
render(){
    return <>
        <Header />
        <Discover />
        <Search  onResult = {this.__handleResult}/>

       
         {this.state.searchUsed ? this.__renderResult(): <p>form unpresend</p>}
         {/* {this.state.newMovies && <Slider title = "Cartelera de cine"  items = {this.state.newMovies}  />} 
         {this.state.upcomingMovies && <Slider title = "Novedades"  items = {this.state.upcomingMovies}  />}  */}
        <Footer /> 
        </>



}
}