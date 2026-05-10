import React from 'react';
import { motion } from 'motion/react';
import { Globe, Droplets, Wind, TrendingUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Impact() {
  const stats = [
    { icon: Globe, label: 'Plastic diverted from oceans', value: '12.4 Tons', color: 'text-blue-500' },
    { icon: Droplets, label: 'Water saved in production', value: '45,000L', color: 'text-mint' },
    { icon: Wind, label: 'CO2 Emissions reduced', value: '8.2 Tons', color: 'text-purple-500' },
    { icon: TrendingUp, label: 'Active Recyclers', value: '2,500+', color: 'text-orange-500' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl lg:text-8xl font-[900] tracking-tighter uppercase mb-6">
            Global <span className="text-mint">Impact</span>
          </h1>
          <p className="text-xl text-slate font-black uppercase tracking-tight max-w-2xl mx-auto">
            Every bottle counts. Track how our community is changing the world, one scan at a time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-8 rounded-[2.5rem] border border-charcoal/5 hover:border-mint/30 transition-all group"
            >
              <stat.icon className={cn("w-12 h-12 mb-6 group-hover:scale-110 transition-transform", stat.color)} />
              <p className="text-4xl font-black mb-2">{stat.value}</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-charcoal rounded-[3rem] p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-mint/10 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase mb-6 leading-none">
                The Janakpur <br /> <span className="text-mint">Clean-Up Goal</span>
              </h2>
              <p className="text-zinc-400 font-bold mb-8 text-lg">
                We are currently on track to reach our target of 50,000 recycled units before the end of the quarter. This will unlock a city-wide social bonus!
              </p>
              <div className="w-full bg-white/10 h-4 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '74%' }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-mint shadow-[0_0_20px_rgba(152,255,152,0.5)]"
                />
              </div>
              <p className="mt-4 font-black uppercase tracking-widest text-sm text-mint">74% of Target Achieved</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4">
                    <img src={i % 2 === 0 ? "/mock1.png" : "/lady1.png"} className="w-full h-full object-cover rounded-xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
