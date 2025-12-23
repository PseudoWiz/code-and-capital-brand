import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Copy, Check } from 'lucide-react';
import { Logo, LogoMark, LogoIcon, LogoMinimal, LogoFavicon } from './Logo';

export function LogoSection() {
  const [copiedText, setCopiedText] = useState<string>('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <section className="space-y-16">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono tracking-wider text-[#71717A] mb-4">02 / LOGO & IDENTITY</p>
          <h1 className="mb-6">Logo System</h1>
          <p className="text-lg leading-relaxed max-w-3xl text-[#27272A]">
            The Code & Capital logo embodies our brand essence: the intersection of technology and 
            business. Refined typography meets electric indigo—creating an identity that's both 
            timeless and unmistakably modern.
          </p>
        </motion.div>
      </div>

      {/* Primary Logo */}
      <div>
        <h2 className="mb-8">Primary Logotype</h2>
        <motion.div
          className="border border-[#E4E4E7] bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="p-20 flex items-center justify-center bg-white">
            <Logo variant="primary" size="xl" />
          </div>
          <div className="border-t border-[#E4E4E7] p-8 bg-gray-50">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-2">TYPEFACE</p>
                <p className="text-sm">Adobe Garamond Pro</p>
                <p className="text-xs text-[#71717A] mt-1">Semibold 600 / Light 300 italic</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-2">CONSTRUCTION</p>
                <p className="text-sm">Code & Capital</p>
                <p className="text-xs text-[#71717A] mt-1">Ampersand in light italic</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-2">TRACKING</p>
                <p className="text-sm">-0.02em (tight)</p>
                <p className="text-xs text-[#71717A] mt-1">Optical refinement</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Logo Variations Grid */}
      <div>
        <h2 className="mb-8">Logo Variations</h2>
        <div className="grid md:grid-cols-2 gap-1 bg-[#09090B] p-1">
          {/* Black on White */}
          <motion.div
            className="bg-white p-16 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Logo variant="black" size="lg" />
            <p className="text-xs font-mono text-[#71717A] mt-8">PRIMARY / LIGHT BACKGROUNDS</p>
          </motion.div>

          {/* White on Indigo */}
          <motion.div
            className="bg-[#4338CA] p-16 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Logo variant="white" size="lg" />
            <p className="text-xs font-mono text-white/70 mt-8">INDIGO BACKGROUND</p>
          </motion.div>

          {/* White on Black */}
          <motion.div
            className="bg-[#09090B] p-16 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Logo variant="white" size="lg" />
            <p className="text-xs font-mono text-white/70 mt-8">DARK BACKGROUNDS</p>
          </motion.div>

          {/* Indigo on White */}
          <motion.div
            className="bg-white p-16 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Logo variant="indigo" size="lg" />
            <p className="text-xs font-mono text-[#71717A] mt-8">INDIGO ACCENT</p>
          </motion.div>
        </div>
      </div>

      {/* Logomark & Icons */}
      <div>
        <h2 className="mb-8">Logomarks & Icons</h2>
        <p className="text-[#27272A] mb-8 leading-relaxed max-w-2xl">
          Geometric marks designed to work at any size without font dependencies. 
          Each mark is constructed from pure SVG paths for consistent rendering across all contexts.
        </p>

        <div className="grid md:grid-cols-4 gap-1 bg-[#09090B] p-1">
          {/* Square Logomark */}
          <div className="bg-white p-8">
            <div className="flex justify-center mb-6">
              <LogoMark variant="indigo" size={100} />
            </div>
            <p className="text-xs font-mono text-[#71717A] text-center mb-2">AMPERSAND MARK</p>
            <p className="text-xs text-[#71717A] text-center">Social avatars, app icons</p>
          </div>

          {/* Interlocking C Icon */}
          <div className="bg-white p-8">
            <div className="flex justify-center mb-6">
              <LogoIcon variant="indigo" size={100} />
            </div>
            <p className="text-xs font-mono text-[#71717A] text-center mb-2">INTERLOCKING C</p>
            <p className="text-xs text-[#71717A] text-center">Brand marks, signatures</p>
          </div>

          {/* Favicon */}
          <div className="bg-white p-8">
            <div className="flex justify-center items-center mb-6 gap-4">
              <LogoFavicon size={32} />
              <LogoFavicon size={16} />
            </div>
            <p className="text-xs font-mono text-[#71717A] text-center mb-2">FAVICON</p>
            <p className="text-xs text-[#71717A] text-center">Browser tabs, bookmarks</p>
          </div>

          {/* Minimal Mark */}
          <div className="bg-white p-8">
            <div className="flex justify-center mb-6 pt-6">
              <LogoMinimal variant="indigo" size="lg" />
            </div>
            <p className="text-xs font-mono text-[#71717A] text-center mb-2 mt-6">TEXT MINIMAL</p>
            <p className="text-xs text-[#71717A] text-center">Watermarks, inline use</p>
          </div>
        </div>
      </div>

      {/* Logo with Tagline */}
      <div>
        <h2 className="mb-8">Logo with Tagline</h2>
        <motion.div
          className="border border-[#E4E4E7] bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="p-20 flex items-center justify-center">
            <Logo variant="primary" size="xl" showTagline />
          </div>
          <div className="border-t border-[#E4E4E7] p-6 bg-gray-50">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-2">DESIGN RESTRAINT</p>
                <ul className="text-xs text-[#27272A] space-y-1">
                  <li>• Smaller than wordmark</li>
                  <li>• Lighter weight (300)</li>
                  <li>• Reduced tracking</li>
                  <li>• Neutral grey, never indigo</li>
                  <li>• Sentence case (not uppercase)</li>
                  <li>• Generous vertical separation</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-2">PHILOSOPHY</p>
                <p className="text-xs text-[#27272A] leading-relaxed">
                  The tagline is a footnote, not a subtitle. It should be discovered after the wordmark, 
                  not read simultaneously. Optical spacing creates silence—an essential part of editorial 
                  sophistication.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Clear Space & Sizing */}
      <div>
        <h2 className="mb-8">Clear Space & Minimum Size</h2>
        <div className="grid md:grid-cols-2 gap-1 bg-[#09090B] p-1">
          <div className="bg-white p-12">
            <h3 className="mb-6">Clear Space</h3>
            <div className="relative inline-block">
              <Logo variant="black" size="lg" />
              {/* Clear space indicators */}
              <div className="absolute -top-8 -left-8 -right-8 -bottom-8 border-2 border-dashed border-[#4338CA] pointer-events-none" />
              <div className="absolute -top-8 left-0 w-8 h-0.5 bg-[#4338CA]" />
              <div className="absolute -left-8 top-0 w-0.5 h-8 bg-[#4338CA]" />
            </div>
            <p className="text-xs text-[#71717A] mt-8">
              Maintain clear space equal to the height of the "C" on all sides
            </p>
          </div>

          <div className="bg-white p-12">
            <h3 className="mb-6">Minimum Sizes</h3>
            <div className="space-y-6">
              <div>
                <Logo variant="black" size="sm" />
                <p className="text-xs font-mono text-[#71717A] mt-2">MIN: 120px wide (digital)</p>
              </div>
              <div className="pt-4 border-t border-[#E4E4E7]">
                <LogoMinimal variant="black" size="sm" />
                <p className="text-xs font-mono text-[#71717A] mt-2">MIN: 24px (icon/small UI)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div>
        <h2 className="mb-8">Logo Usage Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-1 bg-[#09090B] p-1">
          <div className="bg-white p-10">
            <h3 className="mb-6 text-[#4338CA]">Do's</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-[#4338CA] flex-shrink-0">✓</span>
                <div>
                  <strong>Use approved variations</strong>
                  <p className="text-xs text-[#71717A] mt-1">Stick to the provided logo files and variants</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4338CA] flex-shrink-0">✓</span>
                <div>
                  <strong>Maintain aspect ratio</strong>
                  <p className="text-xs text-[#71717A] mt-1">Never stretch or distort the logo</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4338CA] flex-shrink-0">✓</span>
                <div>
                  <strong>Respect clear space</strong>
                  <p className="text-xs text-[#71717A] mt-1">Keep adequate breathing room around the logo</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4338CA] flex-shrink-0">✓</span>
                <div>
                  <strong>Use high contrast</strong>
                  <p className="text-xs text-[#71717A] mt-1">Ensure logo is clearly visible on background</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#09090B] text-white p-10">
            <h3 className="mb-6 text-white">Don'ts</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-[#71717A] flex-shrink-0">✗</span>
                <div>
                  <strong className="text-white">Don't alter typography</strong>
                  <p className="text-xs text-[#71717A] mt-1">Never change the font or letter spacing</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#71717A] flex-shrink-0">✗</span>
                <div>
                  <strong className="text-white">Don't add effects</strong>
                  <p className="text-xs text-[#71717A] mt-1">No gradients, shadows, outlines, or distortions</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#71717A] flex-shrink-0">✗</span>
                <div>
                  <strong className="text-white">Don't use unapproved colors</strong>
                  <p className="text-xs text-[#71717A] mt-1">Stick to black, white, or electric indigo</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#71717A] flex-shrink-0">✗</span>
                <div>
                  <strong className="text-white">Don't recreate the logo</strong>
                  <p className="text-xs text-[#71717A] mt-1">Always use official logo files</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Incorrect Usage Examples */}
      <div>
        <h2 className="mb-8">Incorrect Usage Examples</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Stretched', transform: 'scaleX(1.5)' },
            { label: 'Wrong Color', color: '#E01B3B' },
            { label: 'Outlined', outline: true },
            { label: 'Low Contrast', bg: '#CCCCCC' }
          ].map((example, i) => (
            <div key={i} className="border-2 border-red-500 bg-white p-8 relative">
              <div 
                className="flex items-center justify-center h-20 mb-4"
                style={{ backgroundColor: example.bg || 'white' }}
              >
                <div
                  style={{
                    transform: example.transform,
                    color: example.color,
                    textShadow: example.outline ? '0 0 0 2px black' : 'none'
                  }}
                >
                  <Logo variant="black" size="sm" />
                </div>
              </div>
              <div className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white flex items-center justify-center text-xs">
                ✗
              </div>
              <p className="text-xs font-mono text-red-600 text-center">{example.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Downloads */}
      <div className="border border-[#4338CA] bg-white p-12">
        <h2 className="mb-6">Download Logo Assets</h2>
        <p className="text-[#27272A] mb-8 leading-relaxed">
          Official logo files in various formats for print, web, and digital applications.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { format: 'SVG', desc: 'Vector (Recommended)', file: 'logo.svg' },
            { format: 'PNG', desc: 'Raster (Web)', file: 'logo.png' },
            { format: 'PDF', desc: 'Print', file: 'logo.pdf' }
          ].map((item, i) => (
            <button
              key={i}
              className="p-6 border border-[#E4E4E7] hover:border-[#4338CA] hover:bg-[#4338CA]/5 transition-all text-left group"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-mono text-sm">{item.format}</p>
                <Download className="w-4 h-4 text-[#71717A] group-hover:text-[#4338CA]" />
              </div>
              <p className="text-xs text-[#71717A]">{item.desc}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 p-6 bg-[#4338CA]/5 border border-[#4338CA]/20">
          <p className="text-xs font-mono text-[#4338CA] mb-2">COMING SOON</p>
          <p className="text-sm text-[#27272A]">
            Full brand asset package including logo variations, favicons, social media kits, 
            and presentation templates.
          </p>
        </div>
      </div>
    </section>
  );
}