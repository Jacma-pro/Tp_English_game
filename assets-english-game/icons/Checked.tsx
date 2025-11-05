import { useTheme } from "../ThemeProvider/ThemeProvider";

export default function Checked() {
  const theme = useTheme();
  return (
    <svg
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.358398"
        width="24"
        height="24"
        rx="12"
        fill={theme.colors.primary100}
      />
      <path
        d="M10.511 18.3584C10.2309 18.3584 9.96473 18.2245 9.76863 17.9901L5.80465 13.252C5.39845 12.7665 5.39845 11.9629 5.80465 11.4773C6.21086 10.9918 6.88319 10.9918 7.28939 11.4773L10.511 15.3281L17.7106 6.72254C18.1168 6.23702 18.7891 6.23702 19.1953 6.72254C19.6016 7.20807 19.6016 8.01169 19.1953 8.49722L11.2534 17.9901C11.0573 18.2245 10.7911 18.3584 10.511 18.3584Z"
        fill={theme.colors.primary800}
      />
    </svg>
  );
}
