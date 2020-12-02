ReactDOM.render(<Results items={[
    { title: 'Pepito Grillo', preview: 'here goes a preview....', url: 'https://pepito.com'},
    { title: 'Jiminy Cricket', preview: 'here goes another preview....', url: 'https://jimmy.com'},
    { title: 'Pepephone', preview: 'here goes yet another preview...', url: 'https://pepephone.com'}
]} />, document.getElementById('root'));

// Demo to show the behaviour of 'Results' compo when receiving the result from searchInGoogle