'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Lock, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Simulate user session for showcase
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar transparent / solid state
  const isHomepage = pathname === '/';
  const isTransparent = isHomepage && scrollY <= 20 && !mobileMenuOpen;

  // CSS Transition values
  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: 'var(--navbar-h)',
    transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: isTransparent 
      ? 'transparent' 
      : mobileMenuOpen 
        ? '#FFFFFF' 
        : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: isTransparent ? 'none' : 'blur(12px)',
    WebkitBackdropFilter: isTransparent ? 'none' : 'blur(12px)',
    borderBottom: isTransparent 
      ? '1px solid transparent' 
      : '1px solid var(--border)',
    boxShadow: isTransparent ? 'none' : 'var(--shadow-sm)',
    color: isTransparent ? '#FFFFFF' : 'var(--obsidian)'
  };

  const linkStyle = (active: boolean): React.CSSProperties => {
    return {
      fontSize: '0.95rem',
      fontWeight: active ? 700 : 500,
      color: isTransparent ? 'rgba(255, 255, 255, 0.9)' : 'var(--obsidian)',
      textDecoration: 'none',
      position: 'relative',
      padding: '8px 0',
      transition: 'color 0.2s ease'
    };
  };

  return (
    <>
      <header style={navStyle}>
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* 1. Left: Brand Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '34px',
              height: '34px',
              backgroundColor: isTransparent ? '#FFFFFF' : 'var(--primary)',
              color: isTransparent ? 'var(--primary)' : '#FFFFFF',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.1rem',
              transition: 'background-color 0.3s ease, color 0.3s ease'
            }}>
              K
            </div>
            <span style={{ 
              fontSize: '1.35rem', 
              fontWeight: 800, 
              color: isTransparent ? '#FFFFFF' : 'var(--obsidian)', 
              letterSpacing: '-0.02em',
              transition: 'color 0.3s ease'
            }}>
              Khoj<span style={{ color: isTransparent ? '#FFFFFF' : 'var(--primary)', opacity: isTransparent ? 0.9 : 1 }}>been</span>
            </span>
          </Link>

          {/* 2. Center: Desktop Nav Links (Scroll Aware Active Indicator) */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-only">
            <Link href="/" style={linkStyle(pathname === '/')}>
              Home
              {pathname === '/' && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: isTransparent ? '#FFFFFF' : 'var(--primary)',
                  borderRadius: '2px'
                }} />
              )}
            </Link>
            
            <Link href="/lost" style={linkStyle(pathname === '/lost')}>
              Lost Feed
              {pathname === '/lost' && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--primary)',
                  borderRadius: '2px'
                }} />
              )}
            </Link>

            <Link href="/report-lost" style={linkStyle(pathname === '/report-lost')}>
              Report Lost
              {pathname === '/report-lost' && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--primary)',
                  borderRadius: '2px'
                }} />
              )}
            </Link>

            <Link href="/report-found" style={linkStyle(pathname === '/report-found')}>
              Report Found
              {pathname === '/report-found' && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--primary)',
                  borderRadius: '2px'
                }} />
              )}
            </Link>

            <Link href="/admin" style={linkStyle(pathname === '/admin')}>
              Admin Desk
              {pathname === '/admin' && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--primary)',
                  borderRadius: '2px'
                }} />
              )}
            </Link>
          </nav>

          {/* 3. Right: Context-Aware Actions (Desktop) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-only">
            {!isLoggedIn ? (
              <>
                <Link 
                  href="/login"
                  style={{ 
                    fontSize: '0.92rem', 
                    fontWeight: 600, 
                    color: isTransparent ? '#FFFFFF' : 'var(--obsidian)', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Sign In
                </Link>

                <Link 
                  href="/report-lost" 
                  className="btn btn-sm"
                  style={{ 
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isTransparent ? '#FFFFFF' : 'var(--primary)',
                    color: isTransparent ? 'var(--primary)' : '#FFFFFF',
                    border: isTransparent ? '1px solid #FFFFFF' : 'none',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Report Item
                </Link>
              </>
            ) : (
              <>
                <Link 
                  href="/admin" 
                  style={{ 
                    fontSize: '0.92rem', 
                    fontWeight: 600, 
                    color: isTransparent ? '#FFFFFF' : 'var(--obsidian)', 
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <User size={16} />
                  <span>Dashboard</span>
                </Link>

                <button 
                  onClick={() => setIsLoggedIn(false)}
                  style={{ 
                    background: 'transparent',
                    border: 'none',
                    fontSize: '0.92rem', 
                    fontWeight: 600, 
                    color: isTransparent ? '#FFFFFF' : 'var(--primary)', 
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </>
            )}
          </div>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: isTransparent ? '#FFFFFF' : 'var(--obsidian)',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* ==================== MOBILE MENU OVERLAY ==================== */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          backgroundColor: '#FFFFFF',
          padding: '110px 32px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          animation: 'fadeIn 0.25s ease'
        }}>
          {/* Center Links (Italic serif Playfair Display style) */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '2.2rem',
                color: pathname === '/' ? 'var(--primary)' : 'var(--obsidian)',
                textDecoration: 'none',
                fontWeight: 400
              }}
            >
              Home
            </Link>

            <Link 
              href="/lost" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '2.2rem',
                color: pathname === '/lost' ? 'var(--primary)' : 'var(--obsidian)',
                textDecoration: 'none',
                fontWeight: 400
              }}
            >
              Lost Feed
            </Link>

            <Link 
              href="/report-lost" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '2.2rem',
                color: pathname === '/report-lost' ? 'var(--primary)' : 'var(--obsidian)',
                textDecoration: 'none',
                fontWeight: 400
              }}
            >
              Report Lost
            </Link>

            <Link 
              href="/report-found" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '2.2rem',
                color: pathname === '/report-found' ? 'var(--primary)' : 'var(--obsidian)',
                textDecoration: 'none',
                fontWeight: 400
              }}
            >
              Report Found
            </Link>

            <Link 
              href="/admin" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '2.2rem',
                color: pathname === '/admin' ? 'var(--primary)' : 'var(--obsidian)',
                textDecoration: 'none',
                fontWeight: 400
              }}
            >
              Admin Desk
            </Link>
          </nav>

          {/* Bottom Actions & Call to Action register panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
              {!isLoggedIn ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link 
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn btn-secondary"
                    style={{ width: '100%', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn btn-primary"
                    style={{ width: '100%', height: '48px' }}
                  >
                    Register as Finder
                  </Link>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link 
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn btn-secondary"
                    style={{ width: '100%', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                  >
                    <User size={16} />
                    <span>Go to Dashboard</span>
                  </Link>
                  <button 
                    onClick={() => {
                      setIsLoggedIn(false);
                      setMobileMenuOpen(false);
                    }}
                    className="btn btn-primary"
                    style={{ width: '100%', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>

            {/* Platform call to action panel */}
            <div style={{
              background: 'linear-gradient(135deg, #D2122E 0%, #B80F27 100%)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              color: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '6px' }}>Join campus recovery today</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.85rem', marginBottom: '16px' }}>
                Secure physical storage, background AI matches, and instant text alerts.
              </p>
              <Link 
                href="/register" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  color: '#FFFFFF', 
                  fontSize: '0.88rem', 
                  fontWeight: 700, 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>Request Account Access</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
