import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '../UI/Button/Button';
import './Item.css';

export default function Item({ item, onChangeItem, onDeleteItem }) {
  function increaseProgress(e) {
    if (item.current === item.max) return;
    onChangeItem(item.id, item.current + 1);
  }

  function deleteItem(e) {
    e.stopPropagation();
    onDeleteItem(item.id);
  }

  return (
    <li onClick={increaseProgress} className="item">
      <div className="item__header">
        <h2>{item.title}</h2>
        <Button type="button" onClick={deleteItem}>
          &times;
        </Button>
      </div>
      <ProgressBar current={item.current} max={item.max}></ProgressBar>
    </li>
  );
}
