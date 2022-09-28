import { faAngleDown, faCarrot, faToiletPaper, faWineBottle, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {Link} from 'react-router-dom'
import './ProductListSelector.css'

interface ProductListItem{
    url: string,
    icon: IconDefinition,
    text: string
}

const productListItems: ProductListItem[] = [
    {url: 'product-list/food', icon: faCarrot, text: 'Alimentos'},
    {url: 'product-list/beverages', icon: faWineBottle, text: 'Bebidas'},
    {url: 'product-list/hygiene', icon: faToiletPaper, text: 'Higiene'},
] 
function ProductListSelector() {
    const [selectorOpen, setSelectorOpen] = useState(false)

    return ( <div className="product-list-container">
        <div onClick={() => setSelectorOpen(!selectorOpen)} className={'product-list-btn'}
        style={{cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
            }}>
            <p>Lista de Produtos</p> <FontAwesomeIcon icon={faAngleDown}/>
        </div>
        <div className={`product-list-selector${selectorOpen ? ' open' : ''}`}>
         {productListItems?.map(item => (
            <Link to={item.url} onClick={() => setSelectorOpen(false)}>
                <div className="product-list-item"><FontAwesomeIcon icon={item.icon}/> <p>{item.text}</p></div>
            </Link>
         ))}
        </div>
    </div> );
}

export default ProductListSelector;