import { useState, useEffect, useContext } from "react";
import {listado} from '../context/Context'
import { Card } from "../Card/Card";
import Styles from './listado.module.css'


export function ListarProductos() {
    const {products, filteredProducts, setFilteredProducts, gettingProducts} = useContext(listado)
    const [filterSearch, setFilterSearch] = useState('')
    useEffect(()=>{
        gettingProducts()
    },[])
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