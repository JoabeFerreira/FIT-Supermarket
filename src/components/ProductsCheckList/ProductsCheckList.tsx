import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useContext, useState } from "react";
import {CartContext, CartType} from "../CartProvider";
import './ProductsCheckList.css'
interface Product{
    id: number,
    productGroupId: number,
    name: string
}

interface Props{
    listName: string
    productList: Product[] 
}


const Checkbox = (text: any, productId: number) =>{
    const {prods, setProds} = useContext(CartContext) as CartType
    const [checked, setChecked] = useState(false)
    const updateCart = (checked: boolean): void => {
        if(checked){
            setProds([...prods, productId]);
            return;
        }
        setProds(prods.filter(p => p !== productId))
    }
    return (<div className="checkbox" key={productId} onClick={() => {updateCart(!checked); setChecked(!checked)}}>
        <FontAwesomeIcon icon={checked ? faCheckCircle : faCircle}/><p>{text}</p>
    </div>)
}

const ProductCheckList = (props: Props) => {
    return ( <div className="checklist-container">
        {props.productList?.map(p => Checkbox(p.name, p.id))}
    </div> );
}

export default ProductCheckList;