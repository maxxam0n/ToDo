import './Button.css';

export default function Button(props) {
  return (
    <button onClick={props.onClick} className="button" type={props.type}>
      {props.children}
    </button>
  );
}
