'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/login');
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
              JOIN THE NETWORK
            </span>
          </div>

          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: 'var(--obsidian)', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Your report,<br />their <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary)' }}>relief.</span>
          </h1>

          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Become a verified finder or claim ownership. Join a community of campus users dedicated to reclaiming lost items.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Clean Register Form */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 72px' }}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          
          {/* Logo header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
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
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: '2.2rem', color: 'var(--obsidian)', marginBottom: '8px' }}>
            Create account
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginBottom: '28px' }}>
            Join the DTU campus recovery network today.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Full Name Field */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                FULL NAME
              </label>
              <input 
                type="text"
                className="input-field"
                placeholder="e.g. Luca Davinci"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ height: '44px', fontSize: '0.92rem' }}
              />
            </div>

            {/* Email Field */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                EMAIL
              </label>
              <input 
                type="email"
                className="input-field"
                placeholder="student@dtu.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ height: '44px', fontSize: '0.92rem' }}
              />
            </div>

            {/* Mobile Number Field */}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                MOBILE NUMBER
              </label>
              <input 
                type="tel"
                className="input-field"
                placeholder="e.g. +91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{ height: '44px', fontSize: '0.92rem' }}
              />
            </div>

            {/* Password & Confirm Fields Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  PASSWORD
                </label>
                <input 
                  type="password"
                  className="input-field"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ height: '44px', fontSize: '0.92rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  CONFIRM
                </label>
                <input 
                  type="password"
                  className="input-field"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={{ height: '44px', fontSize: '0.92rem' }}
                />
              </div>
            </div>

            {/* Submit button */}
            <button 
              type="submit" 
              className="btn btn-obsidian" 
              style={{ 
                height: '50px', 
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
              <span>{loading ? 'REGISTERING...' : 'REGISTER'}</span>
              <span style={{ fontSize: '1.1rem' }}>↗</span>
            </button>

            {/* Registration link */}
            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.92rem', color: 'var(--muted)' }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color: 'var(--obsidian)', fontWeight: 700, textDecoration: 'none' }}>
                Sign In
              </Link>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
}
