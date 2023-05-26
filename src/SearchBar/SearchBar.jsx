import Styles from './SearchBar.module.css'
export function SearchBar() {
    return(
        <div className={`${Styles.searchBar}`}>
            <label htmlFor="">Filtrar por palabra clave:</label>
            <input type="text"/>
        </div>
    )
}