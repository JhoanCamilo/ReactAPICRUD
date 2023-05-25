import React, { useState } from "react"
import styles from "./Post.module.css"
const API = 'https://api.escuelajs.co/api/v1'

export function Formulario() {
    const productNameRef = React.useRef(null)
    const productPriceRef = React.useRef(null)
    const productDescriptionRef = React.useRef(null)
    const productCategoryRef = React.useRef(null)

    const [postProduct, setPostProduct] = useState([])

    async function PostProduct(urlAPI, datos) {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        };
        const response = await fetch(urlAPI, requestOptions);
        const data = await response.json();
        setPostProduct(data);
        console.log(postProduct);
    }

    function handleSubmit(event) {
        event.preventDefault()
        const productName = productNameRef.current?.value
        const productPrice = productPriceRef.current?.value
        const productDescription = productDescriptionRef.current?.value
        const productCategory = productCategoryRef.current?.value

        var data = {
            "title": productName,
            "price": productPrice,
            "description": productDescription,
            "categoryId": productCategory,
            "images": ["https://placeimg.com/640/480/any"]
        }
        PostProduct(`${API}/products`, data)
    }

    return(
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.container}>
                <h1>Add a new product</h1>
                <div className={styles.dataField}>
                    <label>Product name:</label><br/>
                    <input type="text" name="productName" id="PName" ref={productNameRef}></input>
                </div>
                <div className={styles.dataField}>
                    <label>Product price:</label><br/>
                    <input type="number" name="productPrice" id="PPrice" ref={productPriceRef}></input>
                </div>
                <div className={styles.dataField}>
                    <label>Product description:</label><br/>
                    <input type="text" name="productDesc" id="PDesc" ref={productDescriptionRef}></input>
                </div>
                <div className={styles.dataField}>
                    <label>Product category:</label><br/>
                    <input type="catagory" name="producCategory" id="PCategory" ref={productCategoryRef}></input>
                </div>
                <button type="submit" className={styles.submitBtn}>Add product</button>
            </div>
        </form>
    )
}