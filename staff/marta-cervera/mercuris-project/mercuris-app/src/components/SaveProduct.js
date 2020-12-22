import './SaveProduct.sass'
import{ Feedback } from '.'
export default function SaveProduct({ onSaveProduct, name, error }) {
    const handleSubmitProduct = event => {
        event.preventDefault()

        let { target: {
            name: { value: name },
            description: { value: description },
            price: { value: price },
            image
            

        } } = event

        onSaveProduct(name, description, Number(price), image.files[0])
        event.target.reset()

    }
    return <main className="save-product">        
        <h2 className="save-product__h2">Register your product</h2>
        <form className="save-product__form" onSubmit={handleSubmitProduct}>
            {error&&<Feedback error={error}/>}
            <input className="save-product__name"name="name" type="text" placeholder="Product Name"></input>
            <textarea className="save-product__textarea"name="description" type="text" placeholder="Description"></textarea>
            <input className="save-product__price" name="price" type="text" placeholder="Price"></input>
            <input type="file" id="image" name="image" />
            <label htmlFor="image">Photo</label>
            <button className="save-product__btn">Save</button>

        </form>
    </main>

}

