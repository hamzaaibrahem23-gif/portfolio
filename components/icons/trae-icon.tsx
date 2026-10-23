import type { IconBaseProps } from "react-icons";

// TRAE logo (from LobeHub Icons, MIT) — not available in react-icons, so it lives here
// with the same props as a react-icons component.
export function TraeIcon({ size = "1em", title, color, ...props }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      fillRule="evenodd"
      width={size}
      height={size}
      color={color}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M24 20.541H3.428v-3.426H0V3.4h24V20.54zM3.428 17.115h17.144V6.827H3.428v10.288zm8.573-5.196l-2.425 2.424-2.424-2.424 2.424-2.424 2.425 2.424zm6.857-.001l-2.424 2.423-2.425-2.423 2.425-2.425 2.424 2.425z" />
    </svg>
  );
}
