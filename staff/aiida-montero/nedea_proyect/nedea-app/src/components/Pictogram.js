import './Pictogram.scss'
const API_URL = process.env.REACT_APP_API_URL
export default function ({data:{id, title, description}}) {
debugger
    return <article className="card">
          <header className="card-header">
            <img
              className="card-header__image"
              src={`${API_URL}/pictograms/${id}/images`} width = "600px"
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
