import { Outlet } from "react-router-dom";
import CartProvider from "../CartProvider";
import Navbar from "../Navbar/Navbar";

function Layout() {

    return ( <>
        <CartProvider>
          <Navbar/>
          <div style={{marginTop: 'calc(var(--navbar-height) + 1rem)'}}>
              <Outlet/>
          </div>
        </CartProvider>
    </> );
}

export default Layout;