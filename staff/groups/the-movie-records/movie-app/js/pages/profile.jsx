const { Component } = React;

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  
  }
  componentWillMount() {
    retrieveUser(this.props.token, (error, user) => {
        if (error) return alert(error.message)
        this.setState({ user })
        localStorage.setItem("user", JSON.stringify(user))
    })
}

render() {
    return (
      <>
         <h2>Profile</h2>
      <form onSubmit={function (event) {
          event.preventDefault()
          
          props.onModify(state.user.fullname, state.user.image)
          
      }}>
          <input type="text" name="fullname" placeholder="full name" defaultValue={this.state.user  && this.state.user.fullname } />
          <img src =  {this.state.user && this.state.user.image }/>
          <input type="text" name="image" placeholder="image url" defaultValue={this.state.user && this.state.user.image } />  

          <button>Save</button>
      </form>
      </>
    );
  }
  }


