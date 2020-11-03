const {Component} = React;

class Home extends Component{
constructor(){
     super()
     this.state = {}
}

componentWillMount() {
    retrieveNewMovies(2,"es", (error,movies) => {
        if (error) return alert(error.message)
        
        this.setState({ movies })
    })
}
/* handleNewMovies = () => {retrieveNewMovies (function(pages, language, callback))} */
render(){
    return <>
        <Header />
        <Discover />
        <Search />
         {this.state.movies && <Slider title = "Cartelera de cine"  items = {this.state.movies}  />} 
        <Slider title = "Novedades" />
        <Footer /> 
        </>



}
}