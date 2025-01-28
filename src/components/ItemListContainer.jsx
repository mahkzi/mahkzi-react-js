import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"
import { getProducts, filterProductsByCategory } from "../firebase/database,js"

function ItemListContainer(){
    const[items, setItems]=useState([])
    const{id}=useParams()
    useEffect(()=>{
        
        getProducts()
        .then(res=>setItems(res))

        filterProductsByCategory(id)
    },[id])

    return(
        <ItemList items={items} />
    )
}
export default ItemListContainer
