/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { guideContent } from './data/guideContent';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { Chatbot } from './components/Chatbot';
import { extractTextFromNode } from './utils/textUtils';

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [activeSectionId, setActiveSectionId] = useState<string>(guideContent[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return guideContent;
    
    const query = searchQuery.toLowerCase();
    return guideContent.filter(section => {
      const titleMatch = section.title.toLowerCase().includes(query);
      const idMatch = section.id.toLowerCase().includes(query);
      const contentText = extractTextFromNode(section.content).toLowerCase();
      const contentMatch = contentText.includes(query);
      
      return titleMatch || idMatch || contentMatch;
    });
  }, [searchQuery]);

  const activeSectionIndex = guideContent.findIndex(s => s.id === activeSectionId);
  const activeSection = guideContent[activeSectionIndex] || guideContent[0];
  
  const hasPrevious = activeSectionIndex > 0;
  const hasNext = activeSectionIndex < guideContent.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      setActiveSectionId(guideContent[activeSectionIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setActiveSectionId(guideContent[activeSectionIndex + 1].id);
    }
  };

  // Global keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowLeft') {
        setActiveSectionId(prevId => {
          const idx = guideContent.findIndex(s => s.id === prevId);
          return idx > 0 ? guideContent[idx - 1].id : prevId;
        });
      } else if (e.key === 'ArrowRight') {
        setActiveSectionId(prevId => {
          const idx = guideContent.findIndex(s => s.id === prevId);
          return idx < guideContent.length - 1 ? guideContent[idx + 1].id : prevId;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {showSplash && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-idss-blue print:hidden">
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
            <img 
              src="https://i.postimg.cc/bN0zFTTs/Cover.jpg" 
              alt="IDSS Parent Guide Cover" 
              className="max-h-[80vh] w-auto object-contain shadow-2xl rounded-lg"
            />
            <button 
              onClick={() => setShowSplash(false)}
              className="mt-8 px-8 py-3 bg-idss-gold hover:bg-idss-gold-hover text-idss-blue font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 text-lg"
            >
              Open Guide
            </button>
          </div>
        </div>
      )}
      
      <div className="flex h-screen overflow-hidden bg-gray-50 font-sans relative print:h-auto print:overflow-visible">
        <Sidebar
          sections={filteredSections}
          activeSectionId={activeSectionId}
          onSelectSection={setActiveSectionId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <ContentArea
          section={activeSection}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
        />

        <Chatbot />
      </div>
    </>
  );
}
