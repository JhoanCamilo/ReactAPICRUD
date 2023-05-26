/* eslint-disable react/prop-types */
import Styles from "./Card.module.css"

export function Card ({id, image, title, price, description}) {
    const editar = () => {
      console.log("Editando" + id);
    }
        // DELETE request using fetch with async/await
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
            <button href="#" className={`btn btn-primary ${Styles.buttons}`} onClick={editar}>Edit</button>
            <button href="#" className={`btn btn-danger ${Styles.buttons}`} onClick={deletePost}>Delete</button>
          </div>
        </div>
      </div>
    );
}