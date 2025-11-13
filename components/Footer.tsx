import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-950 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Mukesh Cheemakurthi. All rights reserved.
      </p>
      <p className="text-slate-600 text-xs mt-2">
        Built with React, Tailwind & Gemini AI
      </p>
    </footer>
  );
};

export default Footer;