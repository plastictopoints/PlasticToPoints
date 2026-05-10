import { motion } from 'motion/react';
import { ArrowRight, Smartphone, ShieldCheck, Globe, Zap, Scan, Coins, Gift, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Meta } from '../components/layout/Meta';

export default function Home() {
  return (
    <div className="overflow-x-hidden pt-12">
      <Meta 
        title="PlasticToPoints | Best Plastic Recycling Rewards Platform in Nepal"
        description="The easiest way to recycle plastic in Nepal and get rewarded. Join 1,400+ hubs and start earning points today for your waste."
      />
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-[100px] leading-[0.9] mb-10 font-[900] tracking-tighter uppercase">
              Scrap. <br />
              <span className="text-mint">Points.</span> <br />
              Impact.
            </h1>
            <p className="text-xl text-slate font-medium max-w-md mb-12 leading-tight uppercase tracking-tight">
              Nepal's largest community-driven plastic credit system. Fast. Secure. Rewarding.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="/app-release.apk" download className="btn-accent">
                Download App <Smartphone size={24} />
              </a>
              <a 
                href="mailto:plastictopoints@gmail.com?subject=wants to become an investor"
                className="btn-secondary"
              >
                Become an Investor <ArrowRight size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-mint/20 blur-[120px] rounded-full scale-150"></div>
              <div className="relative z-10 w-full max-w-[500px] h-full flex items-center justify-center">
                <img 
                  src="/lady1.png" 
                  alt="Environmental Sustainability" 
                  className="w-full h-auto max-h-[700px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Selection - Rapido Style */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-charcoal">How PlasticToPoints Works?</h2>
          <p className="text-slate font-medium text-lg mt-4">Simple steps to turn your plastic waste into value.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Recycle', color: 'bg-mint', icon: Scan, desc: 'Scan and drop plastic at any verified hub near you.' },
              { title: 'Earn', color: 'bg-charcoal', icon: Coins, desc: 'Instant points deposited directly to your digital wallet.' },
              { title: 'Impact', color: 'bg-mint', icon: Globe, desc: 'Fund environmental projects globally with your points.' },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="card h-full flex flex-col items-start hover:bg-mint hover:border-mint transition-colors group">
                  <div className={cn("w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-inner transition-colors", 
                    service.color === 'bg-mint' ? 'bg-mint/10 text-mint group-hover:bg-white group-hover:text-charcoal' : 'bg-charcoal text-white group-hover:bg-white group-hover:text-charcoal'
                  )}>
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-slate font-medium leading-tight group-hover:text-white/80 transition-colors">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety/Trust Section - Rapido Vibes */}
      <section className="bg-[#FAF9F6] py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black mb-10 leading-tight uppercase tracking-tighter">
              A Solution Built <br /> For Everyone.
            </h2>
            <div className="space-y-8">
              {[
                { title: 'Fast Verification', info: 'AI-powered scanning takes less than 2 seconds.' },
                { title: 'Secure Wallet', info: 'Your points are protected by blockchain technology.' },
                { title: 'Global Network', info: '1,400+ hubs across 12 countries.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center shrink-0 text-white font-black">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-charcoal mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-slate font-medium leading-snug">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="bg-mint w-full aspect-square rounded-[5rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="/hand1.png" 
                  alt="Recycling Process" 
                  className="w-full h-full object-cover grayscale opacity-80 bg-[#26ff00]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                   <p className="text-white text-3xl font-black uppercase leading-none">"Most efficient way to recycle."</p>
                   <p className="text-mint text-sm font-bold mt-4 uppercase tracking-widest">— Sustainable Weekly</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final Download CTA */}
      <section className="bg-mint py-32 text-charcoal">
         <div className="max-w-7xl mx-auto text-center px-4">
            <h2 className="text-6xl lg:text-8xl font-[900] tracking-tighter mb-12 uppercase leading-none">
               Join the <br /> Movement.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
               <a href="/app-release.apk" download className="bg-charcoal text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                  Download App (APK)
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
