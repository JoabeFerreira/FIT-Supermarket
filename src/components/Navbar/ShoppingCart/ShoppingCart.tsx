import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { CartContext, CartType } from "../../CartProvider"

const ShoppingCart = () =>{
    const {prods} = useContext(CartContext) as CartType
    console.log('produtos selecionados: ', prods)
    return <>
    <div className="shopping-cart">
        <span><FontAwesomeIcon icon={faCartShopping} size="lg"/></span>
    </div>
    </>
}

export default ShoppingCart