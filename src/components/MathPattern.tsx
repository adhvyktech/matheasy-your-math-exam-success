/** SVG math-themed background pattern for hero/sections */
const MathPattern = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="math-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="60" y2="0" stroke="currentColor" strokeWidth="0.3" opacity="0.12" />
        <line x1="0" y1="0" x2="0" y2="60" stroke="currentColor" strokeWidth="0.3" opacity="0.12" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#math-grid)" />
    {/* Scattered math symbols */}
    <g fill="currentColor" opacity="0.07" fontSize="18" fontFamily="serif">
      <text x="8%" y="18%">∫</text>
      <text x="22%" y="42%">π</text>
      <text x="75%" y="15%">Σ</text>
      <text x="88%" y="55%">∞</text>
      <text x="45%" y="80%">√</text>
      <text x="65%" y="35%">Δ</text>
      <text x="12%" y="72%">θ</text>
      <text x="82%" y="82%">λ</text>
      <text x="35%" y="20%">∂</text>
      <text x="55%" y="60%">∇</text>
      <text x="92%" y="30%">α</text>
      <text x="5%" y="50%">β</text>
    </g>
    {/* Geometric shapes */}
    <g stroke="currentColor" fill="none" opacity="0.06" strokeWidth="0.8">
      <circle cx="20%" cy="30%" r="25" />
      <rect x="70%" y="65%" width="40" height="40" rx="2" />
      <polygon points="150,75 175,120 125,120" />
      <line x1="60%" y1="10%" x2="80%" y2="25%" strokeDasharray="4 4" />
      <line x1="30%" y1="85%" x2="50%" y2="70%" strokeDasharray="4 4" />
    </g>
  </svg>
);

export default MathPattern;
