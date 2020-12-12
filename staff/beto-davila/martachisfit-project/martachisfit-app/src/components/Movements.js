import { Feedback } from '.'
import Select from 'react-select'
import './styles/Movements.sass'

export default function Movements({ movements, error, onMuscularGroup }) {

    const options = [
        { label: 'Pierna', value: 'pierna' },
        { label: 'Bíceps', value: 'biceps' },
        { label: 'Tríceps', value: 'triceps' },
        { label: 'Hombro', value: 'hombro' },
        { label: 'Abdomen', value: 'abdomen' },
        { label: 'Espalda', value: 'espalda' },
        { label: 'Gemelo', value: 'gemelo' },
        { label: 'Pectoral', value: 'pectoral' },
    ]

    return (
        <section className="movements">
            <h3>Escoge un grupo muscular</h3>
            <Select className="movements__select" options={options} onChange={onMuscularGroup} />

            <div className="movements__group">
                {movements && movements.map(({ id, name, urlPathImg }) => <div className="movements__group-movement" key={id} >
                    {name && <h3 className="movements__group-name">{name}</h3>}
                    {urlPathImg && <img className="movements__group-img" src={urlPathImg} alt="movement-img" />}
                </div>)}
            </div>
            {error && <Feedback error={error}></Feedback>}
        </section>
    )
}

{/* <select name="group">
    <option value="" disabled selected style={{ display: "none" }}>Grupo</option>
    <option value="pierna">Pierna</option>
    <option value="biceps">Bíceps</option>
    <option value="triceps">Tríceps</option>
    <option value="espalda">Espalda</option>
    <option value="pectoral">Pectoral</option>
    <option value="hombro">Hombro</option>
    <option value="gemelo">Gemelo</option>
    <option value="abdomen">Abdomen</option>
</select> */}