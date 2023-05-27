/* eslint-disable react/prop-types */
import Styles from "./Card.module.css"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalFooter, ModalHeader, ModalBody} from "reactstrap"

function ShowModal({id, modalTitle, pPrice}) {
  const productNameRef = React.useRef(null)
  const productPriceRef = React.useRef(null)
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  function handleSubmit(event) {
    event.preventDefault()
    const productName = productNameRef.current?.value
    const productPrice = productPriceRef.current?.value

    var productData = {
        "title": productName,
        "price": productPrice
    }
    updateProduct(productData)
  }

  async function updateProduct(datos) {
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datos)
      };
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, requestOptions);
      const data = await response.json();
      toggle()
  }

  return (
    <>
      <Button color="primary" onClick={toggle} className={`${Styles.modalButton}`}>Editar</Button>
      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Update element {modalTitle}</ModalHeader>
          <ModalBody>
              <form>
                <div className="mb-3">
                  <label className="form-label">Product name</label>
                  <input type="text" className="form-control" id="ProductName" ref={productNameRef} defaultValue={modalTitle}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Product prince</label>
                  <input type="number" className="form-control" id="ProductPrice" ref={productPriceRef} defaultValue={pPrice}/>
                </div>
              </form>
          </ModalBody>
          <ModalFooter>
              <Button color="danger" onClick={toggle}>Cancel</Button>
              <Button color="success" type="submit" onClick={handleSubmit}>Update</Button>
          </ModalFooter>
      </Modal>
    </>
  );
}

export function Card ({id, image, title, price, description}) {
    async function deletePost() {
        await fetch(`https://api.escuelajs.co/api/v1/products/${idendifier}`, { method: 'DELETE' });
        alert('Delete successful');
    }
    const idendifier = id;
    return (
      <div className={`card ${Styles.card}`}>
        <img src={image} className={`card-img-top ${Styles.cardImage}`} alt={image}/>
        <div className="card-body">
          <div className={`${Styles.details}`}>
            <h5 className="card-title">{title}</h5>
          </div>
          
          <p className={`card-text ${Styles.productDesc}`}>{description}</p>
          <h5 className="card-title">{price} $</h5>
          <div className={`${Styles.actionButtons}`}>
            <ShowModal 
              id={id}
              modalTitle={title}
              pPrice={price}
            />
            <button href="#" className={`btn btn-danger ${Styles.buttons}`} onClick={deletePost}>Delete</button>
          </div>
        </div>
      </div>
    );
}