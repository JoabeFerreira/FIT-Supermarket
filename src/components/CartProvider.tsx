import { createContext, FC, useState } from "react";

export interface CartType{
    prods: number[]
    setProds: (prods: number[]) => void
}

export const CartContext = createContext<CartType | null>(null);

const CartProvider: FC = ({children}) =>{
    const [prods, setCartProds] = useState<number[]>([])
    return <CartContext.Provider value={{prods, setProds: setCartProds}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;
