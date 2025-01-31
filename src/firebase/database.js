import { app } from "./configuracion"
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"

const db = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "items"))
    const products = []

    querySnapshot.forEach((doc) => {
      products.push(doc.data())
    })
    return products
}

export const filterProductsByCategory= async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category))

    const querySnapshot = await getDocs(q)
    const products =[]

    querySnapshot.forEach((doc) => {
      products.push(doc.data())
    })
    return products
}

export const getOneProduct = async(id) =>{
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)

if (docSnap.exists()) {
    return docSnap.data()
} else {
 console.log("No such document!")
}
}

  export const newOrder = async(order) =>{
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Su Id de compra es",
          text:docRef.id,
          showConfirmButton: false,
          timer: 3500
        }).then(() => {
         window.location.href = '/'
        })
      } catch (e) {
        Swal.fire({
          title: "Algo salió mal",
          text: "That thing is still around?".e,
          icon: "error"
        });
      }
  }