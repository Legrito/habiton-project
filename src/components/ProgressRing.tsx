interface Props {
  value: number;
  maxValue: number;
  size?: number;
  strokeWidth?: number;
  label: string;
}

const ProgressRing = ({
  value,
  maxValue,
  size = 240,
  strokeWidth = 14,
  label,
}: Props) => {
  const normalizedValue = Math.min(Math.max(value, 0), maxValue);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress =
    maxValue === 0 ? 0 : (normalizedValue / maxValue) * circumference;
  const dashOffset = circumference - progress;

  return (
    <div className="progress-ring" role="img" aria-label={label}>
      <svg
        className="progress-ring__svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className="progress-ring__trail"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-ring__value"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <span className="progress-ring__label">{label}</span>
    </div>
  );
};

export default ProgressRing;
