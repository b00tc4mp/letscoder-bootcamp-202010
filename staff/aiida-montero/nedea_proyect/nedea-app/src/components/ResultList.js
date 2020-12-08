import './ResultList.scss'
import Pictogram from './Pictogram'
export default function ResultList ({pictograms}) {
  return <section className = "section_card" >
    {pictograms && pictograms.length ? pictograms.map((pictogram)=>(<> 
      <Pictogram data = {pictogram}/>
     </>)): <p>Not Found Result :(</p>}
      
  </section>
}