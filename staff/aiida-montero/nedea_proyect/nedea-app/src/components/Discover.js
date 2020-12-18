import './Discover.scss'

export default function ({onGoToInitial}) {

    return <section className >
   <div class="discover"> 
       <button className = "logo_inicial" onClick = {onGoToInitial}><img className=" discover__image" src="../imagenes/logocentralnedea.png"></img></button>
  </div>
</section>
}