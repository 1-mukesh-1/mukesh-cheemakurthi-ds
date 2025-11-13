import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 mt-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span>© 2025 Mukesh Cheemakurthi</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
          <span>Terms</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
          <span>Privacy</span>
        </div>
        <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Systems Operational</span>
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;