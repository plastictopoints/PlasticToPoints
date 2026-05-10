import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Package, 
  LogOut, 
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Zap,
  Eye,
  MapPin,
  Phone,
  Loader2,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../lib/supabase';
import { cn } from '../lib/utils'; // Ensure this path is correct for your project
import Logo from '../components/ui/Logo'; // Ensure this path is correct

// Type Definitions
type Tab = 'scans' | 'redemptions' | 'users';

interface ScanData {
  id: string;
  user_id: string;
  item_type: string;
  status: 'pending' | 'approved' | 'rejected';
  photo_url_1: string;
  photo_url_2?: string;
  points_earned: number;
  kg_amount: number;
  created_at: string;
  profiles?: {
    email: string;
    name: string;
    phone_number?: string;
    points: number;
    address?: string;
    photo_url?: string;
  };
}

interface RedemptionData {
  id: string;
  user_id: string;
  reward_title: string;
  reward_cost: number;
  reward_type?: string;
  item_name?: string;
  points_spent?: number;
  phone_number: string;
  full_name: string;
  delivery_address?: string;
  redemption_code?: string;
  status: 'pending' | 'confirmed' | 'denied';
  created_at: string;
  profiles?: {
    email: string;
    name: string;
    phone_number?: string;
  };
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState<Tab>('scans');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null); // ID of item being processed
  
  const [data, setData] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalScans: 0,
    pendingRedemptions: 0,
    totalPoints: 0,
    activeUsers: 0
  });

  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  
  // Modal State
  const [selectedDetail, setSelectedDetail] = useState<{ type: 'scan' | 'redemption', data: any } | null>(null);
  const [showDenyConfirm, setShowDenyConfirm] = useState<string | null>(null);

  // --- Auth & Initial Load ---

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedDetail(null);
        setShowDenyConfirm(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('admin_auth');
    if (authStatus === 'true') {
      setIsAuthorized(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      fetchData();
      fetchStats();
    }
  }, [isAuthorized, activeTab]);

  // --- Data Fetching ---

  const fetchStats = async () => {
    try {
      const { count: scans, error: scansError } = await supabase.from('Scans').select('*', { count: 'exact', head: true });
      if (scansError) console.error('Scans stats error:', scansError);
      
      const { count: pending, error: pendingError } = await supabase.from('redemptions').select('*', { count: 'exact', head: true }).eq('status', 'pending');
      if (pendingError) console.error('Redemptions stats error:', pendingError);
      
      const { data: profiles, error: profilesError } = await supabase.from('profiles').select('points'); 
      if (profilesError) console.error('Profiles stats error:', profilesError);
      
      const totalPoints = profiles?.reduce((acc, p) => acc + (p.points || 0), 0) || 0;
      
      setStats({
        totalScans: scans || 0,
        pendingRedemptions: pending || 0,
        totalPoints,
        activeUsers: profiles?.length || 0
      });
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    let query;

    if (activeTab === 'scans') {
      query = supabase
        .from('Scans')
        .select(`
          *,
          profiles (
            email,
            name,
            phone_number,
            points
          )
        `)
        .order('created_at', { ascending: false });
    } else if (activeTab === 'redemptions') {
      query = supabase
        .from('redemptions')
        .select(`
          *,
          profiles (
            email,
            name,
            phone_number
          )
        `)
        .order('created_at', { ascending: false });
    } else {
      query = supabase.from('profiles').select('*').order('points', { ascending: false });
    }

    const { data, error } = await query;
    if (error) {
      console.error("Fetch Error:", error);
      // Fallback to simpler query if association fails
      if (activeTab !== 'users') {
        const tableName = activeTab === 'scans' ? 'Scans' : activeTab;
        const fallbackQuery = supabase.from(tableName).select('*').order('created_at', { ascending: false });
        const { data: fallbackData, error: fallbackError } = await fallbackQuery;
        if (!fallbackError) setData(fallbackData || []);
      }
    } else {
      setData(data || []);
    }
    
    setLoading(false);
  };

  // --- Actions & Logic ---

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with secure backend check later
    if (adminPassword === 'Access') {
      setIsAuthorized(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      setPasswordError(true);
      setAdminPassword('');
      setTimeout(() => setPasswordError(false), 2000);
    }
  };

  const handleSignOut = () => {
    setIsAuthorized(false);
    sessionStorage.removeItem('admin_auth');
  };

  // ✅ FIXED: Update Scan Status AND Add Points
  const updateScanStatus = async (id: string, status: 'approved' | 'rejected') => {
    setActionLoading(id);
    try {
      // 1. Get scan details to know points value and user ID
      const { data: scanItem } = await supabase
        .from('Scans')
        .select('points_earned, user_id')
        .eq('id', id)
        .single();

      if (!scanItem) throw new Error("Scan not found");

      // 2. Update Scan Status
      const { error: scanError } = await supabase
        .from('Scans')
        .update({ status })
        .eq('id', id);

      if (scanError) throw scanError;

      // 3. If Approved, Add Points to User Profile
      if (status === 'approved' && scanItem?.user_id) {
        const pointsToAdd = scanItem.points_earned || 0;
        // Fetch current points to ensure atomic addition client-side (better to use RPC in prod)
        const { data: profile } = await supabase
          .from('profiles')
          .select('points') 
          .eq('id', scanItem.user_id)
          .single();

        if (profile) {
          const newTotal = (profile.points || 0) + pointsToAdd;
          
          const { error: updateError } = await supabase
            .from('profiles')
            .update({ points: newTotal }) 
            .eq('id', scanItem.user_id);
            
          if (updateError) console.error("Point update error:", updateError);
        }
      }

      // Refresh UI
      fetchData();
      fetchStats();
      setSelectedDetail(null); // Close modal if open

    } catch (err) {
      console.error("Action Error:", err);
      alert("Failed to update scan. Check console.");
    } finally {
      setActionLoading(null);
    }
  };

  // ✅ FIXED: Process Redemption with Refund Logic
  const processRedemption = async (redemption: any, action: 'confirm' | 'deny') => {
    setActionLoading(redemption.id);
    try {
      const status = action === 'confirm' ? 'confirmed' : 'denied';
      
      // 1. Update Redemption Status
      const { error: updateError } = await supabase
        .from('redemptions')
        .update({ status })
        .eq('id', redemption.id);

      if (updateError) throw updateError;

      // 2. If Denied, Refund Points
      if (action === 'deny') {
        const refundPoints = redemption.reward_cost || 0;
        const { data: profile } = await supabase
          .from('profiles')
          .select('points') 
          .eq('id', redemption.user_id)
          .single();
        
        if (profile) {
          const newTotal = (profile.points || 0) + refundPoints;
          
          await supabase
            .from('profiles')
            .update({ points: newTotal }) 
            .eq('id', redemption.user_id);
        }
      }

      fetchData();
      fetchStats();
      setSelectedDetail(null);
      setShowDenyConfirm(null);

    } catch (err) {
      console.error("Redemption Error:", err);
      alert("Failed to process redemption.");
    } finally {
      setActionLoading(null);
    }
  };

  // --- Render: Login Screen ---

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-slate-50 border border-slate-200 p-12 rounded-3xl shadow-xl"
        >
          <div className="mx-auto mb-8 flex justify-center">
             <Logo size={64} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Admin Access</h1>
          <p className="text-slate-500 mb-8 text-sm text-center">Enter credentials to manage PlasticToPoints.</p>

          <AnimatePresence mode="wait">
            {!showPasswordPrompt ? (
              <motion.button 
                key="login-btn"
                onClick={() => setShowPasswordPrompt(true)}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <ShieldCheck size={20} />
                Login as Admin
              </motion.button>
            ) : (
              <motion.form 
                key="password-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handlePasswordSubmit}
                className="space-y-4"
              >
                <input 
                  autoFocus
                  type="password" 
                  placeholder="Enter Password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className={cn(
                    "w-full bg-white border border-slate-300 px-4 py-3 rounded-xl text-center focus:border-green-500 outline-none transition-colors",
                    passwordError && "border-red-500 ring-1 ring-red-500"
                  )}
                />
                {passwordError && <p className="text-xs text-red-500 font-medium">Invalid Password</p>}
                
                <button 
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                >
                  Verify
                </button>
                <button 
                  type="button"
                  onClick={() => setShowPasswordPrompt(false)}
                  className="w-full text-slate-400 text-xs font-medium hover:text-slate-600"
                >
                  Cancel
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  // --- Render: Main Dashboard ---

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col py-8 px-4">
        <div className="mb-12 flex items-center justify-center lg:justify-start px-2">
           <Logo size={40} />
           <span className="hidden lg:block ml-3 font-black text-xl tracking-tight">PlantsToPoints</span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { id: 'scans', label: 'Scans', icon: Package },
            { id: 'redemptions', label: 'Redemptions', icon: TrendingUp },
            { id: 'users', label: 'Users', icon: Users },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={cn(
                "w-full flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl font-semibold text-sm transition-all",
                activeTab === item.id 
                  ? "bg-green-100 text-green-700" 
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <item.icon size={20} />
              <span className="hidden lg:block">{item.label}</span>
            </button>
          ))}
        </nav>

        <button 
          onClick={handleSignOut}
          className="mt-auto flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl font-semibold text-sm text-red-500 hover:bg-red-50 transition-all"
        >
          <LogOut size={20} />
          <span className="hidden lg:block">Sign Out</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 max-w-7xl mx-auto w-full overflow-x-hidden">
        {/* Header & Stats */}
        <header className="mb-12">
          <h1 className="text-3xl font-black uppercase tracking-tight mb-8">
            {activeTab} Overview
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Scans', value: stats.totalScans, color: 'bg-blue-50 text-blue-700' },
              { label: 'Pending Redemptions', value: stats.pendingRedemptions, color: 'bg-amber-50 text-amber-700' },
              { label: 'Points Circulated', value: stats.totalPoints, color: 'bg-green-50 text-green-700' },
              { label: 'Active Users', value: stats.activeUsers, color: 'bg-purple-50 text-purple-700' },
            ].map((stat, i) => (
              <div key={i} className={`p-6 rounded-2xl border border-slate-100 ${stat.color}`}>
                <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">{stat.label}</p>
                <p className="text-3xl font-black">{stat.value}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm min-h-[500px] overflow-hidden"
          >
            {loading ? (
              <div className="h-64 flex items-center justify-center">
                <Loader2 className="animate-spin text-green-500" size={32} />
              </div>
            ) : (
              <>
                {/* --- SCANS TAB --- */}
                {activeTab === 'scans' && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                          <th className="px-6 py-4">Scan Details</th>
                          <th className="px-6 py-4">User</th>
                          <th className="px-6 py-4">Points</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {data.map((item: ScanData) => (
                          <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-4">
                                <div 
                                  onClick={() => item.photo_url_1 && setSelectedDetail({ type: 'scan', data: item })}
                                  className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden cursor-zoom-in relative"
                                >
                                  {item.photo_url_1 ? (
                                    <img src={item.photo_url_1} alt="Scan" className="w-full h-full object-cover" />
                                  ) : (
                                    <ImageIcon size={16} className="text-slate-400" />
                                  )}
                                  {item.photo_url_1 && <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />}
                                </div>
                                <div>
                                  <p className="font-bold text-sm text-slate-900">{item.item_type || 'Plastic'}</p>
                                  <p className="text-xs text-slate-500">
                                    {item.kg_amount ? `${item.kg_amount}kg • ` : ''}
                                    {new Date(item.created_at).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <p className="font-medium text-sm text-slate-900">
                                {item.profiles?.name || 'Unknown User'}
                              </p>
                              <p className="text-xs text-slate-500">{item.profiles?.email || 'No email'}</p>
                            </td>
                            <td className="px-6 py-4">
                              <span className="font-black text-lg text-green-600">+{item.points_earned || 0}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={cn(
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase",
                                item.status === 'pending' ? "bg-amber-100 text-amber-700" :
                                item.status === 'approved' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                              )}>
                                {item.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              {item.status === 'pending' && (
                                <div className="flex justify-end gap-2">
                                  <button 
                                    onClick={() => updateScanStatus(item.id, 'approved')}
                                    disabled={actionLoading === item.id}
                                    className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors disabled:opacity-50"
                                    title="Approve"
                                  >
                                    {actionLoading === item.id ? <Loader2 size={18} className="animate-spin"/> : <CheckCircle2 size={18} />}
                                  </button>
                                  <button 
                                    onClick={() => updateScanStatus(item.id, 'rejected')}
                                    disabled={actionLoading === item.id}
                                    className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                                    title="Reject"
                                  >
                                    <XCircle size={18} />
                                  </button>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                        {data.length === 0 && (
                          <tr>
                            <td colSpan={5} className="py-12 text-center text-slate-400">
                              No scans found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* --- REDEMPTIONS TAB --- */}
                {activeTab === 'redemptions' && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                          <th className="px-6 py-4">User & Item</th>
                          <th className="px-6 py-4">Contact</th>
                          <th className="px-6 py-4">Points Spent</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {data.map((item: RedemptionData) => (
                          <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              <p className="font-bold text-sm text-slate-900">{item.reward_title || item.reward_type || item.item_name}</p>
                              <p className="text-xs text-slate-500">
                                {item.full_name || item.profiles?.name || 'Unknown'}
                              </p>
                            </td>
                            <td className="px-6 py-4">
                              <p className="text-sm text-slate-900">{item.phone_number}</p>
                              <p className="text-xs text-slate-500 truncate max-w-[150px]">{item.profiles?.email || 'No email'}</p>
                            </td>
                            <td className="px-6 py-4">
                              <span className="font-black text-lg text-red-500">-{item.reward_cost || item.points_spent}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={cn(
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase",
                                item.status === 'pending' ? "bg-amber-100 text-amber-700" :
                                item.status === 'confirmed' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                              )}>
                                {item.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              {item.status === 'pending' && (
                                <div className="flex justify-end gap-2">
                                  <button 
                                    onClick={() => processRedemption(item, 'confirm')}
                                    disabled={actionLoading === item.id}
                                    className="px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
                                  >
                                    {actionLoading === item.id ? "Processing..." : "Pay"}
                                  </button>
                                  
                                  {showDenyConfirm === item.id ? (
                                    <div className="flex items-center gap-1 bg-red-50 p-1 rounded-lg border border-red-100">
                                      <button 
                                        onClick={() => processRedemption(item, 'deny')}
                                        className="px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded hover:bg-red-600"
                                      >
                                        Yes
                                      </button>
                                      <button 
                                        onClick={() => setShowDenyConfirm(null)}
                                        className="px-2 py-1 text-red-400 hover:text-red-600"
                                      >
                                        <XCircle size={14} />
                                      </button>
                                    </div>
                                  ) : (
                                    <button 
                                      onClick={() => setShowDenyConfirm(item.id)}
                                      className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                                    >
                                      Deny
                                    </button>
                                  )}
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                         {data.length === 0 && (
                          <tr>
                            <td colSpan={5} className="py-12 text-center text-slate-400">
                              No redemptions found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* --- USERS TAB --- */}
                {activeTab === 'users' && (
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((profile: any) => (
                      <div key={profile.id} className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                            {(profile.name?.[0] || profile.email?.[0] || 'U').toUpperCase()}
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900">
                              {profile.name || 'No Name Set'}
                            </h3>
                            <p className="text-xs text-slate-500">{profile.email}</p>
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                           {profile.phone_number && (
                            <div className="flex items-center gap-2 text-slate-600 text-xs">
                               <Phone size={14} className="text-slate-400" />
                               <span>{profile.phone_number}</span>
                            </div>
                           )}
                           {profile.address && (
                            <div className="flex items-center gap-2 text-slate-600 text-xs">
                               <MapPin size={14} className="text-slate-400" />
                               <span>{profile.address}</span>
                            </div>
                           )}
                           <div className="text-[10px] text-slate-400 uppercase tracking-tight">
                              ID: {profile.id.slice(0, 8)}...
                           </div>
                        </div>
                        <div className="flex justify-between items-end border-t border-slate-100 pt-4">
                          <div>
                            <p className="text-[10px] font-bold uppercase text-slate-400">Total Points</p>
                            <p className="text-2xl font-black text-green-600">{profile.points || 0}</p>
                          </div>
                          <div className="text-right">
                             <p className="text-[10px] font-bold uppercase text-slate-400">Yield</p>
                             <p className="text-xs text-slate-900 font-bold">{profile.total_kg_collected || 0}kg</p>
                          </div>
                        </div>
                      </div>
                    ))}
                     {data.length === 0 && (
                      <div className="col-span-full py-12 text-center text-slate-400">
                        No users found.
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* --- IMAGE/MODAL VIEWER --- */}
      <AnimatePresence>
        {selectedDetail && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDetail(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedDetail(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <XCircle size={20} />
              </button>

              {selectedDetail.type === 'scan' && (
                <div className="flex flex-col">
                  <div className="bg-slate-100 h-64 md:h-96 flex items-center justify-center p-4">
                    {selectedDetail.data.photo_url_1 ? (
                      <img src={selectedDetail.data.photo_url_1} alt="Full Scan" className="max-h-full max-w-full object-contain rounded-lg shadow-sm" />
                    ) : (
                      <p className="text-slate-400 font-medium">No Image Available</p>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{selectedDetail.data.item_type || 'Plastic Verification'}</h3>
                        <p className="text-sm text-slate-500">{selectedDetail.data.profiles?.email || 'No user info'}</p>
                      </div>
                      <span className="text-2xl font-black text-green-600">+{selectedDetail.data.points_earned}</span>
                    </div>
                    
                    <div className="mb-6">
                       <p className="text-xs font-bold uppercase text-slate-400 mb-1">Amount Collected</p>
                       <p className="text-lg font-bold text-slate-900">{selectedDetail.data.kg_amount || 0}kg</p>
                    </div>

                    {selectedDetail.data.status === 'pending' && (
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <button 
                          onClick={() => updateScanStatus(selectedDetail.data.id, 'rejected')}
                          disabled={actionLoading === selectedDetail.data.id}
                          className="py-3 rounded-xl font-bold text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                        >
                          Reject
                        </button>
                        <button 
                          onClick={() => updateScanStatus(selectedDetail.data.id, 'approved')}
                          disabled={actionLoading === selectedDetail.data.id}
                          className="py-3 rounded-xl font-bold text-white bg-green-500 hover:bg-green-600 transition-colors"
                        >
                          {actionLoading === selectedDetail.data.id ? "Processing..." : "Approve & Add Points"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedDetail.type === 'redemption' && (
                 <div className="p-8 text-center">
                    <Zap size={48} className="mx-auto text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedDetail.data.reward_title || selectedDetail.data.reward_type || selectedDetail.data.item_name}</h3>
                    <p className="text-slate-500 mb-6">
                      Requested by {selectedDetail.data.full_name || selectedDetail.data.profiles?.name || 'Unknown'}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="bg-slate-50 p-4 rounded-xl inline-block w-full text-center">
                        <p className="text-xs font-bold uppercase text-slate-400 mb-1">Phone Number</p>
                        <p className="text-xl font-mono font-bold text-slate-900">{selectedDetail.data.phone_number}</p>
                      </div>
                      {selectedDetail.data.delivery_address && (
                        <div className="bg-slate-50 p-4 rounded-xl inline-block w-full text-center">
                          <p className="text-xs font-bold uppercase text-slate-400 mb-1">Address</p>
                          <p className="text-sm font-medium text-slate-700">{selectedDetail.data.delivery_address}</p>
                        </div>
                      )}
                    </div>

                    {selectedDetail.data.status === 'pending' && (
                      <div className="grid grid-cols-2 gap-3">
                         <button 
                           onClick={() => processRedemption(selectedDetail.data, 'deny')}
                           className="py-3 rounded-xl font-bold text-red-600 bg-red-50 hover:bg-red-100"
                         >
                           Deny & Refund
                         </button>
                         <button 
                           onClick={() => processRedemption(selectedDetail.data, 'confirm')}
                           className="py-3 rounded-xl font-bold text-white bg-green-500 hover:bg-green-600"
                         >
                           Mark Paid
                         </button>
                      </div>
                    )}
                 </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}