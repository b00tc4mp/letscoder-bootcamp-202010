import { Layout, SaveProducts } from '../components'
import '../components/Home.sass'


const Home = () => {

    return <Layout>
        <div className="home">
            <SaveProducts/>
        </div>
    </Layout>
}



export default Home