import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import Styles from './listado.module.css'


export function ListarProductos() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filterSearch, setFilterSearch] = useState('')
    useEffect(()=>{
        gettingProducts()
    },[])
    async function gettingProducts() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data)
        setFilteredProducts(data)
    }
    function filterResults(evt) {
        const searchProduct = evt.target.value
        setFilterSearch(searchProduct)
        console.log(filterSearch);

        const filterArray = products.filter((productos) => productos.title.includes(searchProduct))
        setFilteredProducts(filterArray)
    }
    return(
        <>
        <div className={`${Styles.searchBar}`}>
            <label>Filtrar por palabra clave:</label>
            <input type="text" value={filterSearch} onChange={filterResults}/>
        </div>
        <div className={`${Styles.container}`}>
            {filteredProducts?.slice(0,20).map((product) => (
                <Card
                    key={product.id}
                    id={product.id}
                    image={product.images[0]}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
        </>
    )
}