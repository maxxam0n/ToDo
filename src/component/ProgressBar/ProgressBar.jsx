import './ProgressBar.css';

export default function ProgressBar({ current, max }) {
  let bgColor = 'red';
  if ((current / max) * 100 > 25) bgColor = 'yellow';
  if ((current / max) * 100 > 75) bgColor = 'green';

  return (
    <div className="progress">
      <div className="progress__wrap">
        <div
          className={`progress__bar ${bgColor}`}
          style={{ width: (current / max) * 100 + '%' }}
        ></div>
      </div>
      <p>
        {current} → {max}
      </p>
    </div>
  );
}
