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
          title:"El ID de su compra es:",
          text: docRef.id,
          confirmButtonText: "Save",
         
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success")
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info")
          }
        });
      } catch (e) {
        console.error("Error adding document: ", e)
      }
  }