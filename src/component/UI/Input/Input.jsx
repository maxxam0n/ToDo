import './Input.css';

export default function Input({ value, onChange }) {
  return (
    <input onChange={onChange} value={value} className="input" type="text" />
  );
}
