import ShoppingCart from "./ShoppingCart/ShoppingCart"
import './Navbar.css'
import UserOptions from "./UserOptions/UserOptions"
import ProductListSelector from "./ProductListSelector/ProductListSelector";

const Navbar = () =>{
    return (
        <div className="navbar">
            <div style={{display: "flex", alignItems: 'center', marginLeft: '1rem'}}>
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
                    <UserOptions/>

            </div>
        </div>
    ) 
}

export default Navbar