import './ResultList.scss'
import Pictogram from './Pictogram'
export default function ResultList ({pictograms, likedPictograms}) {
  return <section className = "section_card" >
    {pictograms && pictograms.length ? pictograms.map((pictogram)=> {
      debugger
      return (<> 
      <Pictogram data = {pictogram} likedPictograms = {likedPictograms}/>
     </>)}): <p>Not Found Result :(</p>}
      
  </section>
}