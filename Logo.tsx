interface LogoProps {
  variant?: 'primary' | 'white' | 'black' | 'indigo';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export function Logo({ variant = 'primary', size = 'md', showTagline = false }: LogoProps) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const colors = {
    primary: 'text-[#09090B]',
    white: 'text-white',
    black: 'text-black',
    indigo: 'text-[#4338CA]'
  };

  const taglineColors = {
    primary: 'text-[#71717A]',
    white: 'text-white/60',
    black: 'text-black/50',
    indigo: 'text-[#71717A]'
  };

  return (
    <div className="inline-flex flex-col items-start">
      <div className={`${sizes[size]} ${colors[variant]} tracking-tight`} style={{ fontFamily: "'EB Garamond', 'Adobe Garamond Pro', serif" }}>
        <span style={{ fontWeight: 600 }}>Code</span>
        <span className="mx-1" style={{ fontWeight: 300, fontStyle: 'italic' }}>&amp;</span>
        <span style={{ fontWeight: 600 }}>Capital</span>
      </div>
      {showTagline && (
        <p className={`text-[10px] mt-3 ${taglineColors[variant]}`} style={{ 
          fontFamily: "'EB Garamond', 'Adobe Garamond Pro', serif",
          fontWeight: 400,
          letterSpacing: '0.15em',
          textTransform: 'uppercase'
        }}>
          Where ideas become leverage
        </p>
      )}
    </div>
  );
}

/**
 * LOGOMARK: Geometric ampersand monogram
 * 
 * A stylised ampersand constructed from geometric curves.
 * Works at any size, no font dependency.
 * The form suggests connection, intersection, and flow.
 */
export function LogoMark({ variant = 'primary', size = 40 }: { variant?: 'primary' | 'white' | 'indigo'; size?: number }) {
  const bgColors = {
    primary: '#4338CA',
    white: '#FFFFFF',
    indigo: '#4338CA'
  };

  const fgColors = {
    primary: '#FFFFFF',
    white: '#4338CA',
    indigo: '#FFFFFF'
  };

  const strokeColors = {
    primary: '#FFFFFF',
    white: '#4338CA',
    indigo: '#FFFFFF'
  };

  // Geometric ampersand path - crafted for legibility at small sizes
  // Based on the classic ampersand form: a looping "et" ligature
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill={bgColors[variant]} />
      
      {/* Geometric ampersand - constructed from bezier curves */}
      <path
        d="M65 75 
           C55 75, 48 68, 48 60 
           C48 52, 55 48, 60 44 
           L42 26 
           C38 22, 32 20, 28 24 
           C24 28, 24 34, 28 38 
           C32 42, 38 42, 44 38
           M44 38
           L32 50
           C26 56, 26 66, 32 72
           C38 78, 50 78, 58 70
           L72 56"
        stroke={strokeColors[variant]}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * LOGOICON: Interlocking C monogram
 * 
 * Two C letterforms that interlock/overlap, representing
 * Code & Capital. Pure geometry, favicon-ready.
 */
export function LogoIcon({ variant = 'primary', size = 40 }: { variant?: 'primary' | 'white' | 'indigo'; size?: number }) {
  const bgColor = {
    primary: '#4338CA',
    white: '#FFFFFF',
    indigo: '#4338CA'
  };

  const fgColor = {
    primary: '#FFFFFF',
    white: '#4338CA',
    indigo: '#FFFFFF'
  };

  // Two interlocking C shapes - one for Code, one for Capital
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill={bgColor[variant]} />
      
      {/* First C - representing "Code" */}
      <path
        d="M52 24
           C36 24, 24 36, 24 50
           C24 64, 36 76, 52 76"
        stroke={fgColor[variant]}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Second C - representing "Capital" - offset and inverted */}
      <path
        d="M48 24
           C64 24, 76 36, 76 50
           C76 64, 64 76, 48 76"
        stroke={fgColor[variant]}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

/**
 * LOGOMINIMAL: Text-based C&C shorthand
 * 
 * For inline use where full wordmark is too long.
 * Uses monospace for technical feel.
 */
export function LogoMinimal({ variant = 'primary', size = 'md' }: { variant?: 'primary' | 'white' | 'indigo'; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const colors = {
    primary: 'text-[#09090B]',
    white: 'text-white',
    indigo: 'text-[#4338CA]'
  };

  const ampersandColors = {
    primary: 'text-[#4338CA]',
    white: 'text-white',
    indigo: 'text-[#6366F1]'
  };

  return (
    <div className={`${sizes[size]} ${colors[variant]} tracking-tight font-mono`}>
      <span>C</span>
      <span className={`mx-0.5 ${ampersandColors[variant]}`}>&amp;</span>
      <span>C</span>
    </div>
  );
}

/**
 * FAVICON: Optimised for 16x16 and 32x32 pixel grids
 * 
 * Simplified mark that reads clearly at favicon sizes.
 * Single bold stroke, maximum contrast.
 */
export function LogoFavicon({ size = 32 }: { size?: 16 | 32 | 64 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" fill="#4338CA" />
      
      {/* Simplified double-C for favicon legibility */}
      <path
        d="M17 7
           C11 7, 6 11, 6 16
           C6 21, 11 25, 17 25"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 7
           C21 7, 26 11, 26 16
           C26 21, 21 25, 15 25"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
