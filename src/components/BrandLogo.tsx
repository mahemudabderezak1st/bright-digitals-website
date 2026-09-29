import React from 'react';

interface BrandLogoProps {
  className?: string;
}

/**
 * Faithful vector recreation of the Bright Digitals "BD" emblem from the brand logo:
 * - Angular geometric "B" on the left with top fin accent
 * - Dynamic curved wing "D" on the right
 * - Electric cyan (#00D2FF / #38BDF8) to Royal Cobalt Blue (#1D4ED8) gradient
 */
export const BrandLogoMark: React.FC<BrandLogoProps> = ({ className = 'w-9 h-9' }) => {
  return (
    <svg
      viewBox="0 0 120 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bright Digitals BD Logo"
    >
      <defs>
        <linearGradient id="bdCyanToRoyal" x1="15" y1="15" x2="95" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="45%" stopColor="#00C2FF" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="bdWingGradient" x1="42" y1="8" x2="105" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="55%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="bdHighlight" x1="18" y1="12" x2="98" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Upper-left diagonal fin above B */}
      <path
        d="M34 12L60 33L53 36L38 21Z"
        fill="url(#bdCyanToRoyal)"
        stroke="url(#bdHighlight)"
        strokeWidth="1.2"
      />

      {/* Left geometric "B" */}
      <path
        d="M20 22L56 39C63 42.5 66 49 62 54.5C59.5 58 55 59.5 50 60C56.5 61 62 64.5 62 71.5C62 79 55 84 45 87L27 94V56L20 22ZM36 39V54H46C50.5 54 53 51.5 53 48C53 44.5 50 42.5 45 40.5L36 39ZM36 63V81L45 78C50 76.2 52.5 73.5 52.5 70C52.5 66 49.5 63 44.5 63H36Z"
        fill="url(#bdCyanToRoyal)"
        stroke="url(#bdHighlight)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Inner vertical bar of "D" */}
      <path
        d="M65 39L74 44V76L65 82V39Z"
        fill="url(#bdCyanToRoyal)"
      />

      {/* Diagonal light slash accent at bottom-middle */}
      <path
        d="M38 96L76 73L72 78L38 96Z"
        fill="#7DD3FC"
        opacity="0.85"
      />

      {/* Sweeping outer "D" wing on the right */}
      <path
        d="M46 7L84 30C101 40.5 106 55 98 70C92 81 78 90 56 100L65 85C79 77.5 87 69 89 59.5C91 49.5 85 40.5 71 31.5L56 22L46 7Z"
        fill="url(#bdWingGradient)"
        stroke="url(#bdHighlight)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
