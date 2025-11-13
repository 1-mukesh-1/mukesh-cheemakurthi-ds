import React from 'react';
import { Mail, Phone, Copy, Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact = () => {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm transition-colors">
      <h3 className="font-bold text-gray-600 dark:text-gray-400 mb-4 uppercase text-xs tracking-wider">Contact Information</h3>
      
      <div className="space-y-4">
        {/* Email */}
        <div className="group">
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-1 flex items-center gap-2">
             Email
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors">
            <div className="flex items-center gap-2 min-w-0">
               <Mail className="w-4 h-4 text-gray-400" />
               <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-sm text-gray-700 dark:text-gray-200 truncate hover:underline">
                 {SOCIAL_LINKS.email}
               </a>
            </div>
            <button 
              onClick={() => handleCopy(SOCIAL_LINKS.email, 'email')}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              title="Copy email"
            >
              {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Phone */}
        <div className="group">
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-1 flex items-center gap-2">
             Mobile
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors">
            <div className="flex items-center gap-2">
               <Phone className="w-4 h-4 text-gray-400" />
               <span className="text-sm text-gray-700 dark:text-gray-200">
                 {SOCIAL_LINKS.phone}
               </span>
            </div>
            <button 
              onClick={() => handleCopy(SOCIAL_LINKS.phone, 'phone')}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              title="Copy phone number"
            >
              {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
         <div className="grid grid-cols-2 gap-2">
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
               LinkedIn
            </a>
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
               GitHub
            </a>
         </div>
      </div>
    </div>
  );
};

export default Contact;