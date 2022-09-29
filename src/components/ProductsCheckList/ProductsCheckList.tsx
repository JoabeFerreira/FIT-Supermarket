import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useContext, useState } from "react";
import { Product } from "../../Data/ProductModel";
import {CartContext, CartType} from "../CartProvider";
import './ProductsCheckList.css'

interface Props{
    listName: string
    productList: Product[] 
}


const Checkbox = (text: any, productId: number, hasStock: boolean) =>{
    const {prods, setProds} = useContext(CartContext) as CartType
    const checked = prods.includes(productId)
    const updateCart = (checked: boolean): void => {
        if(checked){
            setProds([...prods, productId]);
            return;
        }
        setProds(prods.filter(p => p !== productId))
    }
    return (<div className={`checkbox${checked ? ' checked' : ''}`} key={productId} onClick={() => {hasStock ? updateCart(!checked) : alert("Desculpe, o Produto selecionado encontra-se sem estoque no momento :(");}}>
        <FontAwesomeIcon icon={checked ? faCheckCircle : faCircle}/><p>{text}</p>
    </div>)
}

const ProductCheckList = (props: Props) => {
    return ( <>
    <h1 className="list-name">{props.listName}</h1>
    <div className="checklist-container">
        {props.productList?.map(p => Checkbox(p.name, p.id, p.stock > 0))}
    </div> 
    </>
    );
}

export default ProductCheckList;