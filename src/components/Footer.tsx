'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/register') {
    return null;
  }
  return (
    <footer style={{ padding: '60px 0 32px', backgroundColor: 'var(--white)', borderTop: '1px solid var(--border)', marginTop: '80px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(3, 1fr)', gap: '40px', marginBottom: '40px' }}>
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
              AI-powered Smart Campus Lost & Found Assistant with Voice AI, Multimodal Matching, and Privacy Shield Secrecy.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: 'var(--obsidian)' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link></li>
              <li><Link href="/lost" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Public Lost Feed</Link></li>
              <li><Link href="/report-lost" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Voice AI Reporter</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: 'var(--obsidian)' }}>Portals</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><Link href="/report-found" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Found Vault</Link></li>
              <li><Link href="/admin" style={{ color: 'var(--muted)', textDecoration: 'none' }}>College Admin Desk</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: 'var(--obsidian)' }}>Privacy & Safety</h4>
            <div style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'flex-start', gap: '6px', color: 'var(--muted)' }}>
              <Lock size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
              <p>Found item images & internal specs are encrypted and hidden from public view to prevent fake claims.</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '28px', borderTop: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--muted)' }}>
          <div>&copy; 2026 Khojbeen AI Assistant. All rights reserved.</div>
          <div>Smart Campus Recovery Network</div>
        </div>
      </div>
    </footer>
  );
}
