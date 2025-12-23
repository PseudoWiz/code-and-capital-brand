import { ArrowRight, BookOpen, Calendar, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function ComponentsSection() {
  const [activeTab, setActiveTab] = useState<'buttons' | 'cards' | 'forms' | 'other'>('buttons');

  return (
    <section id="components" className="space-y-16">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono tracking-wider text-[#71717A] mb-4">06 / COMPONENT LIBRARY</p>
          <h2 className="mb-6">Components</h2>
          <p className="text-lg leading-relaxed max-w-3xl text-[#27272A]">
            Our component library showcases Electric Indigo in action. Each component follows our 
            design principles: distinctive without being loud, typography-first, and purposefully simple.
          </p>
        </motion.div>
      </div>

      {/* Component Tabs */}
      <div className="border border-black bg-white">
        <div className="border-b border-black flex overflow-x-auto">
          {(['buttons', 'cards', 'forms', 'other'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 font-mono text-sm border-r border-black transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-black text-white' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-12">
          {/* Buttons Tab */}
          {activeTab === 'buttons' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <div>
                <h3 className="mb-6">Button Hierarchy</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">PRIMARY BUTTON</p>
                    <button className="px-8 py-4 bg-[#E01B3B] text-white border border-black hover:bg-[#c01530] transition-all duration-200 font-mono text-sm shadow-sm hover:shadow-md">
                      Primary Action
                    </button>
                    <p className="text-xs text-gray-600 mt-3">
                      Red background, white text. Used for primary CTAs and most important actions.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">SECONDARY BUTTON</p>
                    <button className="px-8 py-4 bg-white text-black border-2 border-black hover:bg-gray-50 transition-all duration-200 font-mono text-sm">
                      Secondary Action
                    </button>
                    <p className="text-xs text-gray-600 mt-3">
                      White background, black border. Used for secondary or supporting actions.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">TERTIARY / TEXT BUTTON</p>
                    <button className="px-6 py-3 text-[#1B66FF] hover:text-[#1556e0] transition-colors duration-200 font-mono text-sm underline flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-gray-600 mt-3">
                      Text-only with underline. Used for tertiary actions and inline links.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">DISABLED STATE</p>
                    <button className="px-8 py-4 bg-gray-200 text-gray-400 border border-gray-300 cursor-not-allowed font-mono text-sm" disabled>
                      Disabled Action
                    </button>
                    <p className="text-xs text-gray-600 mt-3">
                      Reduced opacity, no hover state, cursor indicates non-interactive state.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h4 className="mb-4">Button Sizing</h4>
                <div className="flex flex-wrap items-end gap-4">
                  <button className="px-6 py-2 bg-[#E01B3B] text-white border border-black font-mono text-xs">
                    Small
                  </button>
                  <button className="px-8 py-3 bg-[#E01B3B] text-white border border-black font-mono text-sm">
                    Medium (Default)
                  </button>
                  <button className="px-10 py-4 bg-[#E01B3B] text-white border border-black font-mono text-base">
                    Large
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Cards Tab */}
          {activeTab === 'cards' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <div>
                <h3 className="mb-6">Card Patterns</h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">ARTICLE CARD</p>
                    <div className="border border-black bg-white p-8 max-w-2xl">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-16 h-16 bg-[#E01B3B] border border-black flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-mono text-gray-600 mb-2">FEATURED ARTICLE</p>
                          <h3 className="mb-3">Building Better Editorial Experiences</h3>
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                            Exploring the intersection of print design principles and modern web 
                            technologies to create engaging reading experiences.
                          </p>
                          <div className="flex items-center gap-4 text-xs font-mono text-gray-600">
                            <span className="flex items-center gap-2">
                              <Calendar className="w-3 h-3" />
                              Dec 23, 2024
                            </span>
                            <span>8 min read</span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full py-3 bg-[#F6EFED] border-t border-black hover:bg-gray-100 transition-colors text-sm font-mono">
                        READ ARTICLE →
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">SIMPLE CARD</p>
                    <div className="border border-black bg-white p-8 max-w-md">
                      <h4 className="mb-3">Card Title</h4>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        A simple card with clean borders, generous padding, and clear hierarchy. 
                        Perfect for showcasing content modules.
                      </p>
                      <a href="#" className="text-[#1B66FF] text-sm font-mono underline hover:text-[#1556e0]">
                        Learn More →
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">HIGHLIGHTED CARD</p>
                    <div className="border-l-4 border-[#E01B3B] bg-white border border-black p-8 max-w-md">
                      <div className="flex items-start gap-3 mb-3">
                        <AlertCircle className="w-5 h-5 text-[#E01B3B] flex-shrink-0 mt-0.5" />
                        <h4>Important Information</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Use the left accent border to draw attention to important cards, 
                        warnings, or featured content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Forms Tab */}
          {activeTab === 'forms' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <div>
                <h3 className="mb-6">Form Elements</h3>
                
                <div className="space-y-8 max-w-xl">
                  <div>
                    <label className="block text-sm font-mono text-gray-700 mb-2">
                      TEXT INPUT
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#1B66FF] focus:border-transparent transition-all"
                    />
                    <p className="text-xs text-gray-500 mt-2">Helper text goes here</p>
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-gray-700 mb-2">
                      TEXTAREA
                    </label>
                    <textarea
                      placeholder="Enter your message"
                      rows={4}
                      className="w-full px-4 py-3 border border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#1B66FF] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-gray-700 mb-2">
                      SELECT DROPDOWN
                    </label>
                    <select className="w-full px-4 py-3 border border-black bg-white focus:outline-none focus:ring-2 focus:ring-[#1B66FF] focus:border-transparent transition-all appearance-none">
                      <option>Choose an option</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 border-2 border-black" />
                      <span className="text-sm group-hover:text-gray-700">Checkbox option one</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 border-2 border-black" />
                      <span className="text-sm group-hover:text-gray-700">Checkbox option two</span>
                    </label>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="radio" className="w-5 h-5 border-2 border-black" />
                      <span className="text-sm group-hover:text-gray-700">Radio option one</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="radio" className="w-5 h-5 border-2 border-black" />
                      <span className="text-sm group-hover:text-gray-700">Radio option two</span>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Tab */}
          {activeTab === 'other' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <div>
                <h3 className="mb-6">Typography Elements</h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">PULL QUOTE</p>
                    <blockquote className="border-l-4 border-[#E01B3B] pl-8 py-4">
                      <p className="text-2xl italic mb-3 leading-tight">
                        "Design is not just what it looks like and feels like. Design is how it works."
                      </p>
                      <cite className="text-sm text-gray-600 not-italic">— Steve Jobs</cite>
                    </blockquote>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">CODE BLOCK</p>
                    <pre className="bg-black text-white p-6 font-mono text-sm overflow-x-auto border border-black">
                      <code>{`function greet(name: string) {\n  console.log(\`Hello, \${name}!\`);\n  return true;\n}`}</code>
                    </pre>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">INLINE CODE</p>
                    <p>
                      Use the <code className="px-2 py-1 bg-gray-100 border border-gray-300 font-mono text-sm">className</code> prop 
                      to apply custom styles.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">DIVIDERS</p>
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm mb-3">Standard divider</p>
                        <hr className="border-t border-gray-200" />
                      </div>
                      <div>
                        <p className="text-sm mb-3">Thick divider</p>
                        <hr className="border-t-2 border-black" />
                      </div>
                      <div>
                        <p className="text-sm mb-3">Accent divider</p>
                        <hr className="border-t-2 border-[#E01B3B]" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gray-600 mb-4">BADGES & LABELS</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-[#E01B3B] text-white text-xs font-mono">FEATURED</span>
                      <span className="px-3 py-1 bg-black text-white text-xs font-mono">NEW</span>
                      <span className="px-3 py-1 bg-white border border-black text-xs font-mono">DRAFT</span>
                      <span className="px-3 py-1 bg-[#1B66FF] text-white text-xs font-mono">PUBLISHED</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Component Guidelines */}
      <motion.div
        className="bg-black text-white p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="mb-8 text-white">Component Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="mb-4 text-white">Consistency</h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Always use existing components when possible. Custom components should follow 
              established patterns, spacing, and styling conventions.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Reuse before creating new</li>
              <li>• Follow spacing scale</li>
              <li>• Maintain typography hierarchy</li>
              <li>• Use brand colors only</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Interactivity</h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              All interactive elements must have hover states, focus states, and appropriate 
              cursor styles. Transitions should be subtle (200-300ms).
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Hover: visual feedback</li>
              <li>• Focus: keyboard accessibility</li>
              <li>• Active: click confirmation</li>
              <li>• Disabled: clear indication</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Accessibility</h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Components must be keyboard accessible, have proper ARIA labels, and maintain 
              sufficient color contrast (WCAG AA minimum).
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Semantic HTML elements</li>
              <li>• ARIA labels where needed</li>
              <li>• Keyboard navigation support</li>
              <li>• 4.5:1 contrast minimum</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Responsive Behavior</h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Components should adapt gracefully to different screen sizes. Test on mobile, 
              tablet, and desktop viewports.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Mobile-first approach</li>
              <li>• Touch targets 44px min</li>
              <li>• Stack on small screens</li>
              <li>• Scale typography appropriately</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}