import { useState } from "react"
import ShoppingCart from "./ShoppingCart/ShoppingCart"
import './Navbar.css'
import UserOptions from "./UserOptions/UserOptions"
import ProductListSelector from "./ProductListSelector/ProductListSelector";

const Navbar = () =>{
    const [showCart, setShowCart] = useState(true)

    return (
        <div className="navbar">
            <div style={{display: "flex", alignItems: 'center'}}>
                <div className="logo">
                    Preço Baixo
                </div>
                <div style={{marginLeft: '10px'}}>
                    <ProductListSelector/>
                </div>
            </div>
            <div className="user-stuff">
                <div style={{margin: '10px'}}>
                    <ShoppingCart/>
                </div>
                <div style={{marginRight: '10px'}}>
                    <UserOptions/>
                </div>

            </div>
        </div>
    ) 
}

export default Navbar