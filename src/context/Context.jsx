import { createContext, useState } from "react";

export const listado = createContext()

export function CrudContext(props) {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [products, setProducts] = useState([])
    async function gettingProducts() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data)
        setFilteredProducts(data)
    }
    return(
        <listado.Provider value={{products, setProducts, gettingProducts, filteredProducts, setFilteredProducts}}> 
            {props.children}
        </listado.Provider>
    )
}