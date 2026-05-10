import React from 'react';
import { cn } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className, size = 40 }: LogoProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)} style={{ width: size, height: size }}>
      {/* 
         Note: In a real environment, you would use an <img> tag pointing to /logo.png 
         For now, I'm using the provided image design as inspiration for a high-end SVG path or 
         a placeholder that matches the brand colors perfectly.
      */}
      <img 
        src="/logo.png" 
        alt="PlasticPoints Logo" 
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback if logo.png isn't uploaded yet
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.innerHTML = `<div class="bg-mint w-full h-full rounded-2xl flex items-center justify-center text-charcoal font-black text-xl">P</div>`;
        }}
      />
    </div>
  );
}
