import {db} from '../firebaseConfig'
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore'

export const getProducts = (typeId) => {
    const productosColeccion = typeId
    ? query(collection(db, 'products'), where('tipo', '==', typeId))
    : collection(db, 'products')

    return getDocs(productosColeccion)
        .then((querySnapshot) => {
            const productosAdaptados = querySnapshot.docs.map(doc => {
                const campos = doc.data()
                return { id: doc.id, ...campos }
            })
            return productosAdaptados
        })
}

export const getProductById = async (productoId) => {
    const productoDoc = doc(db, 'products', productoId);

    try {
        const queryDocumentSnapshot = await getDoc(productoDoc);
        const campos = queryDocumentSnapshot.data();
        const productoAdaptado = { id: queryDocumentSnapshot.id, ...campos };

        return productoAdaptado;
    } catch {
        console.error(`Error fetching product ${productoId}:`, error);
        throw error;
    }
}