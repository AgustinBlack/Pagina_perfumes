import Item from "../Item/Item";
import clases from './ItemList.module.css';

const ItemList = ({ productos }) => {
    return (
        <div className={clases.divItemList}>
            {
                productos.map(prod => {
                    return (
                        <Item key={prod.id} {...prod} />
                    )
                })
            }
        </div>
    );
}

export default ItemList;