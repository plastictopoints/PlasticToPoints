import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Leaf } from 'lucide-react';

const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Download App', href: '#' },
    { label: 'Rewards', href: '/rewards' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Impact', href: '/impact' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Help Center', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 px-4 sm:px-6 lg:px-12 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-20">
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-black uppercase tracking-tighter text-mint mb-8">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white font-bold transition-colors uppercase tracking-widest text-[10px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
             <Logo size={40} className="shadow-lg shadow-mint/10" />
             <span className="font-black uppercase tracking-tighter text-2xl text-white">PlasticPoints</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://x.com/PlasticToPoints" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-charcoal transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932Zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41Z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61588993689857" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-charcoal transition-all">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/plastictopoints/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-charcoal transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/plastic-to-points-2b325a409/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-charcoal transition-all">
              <Linkedin size={20} />
            </a>
          </div>
          
          <p className="text-[10px] font-black uppercase tracking-widest text-white/40 text-center md:text-right">
            © 2026 PlasticPoints Nepal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
