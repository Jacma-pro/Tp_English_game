export default function PlayVideo({
  fill
}: {
  fill: string;
}) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.9"
        d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM23.5737 41.1346L42.8594 30L23.5737 18.8654L23.5737 41.1346Z"
        fill={fill}
      />
    </svg>
  );
}
