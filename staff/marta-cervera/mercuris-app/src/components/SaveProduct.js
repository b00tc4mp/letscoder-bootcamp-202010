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

        onSaveProduct(name, description, price, image.files[0])
        event.target.reset()

    }
    return <main className="save-product">
        <h1 classname="save-product__maintitle">Welcome to the registration product page, {name}</h1>
        <h2 className="save-product__h2">Register your product</h2>
        <form className="save-product__form" onSubmit={handleSubmitProduct}>
            {error&&<Feedback error={error}/>}
            <input name="name" type="text" placeholder="Product Name"></input>
            <textarea className="save-product__textarea"name="description" type="text" placeholder="Description"></textarea>
            <input name="price" type="text" placeholder="Price"></input>
            <input type="file" id="image" name="image" />
            <label htmlFor="image">Photo</label>
            <button>Save</button>

        </form>
    </main>

}

