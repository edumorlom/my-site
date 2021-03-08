export default function ProgressBar(props: {
  text: string;
  percent: number;
  color: string;
}) {
  return (
    <div className="progress-bar-container">
      <svg width={`${props.percent}%`} height="60">
        <g>
          <rect
            className="progress-bar"
            width="100%"
            height="100%"
            rx="12"
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
