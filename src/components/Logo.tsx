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
    white: 'text-white/40',
    black: 'text-black/40',
    indigo: 'text-[#71717A]'
  };

  return (
    <div className="inline-flex flex-col items-start">
      <div className={`${sizes[size]} ${colors[variant]} tracking-tight`} style={{ fontFamily: "'EB Garamond', 'Adobe Garamond Pro', serif" }}>
        <span style={{ fontWeight: 600 }}>Code</span>
        <span className="mx-1" style={{ fontWeight: 300, fontStyle: 'italic' }}>&</span>
        <span style={{ fontWeight: 600 }}>Capital</span>
      </div>
      {showTagline && (
        <p className={`text-[8px] mt-24 ${taglineColors[variant]}`} style={{ 
          fontFamily: "'EB Garamond', 'Adobe Garamond Pro', serif",
          fontWeight: 300,
          letterSpacing: '0.05em',
          opacity: 0.5
        }}>
          Where ideas become leverage
        </p>
      )}
    </div>
  );
}

// LOGOMARK: Typographic ampersand from the wordmark
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

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill={bgColors[variant]} />
      
      {/* Cropped ampersand from wordmark - inevitable, typographic */}
      <text
        x="50"
        y="68"
        fontSize="72"
        fontWeight="300"
        fontFamily="'EB Garamond', serif"
        fontStyle="italic"
        textAnchor="middle"
        fill={fgColors[variant]}
      >
        &
      </text>
    </svg>
  );
}

// ICON: Single typographic C - boring, obvious, inevitable
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

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill={bgColor[variant]} />
      
      {/* Single serif C - typographic, boring, scales to favicon */}
      <text
        x="50"
        y="72"
        fontSize="64"
        fontWeight="600"
        fontFamily="'EB Garamond', serif"
        textAnchor="middle"
        fill={fgColor[variant]}
      >
        C
      </text>
    </svg>
  );
}

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
      <span className={`mx-0.5 ${ampersandColors[variant]}`}>&</span>
      <span>C</span>
    </div>
  );
}