import { motion } from 'framer-motion';
import { Meta } from '../components/layout/Meta';

export default function Privacy() {
  const lastUpdated = "May 2026";

  return (
    <div className="pt-32 pb-32 bg-white selection:bg-mint/30 selection:text-charcoal">
      <Meta 
        title="Privacy Policy | PlasticToPoints"
        description="Learn how PlasticToPoints protects your data and manages your information as you help us clean the environment."
      />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-charcoal">
            Privacy <span className="text-mint">Policy</span>
          </h1>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-mint"></span>
            <p className="text-sm font-bold uppercase tracking-widest text-slate/60">
              Last updated: {lastUpdated}
            </p>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-16 text-slate font-medium text-lg leading-relaxed">
          
          <section className="prose prose-slate max-w-none">
            <p className="text-xl text-charcoal font-semibold mb-6">
              Your privacy is fundamental to our mission at PlasticToPoints.
            </p>
            <p>
              This Privacy Policy describes how we collect, use, and protect your information when you interact with the 
              <strong> PlasticToPoints Platform</strong>—including our mobile application and website. Whether you are a 
              Recycler, a Hub Partner, or a visitor, this policy ensures your data is handled with transparency and security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-charcoal tracking-tight mb-6">User Acceptance</h2>
            <p className="mb-4">
              By accessing the PlasticToPoints Platform, you consent to the practices described in this policy. 
              We process information in accordance with the Information Technology Act and other applicable global standards. 
              If you do not agree with these terms, please discontinue use of our services.
            </p>
          </section>

          <section className="bg-surface p-10 rounded-[2rem] border border-slate/5">
            <h2 className="text-3xl font-black text-charcoal tracking-tight mb-8">Data Collection</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-mint font-black uppercase text-xs tracking-widest mb-4">I. Provided by You</h3>
                <ul className="space-y-3 text-base">
                  <li className="flex gap-2"><strong>•</strong> Account Details (Name, Email)</li>
                  <li className="flex gap-2"><strong>•</strong> Verification (ID, PAN for Partners)</li>
                  <li className="flex gap-2"><strong>•</strong> Payment Info (for eSewa payouts)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-mint font-black uppercase text-xs tracking-widest mb-4">II. Automated Data</h3>
                <ul className="space-y-3 text-base">
                  <li className="flex gap-2"><strong>•</strong> Precise Location (for pickups)</li>
                  <li className="flex gap-2"><strong>•</strong> Transaction History</li>
                  <li className="flex gap-2"><strong>•</strong> Device & Usage Analytics</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black text-charcoal tracking-tight mb-6">How We Use Information</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {["Verify identity and capacity", "Process point redemptions", "Fix errors and improve usability", "Prevent fraud and money laundering"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-4 bg-white border border-slate/10 rounded-xl">
                  <div className="h-2 w-2 bg-mint rounded-full"></div>
                  <span className="text-base text-charcoal font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-black text-charcoal tracking-tight mb-6">Security Standards</h2>
            <p className="mb-6">
              Our infrastructure is powered by <strong>Supabase</strong>, utilizing industry-standard encryption, firewalls, 
              and SSL (Secure Socket Layers) to protect your database entries. While no system is 100% impenetrable, we 
              prioritize the highest levels of security for your digital assets.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-charcoal tracking-tight mb-6">Retention & Grievance</h2>
            <p className="mb-8">
              We retain data as long as your account is active. Upon termination, records may be kept for 180 days 
              to comply with legal audits or fraud prevention.
            </p>
            
            <div className="p-8 rounded-[2.5rem] bg-charcoal text-white overflow-hidden relative">
              <div className="relative z-10">
                <p className="text-mint font-black uppercase text-xs tracking-widest mb-2">Grievance Officer</p>
                <p className="text-2xl font-black mb-1">plastictopoints@gmail.com</p>
                <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Base: Nepal</p>
              </div>
              {/* Decorative Mint Blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-mint/20 blur-[60px] rounded-full"></div>
            </div>
          </section>

          <footer className="pt-12 border-t border-slate/10 text-center md:text-left">
            <p className="text-xs font-bold text-slate/40 uppercase tracking-widest">
              A PlasticToPoints Initiative by Team TerraSync. Secure Data. Clean Future. © 2026.
            </p>
          </footer>
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center md:justify-start"
        >
          <button 
            onClick={() => window.history.back()}
            className="group flex items-center gap-3 bg-charcoal text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-mint hover:text-charcoal transition-all"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}