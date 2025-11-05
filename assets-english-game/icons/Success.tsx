import { useTheme } from "../ThemeProvider/ThemeProvider";

export default function Success() {
  const theme = useTheme();
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" />
      <path
        d="M10.011 18C9.73087 18 9.46473 17.8661 9.26863 17.6317L5.30465 12.8936C4.89845 12.4081 4.89845 11.6045 5.30465 11.1189C5.71086 10.6334 6.38319 10.6334 6.78939 11.1189L10.011 14.9697L17.2106 6.36414C17.6168 5.87862 18.2891 5.87862 18.6953 6.36414C19.1016 6.84967 19.1016 7.6533 18.6953 8.13882L10.7534 17.6317C10.5573 17.8661 10.2911 18 10.011 18Z"
        fill={theme.colors.ok}
      />
    </svg>
  );
}
