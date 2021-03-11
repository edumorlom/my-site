export default function ProgressBar(props: {
  text: string;
  percent: number;
  color: string;
}) {
  return (
    <div className="progress-bar-container">
      <svg width={`${props.percent}%`} height="3.5rem">
        <g>
          <rect
            className="progress-bar"
            style={{height: '100%'}}
            width="100%"
            rx="16"
            fill={props.color}
          />
          <text x="30px" y="60%" fill="white">
            {props.text}
          </text>
        </g>
      </svg>
    </div>
  );
}
