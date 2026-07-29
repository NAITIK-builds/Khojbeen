'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function ReportFoundPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Water Bottle');
  const [location, setLocation] = useState('');
  const [locker, setLocker] = useState('LOCKER-B12');
  const [finderName, setFinderName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push('/admin');
    }, 2500);
  };

  return (
    <div style={{ paddingTop: 'calc(var(--navbar-h) + 40px)', paddingBottom: '60px', minHeight: '85vh', backgroundColor: 'var(--white)' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <div className="badge badge-privacy" style={{ marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <Lock size={12} />
          <span>Privacy Secrecy Enabled</span>
        </div>
        <h2>Submit Found Item to Vault</h2>
        <p style={{ marginBottom: '28px' }}>
          <strong>Privacy Guarantee:</strong> Found item photos & detailed internal specs are <em>strictly hidden from the public feed</em> to prevent fraudulent claims!
        </p>

        {submitted ? (
          <div style={{ padding: '32px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--privacy-purple)', textAlign: 'center' }}>
            <div className="badge badge-privacy" style={{ marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Lock size={12} />
              <span>SECURELY STORED IN VAULT</span>
            </div>
            <h3>Found Item Logged & AI Match Executed!</h3>
            <p style={{ marginTop: '8px' }}>Item assigned to physical security locker `{locker}`. Pre-request owners are being alerted.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="feature-card" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Found Item Title</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. Found Blue Insulated Bottle" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Category</label>
                  <select 
                    className="input-field" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Water Bottle">Water Bottle</option>
                    <option value="Wallet">Wallet / ID Card</option>
                    <option value="Calculator">Calculator</option>
                    <option value="Bag">Bag</option>
                    <option value="Keys">Keys</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Location Found</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="e.g. Central Library Table 12" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Security Locker Number</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={locker}
                    onChange={(e) => setLocker(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Finder Name / Desk</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="e.g. Security Desk Staff" 
                    value={finderName}
                    onChange={(e) => setFinderName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-obsidian btn-lg" style={{ marginTop: '12px', width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Lock size={16} />
                <span>Securely Log Found Item & Run AI Multimodal Matcher</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
