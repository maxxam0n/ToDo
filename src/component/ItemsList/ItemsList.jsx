import Item from '../Item/Item';
import './ItemsList.css';

export default function ItemsList({ items, onChangeItem, onDeleteItem }) {
  return (
    <ul className="list">
      {items.map((item) => {
        return (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onChangeItem={onChangeItem}
            key={item.id}
          ></Item>
        );
      })}
    </ul>
  );
}
