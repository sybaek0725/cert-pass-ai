export function CertPassLogo({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cp-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#cc785c" />
          <stop offset="1" stopColor="#e8906f" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="32" height="32" rx="8" fill="url(#cp-grad)" />

      {/* Certificate / document */}
      <rect x="7" y="6" width="13" height="17" rx="2" fill="white" fillOpacity="0.18" />
      <rect x="10" y="10" width="7" height="1.5" rx="0.75" fill="white" fillOpacity="0.9" />
      <rect x="10" y="13.5" width="5" height="1.5" rx="0.75" fill="white" fillOpacity="0.65" />
      <rect x="10" y="17" width="6" height="1.5" rx="0.75" fill="white" fillOpacity="0.65" />

      {/* Pass badge (bottom-right) */}
      <circle cx="23" cy="24" r="5.5" fill="#1a1a1a" />
      <circle cx="23" cy="24" r="4.5" fill="#4ade80" />
      <path
        d="M20.8 24L22.4 25.7L25.2 22.3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
