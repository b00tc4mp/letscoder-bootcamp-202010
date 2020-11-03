const {Component} = React;

class Home extends Component{
constructor(){
     super()
     this.state = {}
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
/* handleNewMovies = () => {retrieveNewMovies (function(pages, language, callback))} */
render(){
    return <>
        <Header />
        <Discover />
        <Search />
         {this.state.newMovies && <Slider title = "Cartelera de cine"  items = {this.state.newMovies}  />} 
         {this.state.upcomingMovies && <Slider title = "Novedades"  items = {this.state.upcomingMovies}  />} 
        <Footer /> 
        </>



}
}