import { useMemo } from "react";
import ProductCheckList from "../../components/ProductsCheckList/ProductsCheckList";
import products from '../../Data/Products.json'

function BeverageList() {
    const hygieneList = useMemo(() => products.filter(p => p.productGroupId === 2), [])

    return ( <ProductCheckList listName="Bebidas" productList={hygieneList} />);
}

export default BeverageList;