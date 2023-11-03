import { useState } from 'react';
import ItemsList from './component/ItemsList/ItemsList';
import Form from './component/Form/Form';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Sport', current: 2, max: 5 },
    { id: 2, title: 'Food', current: 0, max: 4 },
    { id: 3, title: 'Rest 5 min', current: 5, max: 8 },
  ]);

  function changeItem(id, newCurrent) {
    const newItems = items.map((item) => {
      return id !== item.id ? item : { ...item, current: newCurrent };
    });

    setItems(newItems);
  }

  function deleteItem(id) {
    const newItems = items.filter((item) => id !== item.id);
    setItems(newItems);
  }

  function addItem(title, max) {
    const newtems = [...items, { title, max, id: Math.random(), current: 0 }];
    setItems(newtems);
  }

  return (
    <>
      <Form items={items} onAddItem={addItem}></Form>
      <ItemsList
        items={items}
        onDeleteItem={deleteItem}
        onChangeItem={changeItem}
      ></ItemsList>
    </>
  );
}

export default App;
