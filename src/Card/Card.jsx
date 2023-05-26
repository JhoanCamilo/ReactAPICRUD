/* eslint-disable react/prop-types */
import Styles from "./Card.module.css"

export function Card ({id, image, title, price, description}) {
    const editar = () => {
      console.log("Editando" + id);
    }
    const borrar = () => {
      console.log("Borrando" + id);
    }
    const idendifier = id;
    return (
      <div className={`card ${Styles.card}`}>
        <img src={image} className={`card-img-top ${Styles.cardImage}`} alt={image}/>
        <div className="card-body">
          <div className={`${Styles.details}`}>
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">{price} $</h5>
          </div>
          
          <p className={`card-text ${Styles.productDesc}`}>{description}</p>
          <div className={`${Styles.actionButtons}`}>
            <button href="#" className={`btn btn-primary ${Styles.buttons}`} onClick={editar}>Edit</button>
            <button href="#" className={`btn btn-danger ${Styles.buttons}`} onClick={borrar}>Delete</button>
          </div>
        </div>
      </div>
    );
}