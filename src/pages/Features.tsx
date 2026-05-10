import { Scan, Coins, Gift, Smartphone, Zap, Shield, MapPin, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { Meta } from '../components/layout/Meta';

const FEATURES = [
  {
    icon: Scan,
    title: 'Smart Recognition',
    desc: 'Our proprietary AI identifies PET, HDPE, and PVC types instantly via your camera.'
  },
  {
    icon: Coins,
    title: 'Micro-Incentives',
    desc: 'Get fractional rewards that accumulate into real-world purchasing power.'
  },
  {
    icon: MapPin,
    title: 'Drop Zones',
    desc: 'Localize smart bins and collection hubs with real-time capacity monitoring.'
  },
  {
    icon: BarChart3,
    title: 'Personal Impact',
    desc: 'Track your carbon footprint reduction and waste diversion metrics daily.'
  },
  {
    icon: Zap,
    title: 'Instant Payouts',
    desc: 'Points hit your wallet the second your recycling is verified at a hub.'
  },
  {
    icon: Shield,
    title: 'Verified Pipeline',
    desc: 'We guarantee where your plastic goes, ensuring it never enters the ocean.'
  }
];

export default function Features() {
  return (
    <div className="pt-32 pb-32 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-32">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl lg:text-[100px] font-[900] mb-12 tracking-tighter uppercase leading-none"
          >
            The Tech <br /> <span className="text-mint">Stack</span> For Earth.
          </motion.h1>
          <p className="text-2xl text-slate font-black uppercase tracking-tighter leading-[1.1] max-w-2xl">
            PlasticPoints is more than an app. It's a vertically integrated system that connects consumers, collection hubs, and recycling plants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card group hover:bg-charcoal transition-all duration-500"
            >
              <div className="w-16 h-16 bg-mint text-charcoal rounded-2xl flex items-center justify-center mb-10 group-hover:bg-white transition-colors shadow-lg">
                <f.icon size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter group-hover:text-white transition-colors">{f.title}</h3>
              <p className="text-slate font-medium text-lg leading-tight uppercase tracking-tight group-hover:text-white/60 transition-colors">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Product Showcase section */}
        <div className="mt-48 bg-mint rounded-[4rem] p-12 lg:p-24 text-charcoal overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
          <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <h2 className="text-6xl lg:text-8xl font-[900] mb-10 leading-none uppercase tracking-tighter">
                Ready to <br /> start?
              </h2>
              <p className="text-xl font-black uppercase tracking-tight mb-12 max-w-md">
                Join 50,000+ users worldwide who are turning daily waste into real value.
              </p>
              <button className="bg-charcoal text-white px-12 py-6 rounded-3xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                Get the App
              </button>
            </div>
            <div className="relative">
              {/* Image replaced with your mock1.png */}
              <div className="bg-white rounded-[3rem] aspect-square rotate-6 shadow-2xl overflow-hidden border-[12px] border-charcoal/5">
                <img 
                  src="/mock1.png" 
                  alt="PlasticToPoints App Mockup" 
                  className="w-full h-full object-cover brightness-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/20 blur-[120px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}