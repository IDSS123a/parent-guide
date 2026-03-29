import React from 'react';
import { GuideSection } from '../data/types';
import { Search, ChevronRight, X, Download } from 'lucide-react';

interface SidebarProps {
  sections: GuideSection[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
  searchQuery,
  onSearchChange,
  isOpen,
  onClose
}) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out flex flex-col print:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-idss-blue text-white">
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded p-1 flex items-center justify-center">
              <img src="https://i.postimg.cc/KcJxyzT5/IDSS-Logo-RGB-Primarna-verzija.png" alt="IDSS Logo" className="h-8 object-contain" referrerPolicy="no-referrer" />
            </div>
            <h1 className="font-bold text-white text-lg m-0">Parent Guide</h1>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 text-white/80 hover:bg-white/10 rounded-md" aria-label="Close sidebar">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search guide..."
              aria-label="Search guide"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-idss-gold focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-idss-gold transition-colors"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-1" role="menu" aria-label="Sidebar Navigation">
          {sections.map((section, index) => {
            const isActive = activeSectionId === section.id;
            return (
              <button
                key={section.id}
                id={`sidebar-btn-${index}`}
                role="menuitem"
                tabIndex={0}
                onClick={() => {
                  onSelectSection(section.id);
                  onClose();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextBtn = document.getElementById(`sidebar-btn-${index + 1}`);
                    nextBtn?.focus();
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevBtn = document.getElementById(`sidebar-btn-${index - 1}`);
                    prevBtn?.focus();
                  } else if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectSection(section.id);
                    onClose();
                  }
                }}
                className={`
                  w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left focus:outline-none focus:ring-2 focus:ring-idss-gold focus:ring-offset-1
                  ${isActive 
                    ? 'bg-blue-50 text-idss-blue border-l-4 border-idss-gold' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent'
                  }
                `}
              >
                <span className="truncate pr-2">{section.title}</span>
                {isActive && <ChevronRight size={16} className="text-idss-gold flex-shrink-0" />}
              </button>
            );
          })}
          
          {sections.length === 0 && (
            <div className="text-center py-8 text-gray-500 text-sm">
              No sections found matching your search.
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-4">
          <a 
            href="https://drive.google.com/file/d/1OMVK16ixqWNhEwzc-02gF4a6hPWb5BMd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-idss-blue hover:bg-idss-blue-hover text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-idss-gold focus:ring-offset-1"
          >
            <Download size={16} />
            <span>Download PDF</span>
          </a>
          <p className="text-xs text-gray-500 text-center">
            Internationale Deutsche Schule Sarajevo<br/>
            2026/2027 Academic Year
          </p>
        </div>
      </div>
    </>
  );
};
