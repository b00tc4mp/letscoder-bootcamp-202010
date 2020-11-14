class App extends Component {
  constructor(){
      super()

      const{ cookiesAccepted } = state

      this.state = {cookiesAccepted}

  }

  handleAcceptCookies = () =>{
     acceptCookies(error => {
        if (error) return alert (error)
        
        this.setState({cookiesAccepted: true })

     })
  }


  render(){
   const {state: {cookiesAccepted}, handleAcceptCookies } = this

   return<> 
   {!cookiesAccepted && <AcceptCookies onAccept = {handleAcceptCookies} />}

   </>

  }
}

ReactDOM.render(<App />, document.getElementById('root'))