import { motion } from 'motion/react';
import { Meta } from '../components/layout/Meta';

export default function Terms() {
  const lastUpdated = "May 2026"; // Current Project Date

  return (
    <div className="pt-32 pb-32 bg-white selection:bg-mint/30">
      <Meta 
        title="Terms of Service | PlasticToPoints"
        description="Our rules for using the PlasticToPoints app and recycling network. Team TerraSync's commitment to clean Nepal."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-6xl lg:text-7xl font-[900] tracking-tighter uppercase leading-none mb-6">
            Terms of <span className="text-mint">Service</span>
          </h1>
          <p className="text-xl font-black uppercase tracking-tight text-slate">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-12 text-slate font-medium text-lg leading-relaxed uppercase tracking-tight">
          
          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing the PlasticToPoints app or website, developed by Team TerraSync, you agree to comply with these legally binding terms. If you do not agree, please discontinue use of our services immediately.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-4">2. User Accounts & Eligibility</h2>
            <p>
              Users must provide accurate information, including full name and phone number for reward redemptions. You are responsible for maintaining the confidentiality of your account credentials integrated via Supabase.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-4">3. The Plastic-to-Points Ecosystem</h2>
            <p>
              Points are earned by scanning valid plastic waste (PET, HDPE, PVC). Points hold no direct cash value and are only redeemable for rewards listed in our Marketplace, such as Ncell/NTC recharges or local merchant vouchers.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-4">4. Verification & Fraud</h2>
            <p>
              All scans are subject to physical verification at designated collection hubs. Team TerraSync reserves the right to deduct points or suspend accounts suspected of submitting fraudulent scans or "ghost" redemptions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-4">5. Reward Redemption</h2>
            <p>
              Redemptions for mobile recharges and digital badges require a valid phone number or email. Once a redemption is confirmed, points are deducted permanently from your profile balance.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-[900] text-charcoal mb-4">6. Limitation of Liability</h2>
            <p>
              PlasticToPoints is a social initiative aimed at environmental sustainability. While we strive for 100% uptime, we are not liable for service interruptions or database synchronization delays within the Supabase infrastructure.
            </p>
          </section>

          <section className="pt-12 border-t-4 border-charcoal/5">
            <p className="text-sm font-bold text-charcoal/50">
              Governing Law: These terms are governed by the regulations of the Government of Nepal. For inquiries, contact Team TerraSync directly via the app support portal.
            </p>
          </section>

        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <button 
            onClick={() => window.history.back()}
            className="bg-charcoal text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-mint hover:text-charcoal transition-all shadow-xl"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}