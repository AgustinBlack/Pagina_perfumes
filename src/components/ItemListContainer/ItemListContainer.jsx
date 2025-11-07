import ItemList from '../ItemList/ItemList';
import clases from './ItemListContainer.module.css';
import { getProducts } from '../../services/firebase/product.js';
import { useParams } from 'react-router-dom';
import { useAsync } from '../../hooks/useAsync';

const ItemListContainer = () => {
    const { typeId } = useParams();
    const asyncFunction = async () => {
        const products = await getProducts(typeId);
        return products;
    }
    const { data: productos } = useAsync(asyncFunction, [typeId]);

    console.log(productos);
    return (
        <>
            <div>
                <h1>Pagina Pato</h1>
                <ItemList productos={productos} children={'Productos'} />
            </div>
        </>
    )
}

export default ItemListContainer;