import { faCartShopping, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import { CartContext, CartType } from "../../CartProvider"
import './ShoppingCart.css'
import products from '../../../Data/Products.json'


const ShoppingCart = () =>{
    const {prods, setProds} = useContext(CartContext) as CartType
    const [panelOpen, setPanelOpen] = useState(false);    
    const cardItems = products.filter(item => prods.includes(item.id))
    return <>
    <div className="shopping-cart">
        <span onClick={() => setPanelOpen(!panelOpen)}><FontAwesomeIcon icon={faCartShopping} size="lg"/></span>
        <div className="cart-badge">{prods?.length}</div>
    </div>
        <div className={`shopping-cart-panel${panelOpen ? ' open' : ''}`}>
            <div>
                {cardItems?.map(item => <div className="cart-item">{item.name} 
                    <div className="cart-item-delete-btn" onClick={() => setProds(prods.filter(p => p !== item.id))}><FontAwesomeIcon icon={faTimes}/></div>
                </div>)}
            </div>
        <div className="purchase-btn" onClick={() => alert("Compra realizada com sucesso :)")}>
        <FontAwesomeIcon icon={faCheck} size="lg"/> Finalizar Compra
        </div>
        </div>
    </>
}

export default ShoppingCart