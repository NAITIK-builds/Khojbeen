'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mic, CheckCircle } from 'lucide-react';

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
    <div style={{ paddingTop: 'calc(var(--navbar-h) + 40px)', paddingBottom: '60px', minHeight: '85vh', backgroundColor: 'var(--white)' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <div className="badge" style={{ marginBottom: '12px' }}>AI Pre-Request Reporter</div>
        <h2>Report a Lost Belonging</h2>
        <p style={{ marginBottom: '28px' }}>Speak your report using Voice AI or type the details below.</p>

        {submitted ? (
          <div style={{ padding: '32px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--success-green)', textAlign: 'center' }}>
            <div className="badge badge-success" style={{ marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={12} />
              <span>PRE-REQUEST QUEUED</span>
            </div>
            <h3>Report Submitted Successfully!</h3>
            <p style={{ marginTop: '8px' }}>Your item is now monitored by the AI matching engine. Redirecting to Lost Feed...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="feature-card" style={{ padding: '36px' }}>
            {/* Audio Voice Box */}
            <div className="audio-recorder-box">
              <button 
                type="button" 
                onClick={handleMic}
                className={`mic-pulse-btn ${isRecording ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Mic size={24} />
              </button>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, marginTop: '10px', color: 'var(--obsidian)' }}>
                {isRecording ? 'Listening... Speak now!' : 'Tap Microphone to Speak Voice Statement'}
              </div>
              <div className={`wave-bars ${isRecording ? 'active' : ''}`}>
                <div className="wave-bar-item"></div>
                <div className="wave-bar-item"></div>
                <div className="wave-bar-item"></div>
                <div className="wave-bar-item"></div>
                <div className="wave-bar-item"></div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Item Title / Name</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. Dark Blue Milton Water Bottle" 
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
                  <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Location Lost</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="e.g. Library 2nd Floor" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Detailed Description</label>
                <textarea 
                  className="input-field" 
                  style={{ height: '80px' }}
                  placeholder="Mention unique marks, scratch, or serial numbers..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Your Name</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="e.g. Aarav Sharma" 
                    value={reporterName}
                    onChange={(e) => setReporterName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600 }}>Contact Phone</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="+91 98765 43210" 
                    value={reporterContact}
                    onChange={(e) => setReporterContact(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '12px', width: '100%' }}>
                Submit & Add to AI Pre-Request Queue
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
