import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Image, Code, Package, Check, ExternalLink } from 'lucide-react';

export function BrandExport() {
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  const toggleAsset = (asset: string) => {
    setSelectedAssets(prev =>
      prev.includes(asset)
        ? prev.filter(a => a !== asset)
        : [...prev, asset]
    );
  };

  const selectAll = () => {
    const all = assetCategories.flatMap(cat => cat.items.map(item => item.id));
    setSelectedAssets(all);
  };

  const deselectAll = () => {
    setSelectedAssets([]);
  };

  const assetCategories = [
    {
      name: 'Logo Files',
      icon: Image,
      items: [
        { id: 'logo-svg', name: 'Logo (SVG)', size: '24 KB', format: 'Vector' },
        { id: 'logo-png-high', name: 'Logo (PNG @3x)', size: '142 KB', format: 'Raster' },
        { id: 'logo-png', name: 'Logo (PNG @1x)', size: '48 KB', format: 'Raster' },
        { id: 'logomark-svg', name: 'Logomark (SVG)', size: '8 KB', format: 'Vector' },
        { id: 'icon-set', name: 'Icon Set (All)', size: '64 KB', format: 'Vector' },
      ]
    },
    {
      name: 'Color System',
      icon: Package,
      items: [
        { id: 'colors-css', name: 'CSS Variables', size: '4 KB', format: 'CSS' },
        { id: 'colors-scss', name: 'SCSS Variables', size: '4 KB', format: 'SCSS' },
        { id: 'colors-js', name: 'JavaScript/JSON', size: '2 KB', format: 'JSON' },
        { id: 'colors-sketch', name: 'Sketch Palette', size: '12 KB', format: 'SKetch' },
        { id: 'colors-figma', name: 'Figma Styles', size: '—', format: 'Link' },
      ]
    },
    {
      name: 'Typography',
      icon: FileText,
      items: [
        { id: 'fonts-garamond', name: 'Adobe Garamond Pro', size: '—', format: 'License' },
        { id: 'fonts-plex', name: 'IBM Plex Mono', size: '256 KB', format: 'Font' },
        { id: 'type-css', name: 'Typography CSS', size: '8 KB', format: 'CSS' },
        { id: 'type-scale', name: 'Type Scale JSON', size: '2 KB', format: 'JSON' },
      ]
    },
    {
      name: 'Templates',
      icon: Code,
      items: [
        { id: 'social-twitter', name: 'Twitter/X Cards', size: '2.4 MB', format: 'PSD/AI' },
        { id: 'social-linkedin', name: 'LinkedIn Cards', size: '2.1 MB', format: 'PSD/AI' },
        { id: 'social-instagram', name: 'Instagram Posts', size: '3.2 MB', format: 'PSD/AI' },
        { id: 'email-template', name: 'Email Newsletter', size: '124 KB', format: 'HTML' },
        { id: 'presentation', name: 'Presentation Deck', size: '8.4 MB', format: 'PPTX' },
      ]
    },
    {
      name: 'Print Materials',
      icon: FileText,
      items: [
        { id: 'print-business-card', name: 'Business Cards', size: '4.2 MB', format: 'AI' },
        { id: 'print-letterhead', name: 'Letterhead', size: '2.8 MB', format: 'AI' },
        { id: 'print-guidelines', name: 'Print Guidelines PDF', size: '1.2 MB', format: 'PDF' },
      ]
    },
    {
      name: 'Documentation',
      icon: FileText,
      items: [
        { id: 'doc-guidelines', name: 'Brand Guidelines (PDF)', size: '4.8 MB', format: 'PDF' },
        { id: 'doc-style-guide', name: 'Style Guide (Interactive)', size: '—', format: 'HTML' },
        { id: 'doc-readme', name: 'README.md', size: '12 KB', format: 'Markdown' },
      ]
    }
  ];

  return (
    <section className="space-y-16">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono tracking-wider text-[#71717A] mb-4">10 / EXPORT & DOWNLOAD</p>
          <h1 className="mb-6">Brand Asset Export</h1>
          <p className="text-lg leading-relaxed max-w-3xl text-[#27272A]">
            Download everything you need to implement the Code & Capital brand. From vector logos 
            to social media templates, print materials, and complete documentation—all optimized 
            and production-ready.
          </p>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={selectAll}
          className="px-6 py-3 bg-[#4338CA] text-white font-mono text-sm hover:bg-[#312E81] transition-colors"
        >
          Select All
        </button>
        <button
          onClick={deselectAll}
          className="px-6 py-3 border border-[#E4E4E7] font-mono text-sm hover:bg-gray-50 transition-colors"
        >
          Deselect All
        </button>
        <button
          disabled={selectedAssets.length === 0}
          className="px-6 py-3 bg-[#09090B] text-white font-mono text-sm hover:bg-[#27272A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download Selected ({selectedAssets.length})
        </button>
      </div>

      {/* Asset Categories */}
      <div className="space-y-6">
        {assetCategories.map((category, i) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-[#E4E4E7] bg-white"
            >
              <div className="p-6 border-b border-[#E4E4E7] flex items-center gap-4 bg-gray-50">
                <Icon className="w-5 h-5 text-[#4338CA]" />
                <h3>{category.name}</h3>
              </div>

              <div className="divide-y divide-[#E4E4E7]">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <input
                        type="checkbox"
                        checked={selectedAssets.includes(item.id)}
                        onChange={() => toggleAsset(item.id)}
                        className="w-5 h-5 border-2 border-[#E4E4E7] cursor-pointer"
                      />
                      <div className="flex-1">
                        <p className="mb-1">{item.name}</p>
                        <div className="flex items-center gap-4 text-xs text-[#71717A]">
                          <span className="font-mono">{item.format}</span>
                          {item.size !== '—' && <span>{item.size}</span>}
                        </div>
                      </div>
                    </div>

                    <button className="p-2 hover:bg-gray-200 transition-colors rounded">
                      {item.format === 'Link' ? (
                        <ExternalLink className="w-4 h-4 text-[#4338CA]" />
                      ) : (
                        <Download className="w-4 h-4 text-[#4338CA]" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Start Package */}
      <div className="bg-[#4338CA] text-white p-12">
        <div className="max-w-3xl">
          <h2 className="mb-6 text-white">Quick Start Package</h2>
          <p className="mb-8 opacity-95 leading-relaxed">
            Not sure what you need? Download the essentials package with everything required 
            to get started: logos, colors, fonts, and basic templates.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-6 border border-white/20">
              <h4 className="mb-4 text-white">Included Files</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  All logo variations (SVG + PNG)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Complete color system (CSS + JSON)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Typography setup & font files
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Social media templates
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Brand guidelines PDF
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 border border-white/20">
              <h4 className="mb-4 text-white">Package Details</h4>
              <div className="space-y-3 text-sm opacity-90">
                <div className="flex justify-between">
                  <span>Total Size:</span>
                  <span className="font-mono">24.8 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>File Count:</span>
                  <span className="font-mono">47 files</span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-mono">ZIP archive</span>
                </div>
                <div className="flex justify-between">
                  <span>License:</span>
                  <span className="font-mono">Full commercial use</span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full md:w-auto px-12 py-4 bg-white text-[#4338CA] font-mono text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-3">
            <Package className="w-5 h-5" />
            Download Quick Start Package
          </button>
        </div>
      </div>

      {/* Code Snippets */}
      <div>
        <h2 className="mb-8">Ready-to-Use Code</h2>
        
        <div className="space-y-6">
          {/* CSS Import */}
          <div className="border border-[#E4E4E7] bg-white">
            <div className="p-6 border-b border-[#E4E4E7] flex items-center justify-between">
              <h4>CSS Variables (Import)</h4>
              <button className="px-4 py-2 text-sm font-mono text-[#4338CA] hover:text-[#312E81]">
                Copy
              </button>
            </div>
            <pre className="p-6 overflow-x-auto bg-gray-50 text-sm font-mono">
{`/* Electric Indigo Theme */
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap');

:root {
  /* Colors */
  --color-indigo: #4338CA;
  --color-indigo-light: #6366F1;
  --color-indigo-dark: #312E81;
  --color-text: #09090B;
  --color-text-secondary: #27272A;
  --color-text-muted: #71717A;
  --color-border: #E4E4E7;
  --color-background: #FFFFFF;
  
  /* Typography */
  --font-serif: 'EB Garamond', 'Adobe Garamond Pro', serif;
  --font-mono: 'IBM Plex Mono', monospace;
}`}
            </pre>
          </div>

          {/* Tailwind Config */}
          <div className="border border-[#E4E4E7] bg-white">
            <div className="p-6 border-b border-[#E4E4E7] flex items-center justify-between">
              <h4>Tailwind Config</h4>
              <button className="px-4 py-2 text-sm font-mono text-[#4338CA] hover:text-[#312E81]">
                Copy
              </button>
            </div>
            <pre className="p-6 overflow-x-auto bg-gray-50 text-sm font-mono">
{`module.exports = {
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: '#4338CA',
          light: '#6366F1',
          dark: '#312E81',
        },
      },
      fontFamily: {
        serif: ['EB Garamond', 'Adobe Garamond Pro', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
}`}
            </pre>
          </div>

          {/* React Component */}
          <div className="border border-[#E4E4E7] bg-white">
            <div className="p-6 border-b border-[#E4E4E7] flex items-center justify-between">
              <h4>React Logo Component</h4>
              <button className="px-4 py-2 text-sm font-mono text-[#4338CA] hover:text-[#312E81]">
                Copy
              </button>
            </div>
            <pre className="p-6 overflow-x-auto bg-gray-50 text-sm font-mono">
{`export function Logo({ size = 'md' }) {
  const sizes = { sm: 'text-xl', md: 'text-2xl', lg: 'text-4xl' };
  
  return (
    <div className={\`\${sizes[size]} tracking-tight\`}
         style={{ fontFamily: "'EB Garamond', serif" }}>
      <span style={{ fontWeight: 600 }}>Code</span>
      <span className="mx-1" style={{ fontWeight: 300, fontStyle: 'italic' }}>&</span>
      <span style={{ fontWeight: 600 }}>Capital</span>
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* License & Usage */}
      <div className="grid md:grid-cols-2 gap-1 bg-[#09090B] p-1">
        <div className="bg-white p-10">
          <h3 className="mb-6">License & Usage Rights</h3>
          <div className="space-y-4 text-sm text-[#27272A]">
            <p>
              <strong>Commercial Use:</strong> Approved for all Code & Capital business activities, 
              marketing materials, and digital properties.
            </p>
            <p>
              <strong>Modifications:</strong> Logo files may not be altered. Color and typography 
              can be adjusted per guidelines.
            </p>
            <p>
              <strong>Third Parties:</strong> Partners and vendors must follow these brand guidelines 
              when representing Code & Capital.
            </p>
            <p>
              <strong>Attribution:</strong> No attribution required when using official brand assets.
            </p>
          </div>
        </div>

        <div className="bg-[#09090B] text-white p-10">
          <h3 className="mb-6 text-white">Need Help?</h3>
          <div className="space-y-4 text-sm opacity-90">
            <p>
              Can't find what you're looking for? Have questions about implementing the brand?
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-[#4338CA]">→</span>
                <span>Email: brand@codeandcapital.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#4338CA]">→</span>
                <span>Documentation: /brand/docs</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#4338CA]">→</span>
                <span>Support: Available 9am-5pm EST</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Version History */}
      <div className="border border-[#E4E4E7] bg-white p-10">
        <h3 className="mb-8">Version History</h3>
        <div className="space-y-6">
          <div className="flex gap-6">
            <div className="w-20 flex-shrink-0">
              <p className="text-xs font-mono text-[#71717A]">v2.0</p>
              <p className="text-xs text-[#71717A]">Current</p>
            </div>
            <div className="flex-1 pb-6 border-b border-[#E4E4E7]">
              <p className="mb-2"><strong>Electric Indigo Launch</strong></p>
              <p className="text-sm text-[#71717A] mb-3">December 23, 2024</p>
              <ul className="space-y-1 text-sm text-[#27272A]">
                <li>• Complete rebrand with Electric Indigo (#4338CA)</li>
                <li>• New logo system with 4 variations</li>
                <li>• Pure white backgrounds, sophisticated neutrals</li>
                <li>• Motion design system with Framer Motion</li>
                <li>• Interactive brand playground</li>
                <li>• Comprehensive application examples</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-20 flex-shrink-0">
              <p className="text-xs font-mono text-[#71717A]">v1.0</p>
            </div>
            <div className="flex-1">
              <p className="mb-2"><strong>Initial Launch</strong></p>
              <p className="text-sm text-[#71717A] mb-3">2024</p>
              <ul className="space-y-1 text-sm text-[#27272A]">
                <li>• Warm cream backgrounds</li>
                <li>• Red and blue accent colors</li>
                <li>• Basic logo and typography system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
