import React, { useEffect, useRef } from 'react';
import { GuideSection } from '../data/types';
import { Menu, ChevronLeft, ChevronRight, Printer } from 'lucide-react';

interface ContentAreaProps {
  section: GuideSection;
  onOpenSidebar: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const ContentArea: React.FC<ContentAreaProps> = ({
  section,
  onOpenSidebar,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top when section changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo(0, 0);
    }
  }, [section.id]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white lg:pl-80 print:pl-0 print:h-auto print:overflow-visible print:block">
      {/* Header */}
      <header className="flex-shrink-0 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between sticky top-0 z-30 print:hidden">
        <div className="flex items-center">
          <button
            onClick={onOpenSidebar}
            className="lg:hidden p-2 -ml-2 mr-2 text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-idss-blue"
          >
            <span className="sr-only">Open sidebar</span>
            <Menu size={24} />
          </button>
          
          <div className="flex items-center text-sm text-gray-500 font-medium">
            <span className="hidden sm:inline">Parent Guide 2026/2027</span>
            <span className="hidden sm:inline mx-2">/</span>
            <span className="text-gray-900 truncate max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-lg">
              {section.title}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrint}
            className="p-2 text-gray-500 hover:text-idss-blue hover:bg-blue-50 rounded-md transition-colors"
            title="Print this section"
            aria-label="Print this section"
          >
            <Printer size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main ref={contentRef} className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 print:p-0 print:overflow-visible">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pb-6 border-b border-gray-200 print:border-none">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-idss-blue tracking-tight">
              {section.title}
            </h1>
          </div>
          
          <div className="text-gray-700 print:text-black leading-relaxed">
            {section.content}
          </div>
          
          {/* Navigation Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between print:hidden">
            <button
              onClick={onPrevious}
              disabled={!hasPrevious}
              className={`
                flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${hasPrevious 
                  ? 'text-idss-blue bg-blue-50 hover:bg-blue-100' 
                  : 'text-gray-400 bg-gray-50 cursor-not-allowed'
                }
              `}
            >
              <ChevronLeft size={20} className="mr-1" />
              Previous Section
            </button>
            
            <button
              onClick={onNext}
              disabled={!hasNext}
              className={`
                flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${hasNext 
                  ? 'text-white bg-idss-blue hover:bg-idss-blue-hover shadow-sm' 
                  : 'text-gray-400 bg-gray-50 cursor-not-allowed'
                }
              `}
            >
              Next Section
              <ChevronRight size={20} className="ml-1" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
