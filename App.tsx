import { useState } from 'react';
import { NavigationMenu } from './NavigationMenu';
import { LogoSection } from './LogoSection';
import { ComponentsSection } from './ComponentsSection';
import { BrandExport } from './BrandExport';

function App() {
  const [activeSection, setActiveSection] = useState('logo');

  const renderSection = () => {
    switch (activeSection) {
      case 'logo':
        return <LogoSection />;
      case 'components':
        return <ComponentsSection />;
      case 'export':
        return <BrandExport />;
      default:
        return (
          <section className="space-y-16">
            <div>
              <p className="text-xs font-mono tracking-wider text-[#71717A] mb-4">
                {activeSection === 'overview' ? '00' : 
                 activeSection === 'philosophy' ? '01' :
                 activeSection === 'colors' ? '03' :
                 activeSection === 'typography' ? '04' :
                 activeSection === 'spacing' ? '05' :
                 activeSection === 'applications' ? '07' :
                 activeSection === 'motion' ? '08' :
                 activeSection === 'playground' ? '09' : '00'} / {activeSection.toUpperCase()}
              </p>
              <h1 className="mb-6">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
              <p className="text-lg leading-relaxed max-w-3xl text-[#27272A]">
                This section is coming soon.
              </p>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-[#E4E4E7] z-50 h-[73px] flex items-center px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl tracking-tight" style={{ fontFamily: "'EB Garamond', serif" }}>
            Code <span className="italic font-light">&</span> Capital
          </h1>
          <span className="text-xs font-mono text-[#71717A]">Brand Guidelines v2.1</span>
        </div>
      </header>

      {/* Navigation + Content */}
      <div className="flex pt-[73px]">
        <NavigationMenu activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main Content */}
        <main className="flex-1 ml-72 p-16 max-w-7xl" style={{ backgroundColor: '#FFFFFF' }}>
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default App;
