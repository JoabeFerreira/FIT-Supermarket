import { useMemo } from "react";
import ProductCheckList from "../../components/ProductsCheckList/ProductsCheckList";
import products from '../../Data/Products.json'

function HygieneList() {
    const hygieneList = useMemo(() => products.filter(p => p.productGroupId === 3), [])

    return ( <ProductCheckList listName="Higiene" productList={hygieneList} />);
}

export default HygieneList;