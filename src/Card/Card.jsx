/* eslint-disable react/prop-types */
import Styles from "./Card.module.css"

export function Card ({image, title, price, description}) {
    
    return (
      <div className={`card ${Styles.card}`}>
        <img src={image} className={`card-img-top ${Styles.cardImage}`} alt={image}/>
        <div className="card-body">
          <div className={`${Styles.details}`}>
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">{price} $</h5>
          </div>
          
          <p className={`card-text ${Styles.productDesc}`}>{description}</p>
          <a href="#" className={`btn btn-primary ${Styles.buttons}`}>Show details</a>
        </div>
      </div>
    );
}