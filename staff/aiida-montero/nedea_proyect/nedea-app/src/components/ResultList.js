import './ResultList.scss'
import Pictogram from './Pictogram'
export default function ResultList ({pictograms, likedPictograms, token}) {
  return <section className = "section_card" >
    {pictograms && pictograms.length ? pictograms.map((pictogram)=> {
      
      return (<> 
      <Pictogram data = {pictogram} likedPictograms = {likedPictograms} token = {token} />
     </>)}): <p>Not Found Result :(</p>}
      
  </section>
}