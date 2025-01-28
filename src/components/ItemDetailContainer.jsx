import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import { getOneProduct } from "../firebase/database"
function ItemDetailContainer(){
    const [item, setItem]=useState()
    const {id}=useParams()
    useEffect(()=>{

    getOneProduct(id)
        .then(res=>setItem(res))
    },[id])
    
    return(
        <ItemDetail item={item} />
    )

}
export default ItemDetailContainer