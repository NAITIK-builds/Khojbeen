'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/');
    }, 1200);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', minHeight: '100vh', backgroundColor: 'var(--white)' }}>
      
      {/* LEFT SIDE: Brand Editorial Panel */}
      <div style={{
        backgroundColor: '#F8FAFC',
        padding: '80px 72px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRight: '1px solid var(--border)'
      }}>
        {/* Massive Watermark "K" in background */}
        <div style={{
          position: 'absolute',
          bottom: '-120px',
          right: '-40px',
          fontSize: '32rem',
          fontWeight: 900,
          color: '#F1F5F9',
          userSelect: 'none',
          zIndex: 1,
          fontFamily: 'var(--font-main)'
        }}>
          K
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '480px' }}>
          {/* Vertical Red Bar Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <div style={{ width: '2px', height: '14px', backgroundColor: 'var(--primary)' }}></div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              ACCESS PLATFORM
            </span>
          </div>

          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: 'var(--obsidian)', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Bridging the gap between lost and found, <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary)' }}>instantly.</span>
          </h1>

          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Sign in to report items, search campus locker inventories, and generate secure ownership verification codes.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Clean Sign In Form */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 72px' }}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          
          {/* Logo header */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', textDecoration: 'none' }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--primary)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1rem'
            }}>
              K
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '-0.02em' }}>
              Khoj<span style={{ color: 'var(--primary)' }}>been</span>
            </span>
          </Link>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: '2.2rem', color: 'var(--obsidian)', marginBottom: '8px' }}>
            Welcome back
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginBottom: '32px' }}>
            Enter your campus credentials to access the portal.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Email Field */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                EMAIL ADDRESS
              </label>
              <input 
                type="email"
                className="input-field"
                placeholder="student@dtu.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ height: '48px', fontSize: '0.95rem' }}
              />
            </div>

            {/* Password Field */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  PASSWORD
                </label>
                <a href="#" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
                  Forgot password?
                </a>
              </div>
              <input 
                type="password"
                className="input-field"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ height: '48px', fontSize: '0.95rem' }}
              />
            </div>

            {/* Submit button */}
            <button 
              type="submit" 
              className="btn btn-obsidian" 
              style={{ 
                height: '52px', 
                width: '100%', 
                marginTop: '12px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '0 24px',
                borderRadius: 'var(--radius-sm)'
              }}
              disabled={loading}
            >
              <span>{loading ? 'SIGNING IN...' : 'SIGN IN'}</span>
              <span style={{ fontSize: '1.1rem' }}>↗</span>
            </button>

            {/* Registration link */}
            <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.92rem', color: 'var(--muted)' }}>
              Don&apos;t have an account?{' '}
              <Link href="/register" style={{ color: 'var(--obsidian)', fontWeight: 700, textDecoration: 'none' }}>
                Request access
              </Link>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
}
