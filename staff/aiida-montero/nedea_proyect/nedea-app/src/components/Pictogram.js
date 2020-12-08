import './Pictogram.scss'

export default function ({data:{title, description}}) {

    return <article className="card">
          <header className="card-header">
            <img
              className="card-header__image"
              src="https://previews.123rf.com/images/rondale/rondale1507/rondale150700270/42792510-carta-de-vector-may%C3%BAscula-x-dibujado-a-mano-con-pincel-seco.jpg"
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
     


}
