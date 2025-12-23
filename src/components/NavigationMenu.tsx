import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationMenuProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const sections = [
  { id: 'overview', label: 'Overview', number: '00' },
  { id: 'philosophy', label: 'Design Philosophy', number: '01' },
  { id: 'logo', label: 'Logo & Identity', number: '02' },
  { id: 'colors', label: 'Color Palette', number: '03' },
  { id: 'typography', label: 'Typography', number: '04' },
  { id: 'spacing', label: 'Spacing & Layout', number: '05' },
  { id: 'components', label: 'Components', number: '06' },
  { id: 'applications', label: 'Brand Applications', number: '07' },
  { id: 'motion', label: 'Motion System', number: '08' },
  { id: 'playground', label: 'Interactive Playground', number: '09' },
  { id: 'export', label: 'Export & Download', number: '10' },
];

export function NavigationMenu({ activeSection, setActiveSection }: NavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <motion.button 
        className="md:hidden fixed top-24 left-4 z-50 p-3 bg-[#4338CA] text-white border border-[#4338CA] hover:bg-[#312E81] shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Navigation sidebar */}
      <motion.nav 
        className={`
          fixed left-0 top-[73px] h-[calc(100vh-73px)] w-72 bg-white border-r border-black
          transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        initial={false}
      >
        <div className="h-full flex flex-col">
          {/* Navigation Items */}
          <div className="flex-1 p-8 space-y-2 overflow-y-auto">
            <p className="text-xs font-mono tracking-wider text-gray-500 mb-6 px-4">CONTENTS</p>
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-4 text-sm font-mono transition-all duration-200 relative group
                  ${activeSection === section.id 
                    ? 'bg-black text-white' 
                    : 'hover:bg-gray-50 text-gray-900'
                  }
                `}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs ${activeSection === section.id ? 'text-[#4338CA]' : 'text-gray-400'}`}>
                    {section.number}
                  </span>
                  <span>{section.label}</span>
                </div>
                {activeSection === section.id && (
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#4338CA]"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <p className="text-xs font-mono text-gray-600 mb-1">Version 2.0</p>
            <p className="text-xs text-gray-500">Last updated December 2024</p>
          </div>
        </div>
      </motion.nav>
    </>
  );
}