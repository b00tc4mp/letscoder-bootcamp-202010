import './SaveProduct.sass'

export default function SaveProduct({ onSaveProduct , name}) {
    const handleSubmitProduct = event => {
        event.preventDefault()

        let { target: {
            name: { value: name },
            description: { value: description },
            price: { value: price }

        } } = event

        onSaveProduct(name, description, price)
        event.target.reset()

    }
    return <section className="save-product">
        <h1>Welcome to the registration product page, {name}</h1>
        <form className="save-product__form" onSubmit={handleSubmitProduct}>
            <input name="name" type="text" placeholder="Product Name"></input>
            <textarea name="description" type="text" placeholder="Description"></textarea>
            <input name="price" type="text" placeholder="Price"></input>
            <button>Save</button>

        </form>
    </section>

}

