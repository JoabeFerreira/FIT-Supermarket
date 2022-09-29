import { Outlet } from "react-router-dom";
import CartProvider from "../CartProvider";
import Navbar from "../Navbar/Navbar";
import './Layout.css'
function Layout() {

    return ( <>
        <CartProvider>
          <Navbar/>
          <div className="content-container">
              <Outlet/>
          </div>
        </CartProvider>
    </> );
}

export default Layout;