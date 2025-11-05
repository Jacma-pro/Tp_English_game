import { useTheme } from "../ThemeProvider/ThemeProvider";

export default function CheckedTransparent({
  disabled = false
}: {
  disabled?: boolean;
}) {
  const theme = useTheme();
  const color = disabled
    ? theme.colors.neutral500
    : theme.colors.secondary950;
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3466_24202)">
        <path
          d="M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z"
          stroke={color}
        />
        <path
          d="M8.57945 13.5796C8.37945 13.5796 8.18945 13.4996 8.04945 13.3596L5.21945 10.5296C4.92945 10.2396 4.92945 9.75961 5.21945 9.46961C5.50945 9.17961 5.98945 9.17961 6.27945 9.46961L8.57945 11.7696L13.7195 6.62961C14.0095 6.33961 14.4895 6.33961 14.7795 6.62961C15.0695 6.91961 15.0695 7.39961 14.7795 7.68961L9.10945 13.3596C8.96945 13.4996 8.77945 13.5796 8.57945 13.5796Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3466_24202">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
