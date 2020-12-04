import './ResultList.scss'

export default function ResultList ({pictograms}) {
  return <section >
    {pictograms && pictograms.length ?  pictograms.map(({title,description})=>(<> 
      <article className="card">
          <header className="card-header">
            <img
              className="card-header__image"
              src="https://i.pinimg.com/474x/d4/39/3b/d4393be1766b6b41448a1e2a9722d8e0.jpg"
              height="120"
              alt="Api"
            />
          </header>
          <div className="card-body">
            <h4 className="card-body__title">
              {title}
            </h4>
            <p className="card-body__description">
              {description}
            </p>
          </div>
        </article>
     </>)): <p>No result found :(</p>}
      
  </section>
}