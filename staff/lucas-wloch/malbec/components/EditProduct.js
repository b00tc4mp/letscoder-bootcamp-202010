import { useState } from 'react'
import saveProducts from '../logic/save-products'
import './EditProduct.sass'



const EditProduct = ({ product, onSaved }) => {
    const [success, setSuccess] = useState()


    const normalizeBoolean = value => {
        if (value === 'true') return true
        if (value === 'false') return false

        return undefined
    }


    const handleSubmit = event => {
        event.preventDefault()

        let { target: { name: { value: name }, description: { value: description }, price: { value: price },
            glutenFree: { value: glutenFree }, vegan: { value: vegan }, alergenos: { value: alergenos }, category: { value: category },
            available: { value: available }, image
        } } = event

        glutenFree = normalizeBoolean(glutenFree)
        vegan = normalizeBoolean(vegan)
        available = normalizeBoolean(available)

        alergenos = alergenos.trim()

        const { token } = sessionStorage

        if (name && description && category)
            saveProducts(token, product.id, name, description, price, glutenFree, vegan, alergenos ? alergenos.split(' ') : [], category, available)
                .then(productId => {

                    if (productId && image.files[0])
                        saveProductImage(token, productId, image.files[0])
                            .then(() => {
                                setSuccess(true)

                                setTimeout(() => {
                                    setSuccess(false)
                                }, 4000);

                            })
                            .catch(alert)
                    else {
                        setSuccess(true)

                        setTimeout(() => {
                            setSuccess(false)
                        }, 4000);
                    }
                })
                .catch(alert)


        else return alert('name, description or category is missing')

    }

    return <li className="editProduct" key={product.id} >
        {success && <h1 className="editProduct__title" >OK, Product saved!</h1>}
        <form key={product.id} className="editProduct__form" onSubmit={handleSubmit}>
            <div className="editProduct__div">
                <p>Name:</p>
                <input className="editProduct__inputName" type="text" id="name" name="name" defaultValue={product.name} placeholder="product Name" />
            </div>
            <div>
                <p>Description:</p>
                <textarea className="editProduct__description" type="text" name="description" defaultValue={product.description} placeholder="product Description"></textarea>
            </div>
            <div className="editProduct__div">
                <p>Price:</p>
                <input className="editProduct__inputPrice" type="number" id="price" name="price" defaultValue={product.price} placeholder="product Price" />
            </div>
            <div className="editProduct__div">
                <p>Gluten Free:</p>
                {/* <select className="editProduct__gluten-free" defaultValue={product.glutenFree} name="glutenFree" id="gluten-free">
                    <input type="radio" id="false" name="glutenFree" defaultChecked={product.glutenFree}  value={false} />
                    <label htmlFor="false">false</label>
                    <input type="radio" id="true" name="glutenFree"  defaultChecked={product.glutenFree} value={true} />
                    <label htmlFor="true">true</label>
                </select> */}
                <select className="editProduct__gluten-free" defaultValue={product.glutenFree} name="glutenFree" id="gluten-free">
                    <option className="editProduct__option" value={false} >No</option>
                    <option className="editProduct__option" value={true} >Yes</option>
                </select>
                <p>Vegan:</p>
                <select className="editProduct__vegan" name="vegan" defaultValue={product.vegan} id="vegan">
                    <option className="editProduct__option" value={false}>No</option>
                    <option className="editProduct__option" value={true} >Yes</option>
                </select>
            </div>
            {/* <div className="editProduct__div">
            </div> */}
            <div className="editProduct__div">
                <p>Alergenos:</p>
                <input className="editProduct__inputAlergenos" type="text" id="alergenos" name="alergenos" defaultValue={product.alergenos.join(' ')} placeholder="product Alergenos" />
            </div>
            <div className="editProduct__div">
                <p>Category:</p>
                <select className="editProduct__category" name="category" id="category" defaultValue={product.category}>
                    <option className="editProduct__optionC" value="entrantes-parrilla" >entrantes-parrilla</option>
                    <option className="editProduct__optionC" value="empanadas">empanadas</option>
                    <option className="editProduct__optionC" value="ensaladas" >ensaladas</option>
                    <option className="editProduct__optionC" value="parrilla">parrilla</option>
                    <option className="editProduct__optionC" value="pescados" >pescados</option>
                    <option className="editProduct__optionC" value="otras-sugerencias">otras-sugerencias</option>
                    <option className="editProduct__optionC" value="acompañamientos-guarniciones" >acompañamientos-guarniciones</option>
                    <option className="editProduct__optionC" value="postres">postres</option>
                    <option className="editProduct__optionC" value="aguas-refrescos" >aguas-refrescos</option>
                    <option className="editProduct__optionC" value="vinos">vinos</option>
                    <option className="editProduct__optionC" value="cervezas">cervezas</option>
                </select>
                {/* <div className="editProduct__div"> */}
                <p>Available:</p>
                <select className="editProduct__available" name="available" id="available" defaultValue={product.available}>
                    <option className="editProduct__option" value={true} >Yes</option>
                    <option className="editProduct__option" value={false}  >No</option>
                </select>
                {/* </div> */}
            </div>
            <p>Image:</p>
            <input type="file" id="image" name="image" />

            <button className="editProduct__button">Save</button>

        </form>
    </li>
}
export default EditProduct