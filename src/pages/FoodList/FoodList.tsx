import { useMemo } from "react";
import ProductCheckList from "../../components/ProductsCheckList/ProductsCheckList";
import products from '../../Data/Products.json'

function FoodList() {

    const foodList = useMemo(() => products.filter(p => p.productGroupId === 1), [])

    return ( <ProductCheckList listName="Alimentos" productList={foodList} />);
}

export default FoodList;