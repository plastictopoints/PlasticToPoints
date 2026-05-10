import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Meta } from '../components/layout/Meta';

export default function Blog() {
  const posts = [
    {
      title: "REDEFINING WASTE: THE JANAKPUR CIRCULAR ECONOMY",
      excerpt: "PROBLEM: 80% OF PLASTIC IN NEPAL ENDS UP IN LANDFILLS. SOLUTION: TERRA-SYNC'S BLOCKCHAIN-READY LOGISTICS. IMPACT: 12 TONS DIVERTED IN Q1 2026.",
      date: "MAY 10, 2026",
      author: "TERRASYNC DEV",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "TECH LOG #04: SMART RECOGNITION PIPELINE",
      excerpt: "PROBLEM: MANUAL SORTING IS SLOW AND ERROR-PRONE. SOLUTION: COMPUTER VISION API FOR INSTANT PET IDENTIFICATION. IMPACT: 98% SCAN ACCURACY.",
      date: "MAY 08, 2026",
      author: "AMAN YADAV",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "THE REWARD ENGINE: NCELL & NTC INTEGRATION",
      excerpt: "PROBLEM: USER MOTIVATION DECAY. SOLUTION: INSTANT MOBILE RECHARGE REDEMPTION VIA SUPABASE FUNCTIONS. IMPACT: 400% INCREASE IN DAILY SCANS.",
      date: "MAY 05, 2026",
      author: "REWARD STRATEGIST",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl lg:text-8xl font-[900] tracking-tighter uppercase leading-none mb-6">
            Eco <span className="text-mint">Journal</span>
          </h1>
          <p className="text-xl font-black uppercase tracking-tight text-slate max-w-2xl">
            Stories of impact, community, and the future of recycling in Nepal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex items-center gap-6 text-[10px] uppercase font-black tracking-widest text-slate mb-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-mint" /> {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={14} className="text-mint" /> {post.author}
                </span>
              </div>
              <h2 className="text-3xl font-black uppercase leading-tight mb-4 group-hover:text-mint transition-colors">
                {post.title}
              </h2>
              <p className="text-slate font-bold mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest group-hover:gap-5 transition-all">
                Read More <ArrowRight size={18} className="text-mint" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
