import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Award, Coffee, Utensils, Zap, MapPin } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Rewards() {
  const sections = [
    {
      title: "Digital & Mobile Rewards",
      icon: Smartphone,
      items: [
        { name: "Ncell Recharge (Rs. 50)", cost: "500 Pts", tag: "Popular" },
        { name: "Ncell Recharge (Rs. 100)", cost: "950 Pts", tag: "Best Value" },
        { name: "NTC Top-up (Rs. 50)", cost: "500 Pts", tag: "New" },
        { name: "NTC Top-up (Rs. 100)", cost: "950 Pts" },
        { name: "Exclusive 'Global Eco' Badge", cost: "4000 Pts", special: true },
      ]
    },
    {
      title: "Local Partner Rewards (Janakpur Special)",
      icon: MapPin,
      items: [
        { name: "Momo Platter Voucher", cost: "1200 Pts", store: "Local Eatery" },
        { name: "Tea/Coffee Coupon", cost: "300 Pts", store: "Janakpur Cafes" },
        { name: "Lunch Combo Deal", cost: "2500 Pts", store: "Partner Restros" },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-charcoal text-white rounded-[3rem] p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-mint/20 blur-[80px] -mr-20 -mt-20"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
               <h1 className="text-5xl lg:text-7xl font-[900] tracking-tighter uppercase mb-4 leading-none text-white">
                 Market<span className="text-mint">place</span>
               </h1>
               <p className="text-xl text-white/60 font-bold uppercase tracking-tight">Turn your scrap into treasures.</p>
            </div>
            <div className="bg-white/10 px-8 py-6 rounded-[2rem] border border-white/10">
               <p className="text-xs font-black uppercase tracking-widest text-mint mb-1">Download Now</p>
               <p className="text-2xl font-black">To-Earn <span className="text-sm font-normal opacity-40">Pts</span></p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-24">
          {sections.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-mint/10 rounded-2xl flex items-center justify-center text-mint">
                  <section.icon size={28} />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-charcoal">{section.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className={cn(
                      "p-6 rounded-[2rem] border transition-all cursor-pointer relative group",
                      item.special ? "bg-charcoal text-white border-charcoal shadow-2xl" : "bg-surface border-charcoal/5 hover:border-mint/30"
                    )}
                  >
                    {item.tag && (
                      <span className="absolute top-4 right-4 bg-mint text-charcoal text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        {item.tag}
                      </span>
                    )}
                    <h3 className="text-xl font-black mb-4 group-hover:text-mint transition-colors">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Zap size={16} className="text-mint" />
                        <span className={cn("font-black tracking-tight", item.special ? "text-white" : "text-charcoal")}>{item.cost}</span>
                      </div>
                      <button className={cn(
                        "px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest transition-all",
                        item.special ? "bg-mint text-charcoal" : "bg-charcoal text-white hover:bg-mint hover:text-charcoal"
                      )}>
                        Redeem
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
