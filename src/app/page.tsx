'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Mic, Lock, CheckCircle, Sparkles, ArrowRight, X } from 'lucide-react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'student' | 'admin'>('student');

  // Claim Quiz Modal State
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [selectedClaimTitle, setSelectedClaimTitle] = useState('');
  const [quizAnswer1, setQuizAnswer1] = useState('');
  const [quizAnswer2, setQuizAnswer2] = useState('');
  const [passGenerated, setPassGenerated] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleMicClick = () => {
    if (!isRecording) {
      setIsRecording(true);
      showToast('Voice AI Listening... Describe your item.');
      setTimeout(() => {
        setIsRecording(false);
        setSearchQuery('Blue Milton Stainless Steel Water Bottle');
        showToast('Voice AI Transcribed: "Blue Milton Water Bottle"');
      }, 3000);
    }
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPassGenerated(true);
    showToast('Verification Passed! Security Pickup Pass Generated.');
  };

  return (
    <div style={{ backgroundColor: 'var(--white)' }}>
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="toast-notice">
          {toastMessage}
        </div>
      )}

      {/* ==================== 1. FULL SCREEN BACKGROUND IMAGE HERO ==================== */}
      <section 
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(180deg, rgba(10, 15, 30, 0.62) 0%, rgba(10, 15, 30, 0.76) 100%), url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          padding: '120px 0 80px'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            
            <div className="badge" style={{ marginBottom: '24px', backgroundColor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.25)', color: '#FFFFFF' }}>
              Campus Recovery Network
            </div>
            
            <h1 style={{ color: '#FFFFFF', fontSize: '3.6rem', lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Find what&apos;s lost. <br />
              Reconnect what matters.
            </h1>
            
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', maxWidth: '640px', margin: '0 auto 36px', lineHeight: 1.5 }}>
              Every minute, connecting students directly with lost belongings. Type your search or speak using Voice AI to query secure lockers.
            </p>

            {/* Centered Voice Search input bar */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
              <input 
                type="text" 
                className="input-field" 
                style={{ paddingLeft: '44px', paddingRight: '140px', height: '54px', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.95)', color: 'var(--obsidian)' }}
                placeholder="e.g. 'Blue Milton Bottle library 2nd floor'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span style={{ position: 'absolute', left: '18px', color: 'var(--muted)', display: 'flex', alignItems: 'center' }}>
                <Search size={18} />
              </span>
              
              <button 
                onClick={handleMicClick}
                className={`btn btn-sm ${isRecording ? 'btn-primary' : 'btn-secondary'}`}
                style={{ position: 'absolute', right: '8px', borderRadius: 'var(--radius-full)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Mic size={14} />
                <span>{isRecording ? 'Listening...' : 'Voice AI'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/report-lost" className="btn btn-primary btn-lg" style={{ borderRadius: 'var(--radius-full)', padding: '16px 36px' }}>
                Report Lost Item
              </Link>
              <Link href="/report-found" className="btn btn-obsidian btn-lg" style={{ borderRadius: 'var(--radius-full)', padding: '16px 36px', backgroundColor: 'rgba(10, 15, 30, 0.85)', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>Submit Found Item</span>
                <Search size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 3. BENTO GRID DETAILS ==================== */}
      <section style={{ padding: '64px 0 80px', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="bento-grid">
            
            {/* Bento Card 1 (Col 2): AI Similarity Simulator */}
            <div className="bento-card bento-col-2" style={{ padding: '32px' }}>
              <div>
                <div className="badge badge-privacy" style={{ marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Lock size={12} />
                  <span>Privacy Secrecy Shield</span>
                </div>
                <h3>AI Multimodal Vision Matching</h3>
                <p style={{ fontSize: '0.94rem', marginTop: '4px' }}>
                  Found photos are securely encrypted and hidden from the public feed to block fake claims. AI background matching compares items securely.
                </p>
              </div>

              {/* Match Visual Simulation */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '16px', alignItems: 'center', backgroundColor: 'var(--surface)', padding: '16px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginTop: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '4px' }}>LOST REPORT DESCRIPTION</div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--obsidian)' }}>Milton Blue Bottle</strong>
                </div>

                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--success-bg)',
                  border: '2px solid var(--success-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: 'var(--success-green)',
                  fontWeight: 800,
                  fontSize: '0.9rem'
                }}>
                  <div>96%</div>
                  <div style={{ fontSize: '0.5rem' }}>MATCH</div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '4px' }}>SECURE LOCKER PHOTO MATCH</div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--obsidian)' }}>Milton Bottle</strong>
                </div>
              </div>
            </div>

            {/* Bento Card 2 (Col 1): Locker Desk indicators */}
            <div className="bento-card" style={{ padding: '28px' }}>
              <div>
                <h3>Locker Registry</h3>
                <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>Check secure locker drop-off locations.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', margin: '20px 0' }}>
                {['A01', 'A02', 'A03', 'A04', 'B08', 'B12', 'C01', 'C05'].map((lock, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      padding: '8px 4px', 
                      borderRadius: 'var(--radius-sm)', 
                      backgroundColor: ['A04', 'B12', 'C05'].includes(lock) ? 'var(--primary-light)' : 'var(--surface)', 
                      border: '1px solid var(--border)', 
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textAlign: 'center',
                      color: ['A04', 'B12', 'C05'].includes(lock) ? 'var(--primary)' : 'var(--obsidian)',
                      cursor: 'pointer'
                    }}
                    onClick={() => showToast(`Locker ${lock} is occupied with an AI-matched item.`)}
                  >
                    {lock}
                  </div>
                ))}
              </div>
              
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
                <span>Highlighted lockers have pending AI matches.</span>
              </div>
            </div>

            {/* Bento Card 3 (Col 3): Active pre-request queue feed */}
            <div className="bento-card bento-col-3" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <h2>Active Pre-Request Queue</h2>
                  <p>Campus lost feed. Click &quot;Claim Item&quot; to verify your identity.</p>
                </div>
                <Link href="/lost" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>View Full Feed</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {/* Lost Item 1 */}
                <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
                  <span className="badge badge-success" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>96% AI MATCH DETECTED</span>
                  <h4 style={{ marginBottom: '4px' }}>Dark Blue Milton Bottle</h4>
                  <p style={{ fontSize: '0.85rem', marginBottom: '12px' }}>1000ml stainless steel bottle with a silver cap and scratch near base.</p>
                  <button 
                    className="btn btn-primary btn-sm" 
                    style={{ width: '100%' }}
                    onClick={() => {
                      setSelectedClaimTitle('Dark Blue Milton Bottle');
                      setPassGenerated(false);
                      setShowClaimModal(true);
                    }}
                  >
                    Claim Item
                  </button>
                </div>

                {/* Lost Item 2 */}
                <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
                  <span className="badge" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>PRE-REQUEST QUEUED</span>
                  <h4 style={{ marginBottom: '4px' }}>Black Leather Slim Wallet</h4>
                  <p style={{ fontSize: '0.85rem', marginBottom: '12px' }}>Black WildHorn leather wallet containing Student ID card and metro pass.</p>
                  <button 
                    className="btn btn-primary btn-sm" 
                    style={{ width: '100%' }}
                    onClick={() => {
                      setSelectedClaimTitle('Black Leather Slim Wallet');
                      setPassGenerated(false);
                      setShowClaimModal(true);
                    }}
                  >
                    Claim Item
                  </button>
                </div>

                {/* Lost Item 3 */}
                <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
                  <span className="badge" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>PRE-REQUEST QUEUED</span>
                  <h4 style={{ marginBottom: '4px' }}>Casio fx-991EX Calculator</h4>
                  <p style={{ fontSize: '0.85rem', marginBottom: '12px' }}>Scientific calculator with a barcode sticker on the rear cover.</p>
                  <button 
                    className="btn btn-primary btn-sm" 
                    style={{ width: '100%' }}
                    onClick={() => {
                      setSelectedClaimTitle('Casio fx-991EX Calculator');
                      setPassGenerated(false);
                      setShowClaimModal(true);
                    }}
                  >
                    Claim Item
                  </button>
                </div>
              </div>
            </div>

            {/* Bento Card 4 (Col 3): Switcher preview roles */}
            <div className="bento-card bento-col-3" style={{ padding: '36px' }}>
              <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 16px' }}>
                <h3>Explore Portal Roles</h3>
                <p style={{ fontSize: '0.9rem' }}>Toggle preview views below.</p>
                
                <div style={{ display: 'inline-flex', gap: '6px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '4px', borderRadius: 'var(--radius-full)', marginTop: '12px' }}>
                  <button 
                    onClick={() => setActiveTab('student')}
                    className={`btn btn-sm ${activeTab === 'student' ? 'btn-obsidian' : 'btn-secondary'}`}
                    style={{ borderRadius: 'var(--radius-full)' }}
                  >
                    Student View
                  </button>
                  <button 
                    onClick={() => setActiveTab('admin')}
                    className={`btn btn-sm ${activeTab === 'admin' ? 'btn-obsidian' : 'btn-secondary'}`}
                    style={{ borderRadius: 'var(--radius-full)' }}
                  >
                    Admin Desk
                  </button>
                </div>
              </div>

              <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
                {activeTab === 'student' ? (
                  <div>
                    <h4>Student & Staff View</h4>
                    <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>Report lost items, track claim verification questions, and search active locker inventories.</p>
                  </div>
                ) : (
                  <div>
                    <h4>Locker Admin Control View</h4>
                    <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>Physical inventory list, security passcode matching approval queue, manual overrides.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Bento Card 5 (Col 3): Crimson red accent card at bottom */}
            <div className="bento-card bento-col-3" style={{ padding: '54px', background: 'linear-gradient(135deg, #D2122E 0%, #B80F27 100%)', color: '#FFFFFF' }}>
              <div style={{ maxWidth: '640px' }}>
                <h2 style={{ color: '#FFFFFF', marginBottom: '12px' }}>
                  Let&apos;s recover campus items. Starting today.
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '28px', fontSize: '1.08rem' }}>
                  Your lost belongings don&apos;t have to stay lost. We&apos;ve made campus recovery seamless, secure, and instant.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/report-lost" className="btn btn-obsidian" style={{ backgroundColor: 'var(--obsidian)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span>Report Lost Item</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/report-found" className="btn btn-outline" style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span>Submit Found Item</span>
                    <Search size={16} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 4. CLEAN SYSTEM FOOTER ==================== */}
      <footer style={{ padding: '60px 0 32px', backgroundColor: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(2, 1fr)', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'var(--primary)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800
                }}>
                  K
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--obsidian)' }}>
                  Khoj<span style={{ color: 'var(--primary)' }}>been</span> AI
                </span>
              </div>
              <p style={{ fontSize: '0.92rem', maxWidth: '320px' }}>
                Connecting students with lost belongings — seamlessly, securely, instantly.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, marginTop: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={12} />
                <span>RECOVERING LIVES EVERY SEMESTER</span>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>PLATFORM</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
                <li><Link href="/lost" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Find Item</Link></li>
                <li><Link href="/report-lost" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Report Lost</Link></li>
                <li><Link href="/report-found" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Found Vault</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>SUPPORT</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
                <li><Link href="/admin" style={{ color: 'var(--muted)', textDecoration: 'none' }}>College Admin Desk</Link></li>
                <li><a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Campus Security</a></li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '28px', borderTop: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--muted)' }}>
            <div>&copy; 2026 Khojbeen AI. All rights reserved.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--success-green)', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success-green)' }}></span>
              SYSTEM ONLINE
            </div>
          </div>
        </div>
      </footer>

      {/* ==================== CLAIM QUIZ MODAL ==================== */}
      {showClaimModal && (
        <div className="modal-backdrop" onClick={() => setShowClaimModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowClaimModal(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--muted)' }}
            >
              <X size={20} />
            </button>

            <div className="badge badge-success" style={{ marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={12} />
              <span>AI Security Claim Quiz</span>
            </div>
            <h2>Verify Ownership for {selectedClaimTitle}</h2>
            <p style={{ fontSize: '0.92rem', marginTop: '4px' }}>
              To prevent fraudulent claims, answer these dynamic AI verification questions generated from item recovery logs.
            </p>

            {!passGenerated ? (
              <form onSubmit={handleQuizSubmit} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--obsidian)' }}>
                    Question 1: What specific brand logo or mark is on the item?
                  </label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="Your answer..."
                    value={quizAnswer1}
                    onChange={(e) => setQuizAnswer1(e.target.value)}
                    required
                    style={{ marginTop: '6px' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--obsidian)' }}>
                    Question 2: Specify any unique scratch, sticker, or internal content.
                  </label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="Your answer..."
                    value={quizAnswer2}
                    onChange={(e) => setQuizAnswer2(e.target.value)}
                    required
                    style={{ marginTop: '6px' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '8px', width: '100%' }}>
                  Verify Answers & Generate Pickup Pass
                </button>
              </form>
            ) : (
              <div style={{ marginTop: '24px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--success-green)', textAlign: 'center' }}>
                <div className="badge badge-success" style={{ marginBottom: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle size={12} />
                  <span>OWNERSHIP VERIFIED (98.4% MATCH)</span>
                </div>
                <h3 style={{ color: 'var(--obsidian)' }}>Verification Pickup Pass Generated</h3>
                <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Show this passcode at Security Desk B to collect your item.</p>
                <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '3px', margin: '14px 0' }}>
                  DTU-PASS-8849
                </div>
                <button onClick={() => setShowClaimModal(false)} className="btn btn-obsidian btn-sm" style={{ marginTop: '8px' }}>
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
