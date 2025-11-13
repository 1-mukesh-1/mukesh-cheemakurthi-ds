import React from 'react';
import { Search, Menu, Smile } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <div className="text-2xl">🤗</div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">Hugging Folio</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Models</a>
            <a href="#" className="hover:text-black transition-colors">Datasets</a>
            <a href="#" className="hover:text-black transition-colors">Spaces</a>
            <a href="#" className="hover:text-black transition-colors">Posts</a>
            <a href="#" className="hover:text-black transition-colors">Docs</a>
          </nav>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-md ml-8">
          <div className="relative flex-1 hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent sm:text-sm"
              placeholder="Search models, datasets, users..."
            />
          </div>
          <div className="flex items-center gap-3">
             <button className="md:hidden p-2 text-gray-500">
                <Menu className="w-6 h-6" />
             </button>
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-white font-bold border border-yellow-600/20 shadow-inner">
                M
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;