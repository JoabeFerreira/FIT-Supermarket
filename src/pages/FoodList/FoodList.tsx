import ProductCheckList from "../../components/ProductsCheckList/ProductsCheckList";

function FoodList() {
    const foodList = [
        {id: 1, productGroupId: 1, name: 'Achocolatado'},
        {id: 2, productGroupId: 1, name: 'Açúcar'},
        {id: 3, productGroupId: 1, name: 'Adoçante'}
    ]
    return ( <ProductCheckList listName="Alimentos" productList={foodList} />);
}

export default FoodList;