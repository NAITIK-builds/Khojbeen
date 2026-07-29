'use client';

import React from 'react';
import { Lock } from 'lucide-react';

export default function AdminPage() {
  const foundInventory = [
    {
      locker: 'LOCKER-A04',
      title: 'Dark Blue Insulated Bottle',
      category: 'Water Bottle',
      location: 'Central Library 2nd Floor',
      finder: 'Security Staff Karan',
      date: '2026-07-29',
      matchScore: '96% (AI Match)',
      privacy: 'Hidden from Public'
    },
    {
      locker: 'LOCKER-B12',
      title: 'Black WildHorn Leather Wallet',
      category: 'Wallet',
      location: 'Main Canteen Counter A',
      finder: 'Rohan (Student)',
      date: '2026-07-28',
      matchScore: '94% (AI Match)',
      privacy: 'Hidden from Public'
    },
    {
      locker: 'LOCKER-C05',
      title: 'Casio ClassWiz fx-991EX',
      category: 'Calculator',
      location: 'Physics Lab 3 Desk 14',
      finder: 'Lab Assistant Verma',
      date: '2026-07-27',
      matchScore: '89% (Pending Review)',
      privacy: 'Hidden from Public'
    }
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--navbar-h) + 40px)', paddingBottom: '60px', minHeight: '85vh', backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="badge">College Admin Control Desk</div>
            <h2>Physical Security Locker & Found Inventory</h2>
            <p>Review physical locker deposits, inspect AI auto-matches (94%+ similarity), and verify student pickup passcodes.</p>
          </div>
        </div>

        {/* Admin Stats Grid */}
        <div className="grid-3" style={{ marginBottom: '36px' }}>
          <div className="feature-card" style={{ padding: '24px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)' }}>TOTAL LOCKER ITEMS</span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--obsidian)', marginTop: '4px' }}>42 Items</div>
            <span style={{ fontSize: '0.8rem', color: 'var(--success-green)', fontWeight: 600 }}>Lockers A01 - B12 Occupied</span>
          </div>

          <div className="feature-card" style={{ padding: '24px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)' }}>PENDING AI MATCHES</span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)', marginTop: '4px' }}>3 Matches</div>
            <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>High Confidence (&gt;94%)</span>
          </div>

          <div className="feature-card" style={{ padding: '24px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)' }}>RECOVERY RATE</span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--obsidian)', marginTop: '4px' }}>94.5%</div>
            <span style={{ fontSize: '0.8rem', color: 'var(--success-green)', fontWeight: 600 }}>+3.2% vs last month</span>
          </div>
        </div>

        {/* Table */}
        <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Lock size={16} style={{ color: 'var(--primary)' }} />
            <h3 style={{ fontSize: '1.1rem' }}>Found Vault Registry & Locker Assignments</h3>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
                  <th style={{ padding: '14px 20px', color: 'var(--obsidian)' }}>Locker #</th>
                  <th style={{ padding: '14px 20px', color: 'var(--obsidian)' }}>Found Item Name</th>
                  <th style={{ padding: '14px 20px', color: 'var(--obsidian)' }}>Category</th>
                  <th style={{ padding: '14px 20px', color: 'var(--obsidian)' }}>Location Found</th>
                  <th style={{ padding: '14px 20px', color: 'var(--obsidian)' }}>Privacy Status</th>
                  <th style={{ padding: '14px 20px', color: 'var(--obsidian)' }}>AI Match Score</th>
                  <th style={{ padding: '14px 20px', color: 'var(--obsidian)' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {foundInventory.map((item, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--primary)' }}>{item.locker}</td>
                    <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--obsidian)' }}>{item.title}</td>
                    <td style={{ padding: '16px 20px', color: 'var(--muted)' }}>{item.category}</td>
                    <td style={{ padding: '16px 20px', color: 'var(--muted)' }}>{item.location}</td>
                    <td style={{ padding: '16px 20px' }}>
                      <span className="badge badge-privacy" style={{ fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Lock size={10} />
                        <span>{item.privacy}</span>
                      </span>
                    </td>
                    <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--success-green)' }}>{item.matchScore}</td>
                    <td style={{ padding: '16px 20px' }}>
                      <button className="btn btn-secondary btn-sm" onClick={() => alert(`Locker ${item.locker} verified for claim release.`)}>
                        Verify Pass
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
