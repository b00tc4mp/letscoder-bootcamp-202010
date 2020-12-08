import './MyPictograms.scss'
import Pictogram from './Pictogram';

function MyPictograms({ myPictograms }) {
    return (<>
        <section className="my_pictograms">
            {myPictograms && myPictograms.map((pictogram) => (<>
                <Pictogram data={pictogram} />
            </>))}
        </section>
    </>)
};

export default MyPictograms;