import './SaveProduct.sass'

export default function ({onSaveProduct}) {
    const handleSubmitProduct = event => {
        event.preventDefault()

        let { target: {
            name: { value: name },
            description: { value: description },
            price: { value: price}           

        }} =event

        onSaveProduct(name, description, price)

    }
    return <section className="save-product">
        <form onSubmit={handleSubmitProduct}> 
            <input name="name" type="text" placeholder="Product Name"></input>
            <textarea name="description" type ="text" placeholder="Descrption"></textarea>
            <input name="price" type ="text" placeholder="Price"></input>
            <button>Save</button>

        </form>
    </section>

}