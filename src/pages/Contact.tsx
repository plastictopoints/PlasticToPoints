import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-32 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h1 className="text-6xl lg:text-[100px] font-[900] mb-12 tracking-tighter uppercase leading-none">
              Let's <span className="text-mint">Connect</span>
            </h1>
            <p className="text-2xl text-slate font-black uppercase tracking-tighter leading-[1.1] max-w-md mb-16">
              Questions about rewards? Partnership inquiries? High-fives? We're here.
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-mint text-charcoal rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                  <Mail size={32} />
                </div>
                <div>
                  <div className="text-[10px] text-slate uppercase font-black tracking-widest mb-1">Email Support</div>
                  <div className="text-2xl font-[900] tracking-tighter text-charcoal">plastictopoints@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-charcoal text-white rounded-2xl flex items-center justify-center group-hover:-rotate-12 transition-transform shadow-lg">
                  <MapPin size={32} />
                </div>
                <div>
                  <div className="text-[10px] text-slate uppercase font-black tracking-widest mb-1">Global HQ</div>
                  <div className="text-2xl font-[900] tracking-tighter text-charcoal uppercase">Janakpur, Nepal</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-2 border-gray-100">
            <h2 className="text-3xl font-[900] uppercase tracking-tighter mb-10">Direct Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate">First Name</label>
                  <input type="text" className="w-full bg-surface border-2 border-transparent rounded-2xl p-6 focus:bg-white focus:border-mint focus:ring-4 focus:ring-mint/10 transition-all font-bold uppercase tracking-tight" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate">Last Name</label>
                  <input type="text" className="w-full bg-surface border-2 border-transparent rounded-2xl p-6 focus:bg-white focus:border-mint focus:ring-4 focus:ring-mint/10 transition-all font-bold uppercase tracking-tight" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate">Email Address</label>
                <input type="email" className="w-full bg-surface border-2 border-transparent rounded-2xl p-6 focus:bg-white focus:border-mint focus:ring-4 focus:ring-mint/10 transition-all font-bold uppercase tracking-tight" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate">Message</label>
                <textarea rows={4} className="w-full bg-surface border-2 border-transparent rounded-2xl p-6 focus:bg-white focus:border-mint focus:ring-4 focus:ring-mint/10 transition-all font-bold uppercase tracking-tight" />
              </div>
              <button className="bg-charcoal text-white w-full py-6 rounded-2xl font-[900] uppercase tracking-widest text-sm hover:bg-black transition-all shadow-xl flex items-center justify-center gap-4">
                Send Message <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
