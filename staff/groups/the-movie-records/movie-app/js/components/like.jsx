function Like (props){
    return(
        <button onClick={event => {
            event.stopPropagation()
            
           /*  onLike(id) */
        }}>{like ? '❤️' : '♡'}</button>
    
    )}