export default function YogaMark({ className = "", color = "currentColor", strokeWidth = 1.4 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="100" cy="46" r="16" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M100 62 L100 108 M100 78 C 70 88, 48 112, 40 150 M100 78 C 130 88, 152 112, 160 150 M100 108 C 84 128, 74 150, 70 172 M100 108 C 116 128, 126 150, 130 172"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M52 150 Q100 190 148 150"
        stroke={color}
        strokeWidth={strokeWidth * 0.7}
        strokeDasharray="1 8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
