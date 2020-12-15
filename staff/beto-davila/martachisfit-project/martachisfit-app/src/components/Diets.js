import './styles/Diets.sass'

export default function Diets({goal ,onChosenDiet}) {

    return <section className="diets">
        <div className="diets-pseudo">
        <h3 className="diets__title"> Según tu objetivo de <span className="diets__calories">{goal} kcal</span>, las opciones que te proponemos son:</h3>
        <div className="diets__container">
        <div onClick={() => onChosenDiet("keto")} className="diets__type">
            <h4 className="diets__type-title"> Dieta "Keto" </h4>
            <p className="diets__description"> Una dieta keto es una dieta muy baja en carbohidratos, y con mayor contenido de grasa.
                En una dieta keto se comen menos carbohidratos, consumo moderado de proteína y puede que aumente la ingesta de grasa. 
                La reducción de carbohidratos pone al cuerpo en un estado metabólico llamado cetosis, en donde la grasa (de tu cuerpo y de lo que comes) se consume para obtener energía. 
            </p>
        </div>

        <div onClick={() => onChosenDiet("mediterranean")} className="diets__type">
            <h4 className="diets__type-title"> Dieta estilo Mediterránea </h4>
            <p className="diets__description"> La dieta mediterránea es un tipo de alimentación basado en la cocina tradicional de los países de la ribera del Mediterráneo. 
                Aunque existen muchas definiciones de lo que se considera una dieta mediterránea, normalmente es rica en vegetales, frutas, cereales integrales, legumbres, frutos secos y semillas, y aceite de oliva. 
            </p>
        </div>

        <div onClick={() => onChosenDiet("vegan")} className="diets__type">
            <h4 className="diets__type-title"> Dieta Vegana </h4>
            <p className="diets__description"> La dieta vegana engloba un estilo de vida, que trata de evitar la explotación animal en todas su formas. Si nos ceñimos estrictamente a la manera 
                de alimentarse, la persona vegana sigue una dieta 100% vegetal, es decir, una dieta en la que se excluyen todos los tipos de carne, el pescado y el marisco, los productos lácteos, los huevos y la miel.
            </p>
        </div>
        </div>
        </div>
    </section>
}