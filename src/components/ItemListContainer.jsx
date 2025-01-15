import {useState, useEffect} from "react"
import ItemList from "./ItemList"
function ItemListContainer(){
    const[items, setItems]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=>setItems(res))
    },[])
    return(
        <ItemList items={items} />
    )
}
export default ItemListContainer
