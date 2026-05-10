import { Globe, Shield, Zap, TrendingUp, Users, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Meta } from '../components/layout/Meta';

export default function About() {
  return (
    <div className="pt-24">
      <Meta 
        title="About PlasticToPoints | Our Mission for a Greener Nepal"
        description="Learn about Team TerraSync's mission to revolutionize plastic waste management in Nepal through technology and community empowerment."
      />
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-[120px] font-[900] mb-12 tracking-tighter uppercase leading-none text-charcoal">
              Our <span className="text-mint">Mission</span>
            </h1>
            <p className="text-2xl text-slate font-black max-w-4xl mx-auto leading-[1.1] uppercase tracking-tighter">
              We started with a simple observation: plastic is only waste because we haven't found a way to value it properly at the point of disposal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Nepal Launchpad Section */}
      <section className="py-32 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-6xl font-black mb-12 uppercase leading-none tracking-tighter">
                The Nepal <br /> <span className="text-mint">Launchpad</span>
              </h2>
              <p className="text-xl text-white/70 mb-10 leading-snug font-medium uppercase tracking-tight">
                TerraSync and PlasticPoints began their journey in Nepal, where localized waste challenges inspired a global vision. By proving the model in diverse terrains—from the Himalayas to the plains—we are scaling a solution built on resilience.
              </p>
              <div className="grid grid-cols-2 gap-12 mt-16">
                <div>
                  <div className="text-6xl font-black text-mint mb-2 uppercase">1k+</div>
                  <div className="text-sm text-white/40 font-black uppercase tracking-[0.2em]">Early Adopters</div>
                </div>
                <div>
                  <div className="text-6xl font-black text-mint mb-2 uppercase">10kg</div>
                  <div className="text-sm text-white/40 font-black uppercase tracking-[0.2em]">Plastic Recycled</div>
                </div>
              </div>
            </div>

            {/* Image Container - UPDATED TO WHITE */}
            <div className="relative group">
              {/* White Box Container */}
              <div className="aspect-square bg-white rounded-[4rem] overflow-hidden relative shadow-[0_0_80px_-20px_rgba(255,255,255,0.3)] border-[12px] border-white/10 flex items-center justify-center p-1">
                
                {/* Optional: Subtle inner shadow for depth */}
                <div className="absolute inset-0 rounded-[3rem] shadow-inner pointer-events-none z-10" />
                
                <img 
                  src="/mock2.png" 
                  alt="Sustainability in Nepal" 
                  className="w-full h-full object-cover rounded-[2.5rem] bg-slate-50 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decorative Element behind (Optional) */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-mint/20 rounded-[4rem] blur-3xl" />
            </div>

          </div>
        </div>
      </section>

      {/* Global Values Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-24 uppercase tracking-tighter text-charcoal">Global Values</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: Globe, title: 'Planet First', desc: 'Every decision we make is measured against its ecological impact.' },
              { icon: Users, title: 'Inclusivity', desc: 'Recycling should be easy and rewarding for everyone, everywhere.' },
              { icon: Zap, title: 'Radical Innovation', desc: 'We question the status quo of waste management every single day.' },
            ].map((value, i) => (
              <div key={i} className="group p-8 rounded-[3rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-mint/10 border border-transparent hover:border-mint/20 transition-all duration-500">
                <div className="w-20 h-20 bg-charcoal text-white rounded-3xl flex items-center justify-center mb-10 group-hover:bg-mint group-hover:text-charcoal transition-colors shadow-xl">
                  <value.icon size={40} />
                </div>
                <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter text-charcoal">{value.title}</h3>
                <p className="text-slate font-medium text-lg leading-tight uppercase tracking-tight">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}