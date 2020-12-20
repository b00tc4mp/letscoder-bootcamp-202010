import './ResultList.scss'
import Pictogram from './Pictogram'
export default function ResultList ({pictograms, likedPictograms, token, onLikePictogram}) {
  return <section className = "section_card" >
    {pictograms && pictograms.length ? pictograms.map((pictogram)=> {
      
      return (<> 
      <Pictogram data = {pictogram} likedPictograms = {likedPictograms} token = {token} onLikePictogram={onLikePictogram}/>
     </>)}): <p>Not Found Result :(</p>}
      
  </section>
}