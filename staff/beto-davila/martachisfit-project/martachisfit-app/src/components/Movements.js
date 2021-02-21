import { Feedback } from '.'
import Select from 'react-select'
import './styles/Movements.sass'

export default function Movements({ movements, error, onMuscularGroup, onGoToWorkouts }) {

    const options = [
        { label: 'Pierna', value: 'pierna' },
        { label: 'Bíceps', value: 'biceps' },
        { label: 'Tríceps', value: 'triceps' },
        { label: 'Hombro', value: 'hombro' },
        { label: 'Abdomen', value: 'abdomen' },
        { label: 'Espalda', value: 'espalda' },
        { label: 'Gemelo', value: 'gemelo' },
        { label: 'Pectoral', value: 'pectoral' }
    ]

    return (
        <section className="movements">
            <div className="movements-pseudo">
                <a className="movements__back" href="#" onClick={onGoToWorkouts}>Atrás</a>
                <h3 className="movements__title">Escoge un grupo muscular</h3>
                <Select menuColor='red' className="movements__select" options={options} onChange={onMuscularGroup} />

                <div className="movements__group">
                    {movements && movements.map(({ id, name, urlPathImg }) => <div className="movements__group-movement" key={id}>
                        {name && <h3 className="movements__group-name">{name}</h3>}
                        {urlPathImg && <img className="movements__group-img" src={urlPathImg} alt="movement-img" />}
                    </div>)}
                </div>
                {movements && <p className="movements__delavier">* Para una información completa, el libro de Frederic Delavier es una referencia muy potente en la descripción anatómica de los movimientos. Enlace a su <a href="https://www.amazon.es/MOVIMIENTOS-MUSCULACI%C3%93N-DESCRIPCI%C3%93N-ANAT%C3%93MICA-Deportes/dp/8499100953/ref=sr_1_1?dchild=1&qid=1607789337&refinements=p_27%3AFr%C3%A9d%C3%A9ric+Delavier&s=books&sr=1-1">libro</a></p>}
                {error && <Feedback error={error}></Feedback>}
            </div>
        </section>
    )
}