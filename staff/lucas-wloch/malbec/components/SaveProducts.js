import saveProducts from "../logic/save-products"
import './SaveProducts.sass'


function SaveProducts({ onSavedProduct }) {
    
    const handleSubmit = event => {
        event.preventDefault()

        let { target: { name: { value: name }, description: { value: description }, price: { value: price },
            glutenFree: { value: glutenFree }, vegan: { value: vegan }, alergenos: { value: alergenos }, category: { value: category },
            available: { value: available }
        } } = event

        glutenFree = normalizeBoolean(glutenFree)
        vegan = normalizeBoolean(vegan)
        available = normalizeBoolean(available)

        alergenos = alergenos.trim()


        if (name && description && category)
            saveProducts(name, description, price, glutenFree, vegan, alergenos ? alergenos.split(' ') : [], category, available, error => {
                if (error) return alert(error)
                
                onSavedProduct()
            })
        else return alert('name, description or category is missing')

    }

    return <>
        <section className="saveProducts" >
            <h1 className="saveProducts__title" >Create your Product</h1>
            <form className="saveProducts__form" onSubmit={handleSubmit}>
                <div className="saveProducts__div">
                    <p>Name:</p>
                    <input className="saveProducts__inputName" type="text" id="name" name="name" placeholder="product Name"  />
                </div>
                <div>
                    <p>Description:</p>
                    <textarea className="saveProducts__description" type="text" name="description" placeholder="product Description"></textarea>
                </div>
                <div className="saveProducts__div">
                    <p>Price:</p>
                    <input className="saveProducts__inputPrice" type="text" id="price" name="price" placeholder="product Price" />
                </div>
                <div className="saveProducts__div">
                    <p>Gluten Free:</p>
                    <select className="saveProducts__gluten-free" name="glutenFree" id="gluten-free">
                        <option className="saveProducts__option" value={false} defaultValue >No</option>
                        <option className="saveProducts__option" value={true} >yes</option>
                    </select>
                    <p>Vegan:</p>
                    <select className="saveProducts__vegan" name="vegan" id="vegan">
                        <option className="saveProducts__option" value="false" defaultValue >No</option>
                        <option className="saveProducts__option" value="true" >Yes</option>
                    </select>
                </div>
                {/* <div className="saveProducts__div">
                </div> */}
                <div className="saveProducts__div">
                    <p>Alergenos:</p>
                    <input className="saveProducts__inputAlergenos" type="text" id="alergenos" name="alergenos" placeholder="product Alergenos" />
                </div>
                <div className="saveProducts__div">
                    <p>Category:</p>
                    <select className="saveProducts__category" name="category" id="category">
                        <option className="saveProducts__optionC" value="entrantes-parrilla" >entrantes-parrilla</option>
                        <option className="saveProducts__optionC" value="empanadas">empanadas</option>
                        <option className="saveProducts__optionC" value="ensaladas" >ensaladas</option>
                        <option className="saveProducts__optionC" value="parrilla">parrilla</option>
                        <option className="saveProducts__optionC" value="pescados" >pescados</option>
                        <option className="saveProducts__optionC" value="otras-sugerencias">otras-sugerencias</option>
                        <option className="saveProducts__optionC" value="acompañamientos-guarniciones" >acompañamientos-guarniciones</option>
                        <option className="saveProducts__optionC" value="postres">postres</option>
                        <option className="saveProducts__optionC" value="aguas-refrescos" >aguas-refrescos</option>
                        <option className="saveProducts__optionC" value="vinos">vinos</option>
                        <option className="saveProducts__optionC" value="cervezas">cervezas</option>
                    </select>
                    {/* <div className="saveProducts__div"> */}
                        <p>Available:</p>
                        <select className="saveProducts__available" name="available" id="available">
                            <option className="saveProducts__option" value={true}  defaultValue>Yes</option>
                            <option className="saveProducts__option" value={false}  >No</option>
                        </select>
                    {/* </div> */}
                </div>

                <button className="saveProducts__button">Send</button>

            </form>
        </section>

    </>

}

export default SaveProducts

