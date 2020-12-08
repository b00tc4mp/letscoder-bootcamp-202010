import { Layout, SaveProducts, MyProducts } from '../components'
import '../components/Home.sass'
import { useState } from 'react'


const Home = () => {
    const [view, setView] = useState()
    return <Layout>
        <div className="home">
            {view === undefined && <button onClick={() => setView('save-product')}>Create a product</button>}
            {view === 'save-product' && <SaveProducts onExit={() => setView()}/>}
            {view === undefined && <button onClick={() => setView('my-products')}>My Products</button>}
            {view === 'my-products' && <MyProducts onExit={() => setView()}/>}
        </div>
    </Layout>
}



export default Home