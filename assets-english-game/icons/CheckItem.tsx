interface CheckItemProps {
  checkFill: string;
  roundFill: string;
}

export default function CheckItem({
  checkFill,
  roundFill
}: CheckItemProps) {
  return (
    <svg
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.799805"
        width="24"
        height="24"
        rx="12"
        fill={roundFill}
      />
      <path
        d="M10.8108 18C10.5307 18 10.2645 17.8661 10.0684 17.6317L6.10446 12.8936C5.69825 12.4081 5.69825 11.6045 6.10446 11.1189C6.51066 10.6334 7.183 10.6334 7.5892 11.1189L10.8108 14.9697L18.0104 6.36414C18.4166 5.87862 19.0889 5.87862 19.4952 6.36414C19.9014 6.84967 19.9014 7.6533 19.4952 8.13882L11.5532 17.6317C11.3571 17.8661 11.091 18 10.8108 18Z"
        fill={checkFill}
      />
    </svg>
  );
}
