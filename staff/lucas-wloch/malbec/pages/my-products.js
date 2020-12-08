import '../components/MyProducts.sass'
import { useState, useEffect } from 'react'
import { retrieveProducts } from '../logic'
import {  MyProducts, Layout} from '../components'

export default (req, res) => {
    return <Layout>
        <MyProducts/>
    </Layout>

}


