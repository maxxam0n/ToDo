import { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './Form.css';

export default function Form({ onAddItem, items }) {
  const [titleValue, setTitleValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    const isExist = items.some((item) => item.title === titleValue);
    if (titleValue.length && maxValue.length && !isExist) {
      onAddItem(titleValue, Number(maxValue));
    }
  }

  function changeTitle(e) {
    setTitleValue(e.target.value);
  }

  function changeMax(e) {
    console.log(e.target.value);
    const value = e.target.value.replace(/[^0-9]/g, '');
    setMaxValue(value);
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form__input">
        <label>
          <p>Title</p>
          <Input onChange={changeTitle} value={titleValue} type="text" />
        </label>
      </div>
      <div className="form__input">
        <label>
          <p>Max</p>
          <Input onChange={changeMax} value={maxValue} type="text" />
        </label>
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
}
