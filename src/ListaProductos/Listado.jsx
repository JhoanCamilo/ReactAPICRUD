import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import Styles from './listado.module.css'
import { SearchBar } from "../SearchBar/SearchBar";


export function ListarProductos() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        componentDidMount()
    },[])
    async function componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data)
    }
    return(
        <>
        <SearchBar/>
        <div className={`${Styles.container}`}>
            {products?.map((product) => (
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