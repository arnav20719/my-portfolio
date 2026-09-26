// app/components/ui/CommandPalette.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import { 
  Search, 
  Home, 
  FolderGit2, 
  Briefcase,
  ExternalLink,
  X
} from 'lucide-react';
import { searchItems, SearchItem } from '@/app/lib/searchData';

const getIcon = (category: SearchItem['category']) => {
  switch (category) {
    case 'Navigation':
      return <Home className="w-4 h-4" />;
    case 'Projects':
      return <FolderGit2 className="w-4 h-4" />;
    case 'Experience':
      return <Briefcase className="w-4 h-4" />;
    case 'External':
      return <ExternalLink className="w-4 h-4" />;
    default:
      return <Search className="w-4 h-4" />;
  }
};

const getCategoryIcon = (category: SearchItem['category']) => {
  switch (category) {
    case 'Navigation':
      return <Home className="w-3 h-3" />;
    case 'Projects':
      return <FolderGit2 className="w-3 h-3" />;
    case 'Experience':
      return <Briefcase className="w-3 h-3" />;
    case 'External':
      return <ExternalLink className="w-3 h-3" />;
    default:
      return null;
  }
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();

  // Toggle command palette
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  // Keyboard shortcut: ⌘K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [toggle]);

  // Handle item selection
  const handleSelect = (item: SearchItem) => {
    setOpen(false);
    setSearch('');
    
    if (item.href) {
      // Check if it's external link
      if (item.href.startsWith('http') || item.href.startsWith('mailto')) {
        window.open(item.href, '_blank');
      } else {
        // Smooth scroll for anchor links
        if (item.href.includes('#')) {
          const [path, hash] = item.href.split('#');
          if (path === '/') {
            // Scroll to element on current page
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            router.push(item.href);
          }
        } else {
          router.push(item.href);
        }
      }
    }
    
    if (item.action) {
      item.action();
    }
  };

  // Filter items based on search
  const filteredItems = searchItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  // Group by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<SearchItem['category'], SearchItem[]>);

  // Categories in order
  const categoryOrder: SearchItem['category'][] = [
    'Navigation',
    'Projects',
    'Experience',
    'External',
  ];

  return (
    <>
      {/* Search Button in Navbar */}
      <button
        onClick={toggle}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 bg-[#1A1A2E] rounded-lg border border-[rgba(255,255,255,0.06)] hover:border-red-500/30 hover:text-white transition-all"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="text-xs px-1.5 py-0.5 bg-[#0A0A0F] rounded text-gray-500 font-mono">
          ⌘K
        </kbd>
      </button>

      {/* Command Palette Modal */}
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command Palette"
        className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-32"
      >
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Modal */}
        <Command 
          className="relative z-10 w-full max-w-2xl bg-[#1A1A2E] rounded-2xl border border-[rgba(255,255,255,0.06)] shadow-2xl overflow-hidden"
          shouldFilter={false}
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 border-b border-[rgba(255,255,255,0.06)]">
            <Search className="w-5 h-5 text-gray-500" />
            <Command.Input
              placeholder="Search for projects, pages, or links..."
              value={search}
              onValueChange={setSearch}
              className="flex-1 py-4 text-white bg-transparent outline-none placeholder:text-gray-500 text-sm"
              autoFocus
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="text-xs px-2 py-1 bg-[#0A0A0F] rounded text-gray-500 font-mono">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {filteredItems.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-gray-500">No results found</p>
                <p className="text-gray-600 text-sm mt-1">Try a different search term</p>
              </div>
            ) : (
              <Command.List>
                {categoryOrder.map((category) => {
                  const items = groupedItems[category] || [];
                  if (items.length === 0) return null;

                  return (
                    <div key={category} className="mb-2">
                      <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {getCategoryIcon(category)}
                        {category}
                      </div>
                      {items.map((item) => (
                        <Command.Item
                          key={item.id}
                          value={item.id}
                          onSelect={() => handleSelect(item)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 cursor-pointer hover:bg-[#2A2A4E] transition-all aria-selected:bg-[#2A2A4E] aria-selected:text-white"
                        >
                          <span className="text-gray-500">{getIcon(item.category)}</span>
                          <span className="flex-1">{item.label}</span>
                          {item.category === 'External' && (
                            <ExternalLink className="w-3 h-3 text-gray-600" />
                          )}
                          {item.category === 'Navigation' && (
                            <span className="text-xs text-gray-600">→</span>
                          )}
                        </Command.Item>
                      ))}
                    </div>
                  );
                })}
              </Command.List>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-[rgba(255,255,255,0.06)] text-xs text-gray-600">
            <div className="flex items-center gap-4">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>ESC Close</span>
            </div>
            <span>⌘K to open</span>
          </div>
        </Command>
      </Command.Dialog>
    </>
  );
}