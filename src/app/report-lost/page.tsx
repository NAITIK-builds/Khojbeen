'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mic, CheckCircle, MapPin, Tag, Phone, User, FileText, ChevronRight } from 'lucide-react';

export default function ReportLostPage() {
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Water Bottle');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [reporterName, setReporterName] = useState('');
  const [reporterContact, setReporterContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleMic = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        setTitle('Blue Stainless Steel Milton Water Bottle');
        setLocation('Central Library, 2nd Floor');
        setDescription('Transcribed Voice Statement: "Mera blue Milton bottle central library second floor study room me reh gaya."');
      }, 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push('/lost');
    }, 2000);
  };

  return (
    <div style={{ paddingTop: 'calc(var(--navbar-h) + 60px)', paddingBottom: '100px', backgroundColor: 'var(--surface)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge" style={{ marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Mic size={12} />
            <span>AI Pre-Request Reporter</span>
          </div>
          <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '-0.02em', marginBottom: '8px' }}>
            Report a Lost Belonging
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto' }}>
            Describe your item to the AI engine. You can type the details manually or tap to speak your voice statement.
          </p>
        </div>

        {submitted ? (
          <div style={{ 
            padding: '48px 32px', 
            backgroundColor: 'var(--white)', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid var(--success-green)', 
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div className="badge badge-success" style={{ marginBottom: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={12} />
              <span>PRE-REQUEST QUEUED</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--obsidian)', marginBottom: '12px' }}>Report Logged Successfully!</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.96rem', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.5 }}>
              Your pre-request statement is now active in the matching engine. You will be redirected to the public lost feed in a moment.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
              <span>Loading matching engine</span>
              <span className="dot-pulse"></span>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* 1. Voice AI Transcriber Panel (Redesigned) */}
            <div style={{ 
              backgroundColor: 'var(--white)', 
              borderRadius: 'var(--radius-lg)', 
              border: '1px solid var(--border)', 
              padding: '32px', 
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--obsidian)', fontWeight: 700, marginBottom: '4px' }}>
                    🎙️ Voice AI Transcription
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
                    Speak naturally. The AI will extract item descriptions, locations, and categories automatically.
                  </p>
                </div>
                {isRecording && (
                  <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <span className="live-dot" style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: 'var(--success-green)', borderRadius: '50%' }}></span>
                    <span>LIVE</span>
                  </span>
                )}
              </div>

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: 'var(--surface)', 
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)', 
                padding: '36px 24px',
                textAlign: 'center'
              }}>
                <button 
                  type="button" 
                  onClick={handleMic}
                  className={`mic-pulse-btn ${isRecording ? 'active' : ''}`}
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    backgroundColor: isRecording ? 'var(--primary)' : 'var(--obsidian)', 
                    color: '#FFFFFF',
                    border: 'none',
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Mic size={24} />
                </button>

                <strong style={{ fontSize: '0.92rem', color: 'var(--obsidian)', marginTop: '16px', display: 'block' }}>
                  {isRecording ? 'Listening... Speak clearly now' : 'Tap Microphone to Speak Voice Statement'}
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '4px' }}>
                  Supports Hindi, English, and mix code transcripts
                </span>

                {/* Animated Waveform Simulator */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '4px', 
                  height: '24px', 
                  marginTop: '20px' 
                }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bar) => (
                    <div 
                      key={bar} 
                      style={{ 
                        width: '3px', 
                        backgroundColor: isRecording ? 'var(--primary)' : 'var(--border)', 
                        height: isRecording ? `${Math.floor(Math.random() * 20) + 4}px` : '4px',
                        transition: 'height 0.15s ease, background-color 0.3s ease',
                        borderRadius: '3px'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Manual Form Details (Redesigned with Outfit all-caps tags) */}
            <form onSubmit={handleSubmit} style={{ 
              backgroundColor: 'var(--white)', 
              borderRadius: 'var(--radius-lg)', 
              border: '1px solid var(--border)', 
              padding: '40px 32px', 
              boxShadow: 'var(--shadow-sm)'
            }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Section Title */}
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--obsidian)', fontWeight: 700 }}>
                    Report Specifications
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '2px' }}>
                    Verify or edit the details transcribed above.
                  </p>
                </div>

                {/* Row 1: Item Title */}
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    <FileText size={12} />
                    <span>ITEM TITLE / NAME</span>
                  </label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="e.g. Dark Blue Milton Water Bottle" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ height: '48px', fontSize: '0.95rem' }}
                  />
                </div>

                {/* Row 2: Category & Location Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      <Tag size={12} />
                      <span>CATEGORY</span>
                    </label>
                    <select 
                      className="input-field" 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      style={{ height: '48px', fontSize: '0.95rem', cursor: 'pointer' }}
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
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      <MapPin size={12} />
                      <span>LOCATION LOST</span>
                    </label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="e.g. Central Library, 2nd Floor" 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      style={{ height: '48px', fontSize: '0.95rem' }}
                    />
                  </div>
                </div>

                {/* Row 3: Description */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    DETAILED DESCRIPTION
                  </label>
                  <textarea 
                    className="input-field" 
                    style={{ height: '110px', fontSize: '0.95rem', padding: '14px 16px', lineHeight: 1.5 }}
                    placeholder="Describe unique identifiers, stickers, brands, or marks..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                {/* Row 4: Contact Details Section */}
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginTop: '12px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--obsidian)', fontWeight: 700 }}>
                    Finder Contact Details
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '2px' }}>
                    Your contact information remains secure and is only shared with verified claim matches.
                  </p>
                </div>

                {/* Row 5: Name & Contact Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      <User size={12} />
                      <span>YOUR NAME</span>
                    </label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="e.g. Aarav Sharma" 
                      value={reporterName}
                      onChange={(e) => setReporterName(e.target.value)}
                      required
                      style={{ height: '48px', fontSize: '0.95rem' }}
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 800, color: 'var(--obsidian)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      <Phone size={12} />
                      <span>CONTACT PHONE</span>
                    </label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="e.g. +91 98765 43210" 
                      value={reporterContact}
                      onChange={(e) => setReporterContact(e.target.value)}
                      required
                      style={{ height: '48px', fontSize: '0.95rem' }}
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg" 
                  style={{ 
                    marginTop: '20px', 
                    width: '100%', 
                    height: '52px',
                    borderRadius: 'var(--radius-md)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '1rem',
                    fontWeight: 700
                  }}
                >
                  <span>Submit & Add to AI Pre-Request Queue</span>
                  <ChevronRight size={18} />
                </button>

              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
