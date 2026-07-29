'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Search, Calendar, ShieldAlert } from 'lucide-react';

export default function LostFeedPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const lostItems = [
    {
      id: 'lost_001',
      title: 'Dark Blue Stainless Water Bottle',
      category: 'Water Bottle',
      description: 'Milton 1000ml stainless steel bottle with a silver cap and a small scratch near the base.',
      locationLost: 'Central Library, 2nd Floor',
      reporterName: 'Aarav Sharma',
      imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=80',
      status: 'AI_MATCHED'
    },
    {
      id: 'lost_002',
      title: 'Black Leather Slim Wallet',
      category: 'Wallet',
      description: 'Black WildHorn genuine leather wallet containing Student ID card and metro pass.',
      locationLost: 'Main Canteen Counter A',
      reporterName: 'Priya Verma',
      imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80',
      status: 'PRE_REQUEST'
    },
    {
      id: 'lost_003',
      title: 'Scientific Calculator fx-991EX',
      category: 'Calculator',
      description: 'Casio ClassWiz fx-991EX scientific calculator with a small barcode sticker on the rear cover.',
      locationLost: 'Physics Lab 3, Block B',
      reporterName: 'Rohan Gupta',
      imageUrl: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=500&auto=format&fit=crop&q=80',
      status: 'PRE_REQUEST'
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Items' },
    { key: 'Water Bottle', label: 'Water Bottles' },
    { key: 'Wallet', label: 'Wallets & IDs' },
    { key: 'Calculator', label: 'Calculators' }
  ];

  const filteredItems = lostItems.filter(item => {
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.locationLost.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: 'calc(var(--navbar-h) + 40px)', paddingBottom: '80px', backgroundColor: 'var(--surface)', minHeight: '90vh' }}>
      <div className="container">
        
        {/* Header Block */}
        <div style={{ marginBottom: '32px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>Campus Lost Feed</div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>Search Lost Belongings</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.02rem' }}>Browse active pre-requests or search using natural keywords.</p>
        </div>

        {/* Filters Block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          
          {/* Search Input */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', maxWidth: '640px' }}>
            <input 
              type="text" 
              className="input-field" 
              style={{ paddingLeft: '44px', height: '48px' }}
              placeholder="Search lost items (e.g. 'Milton bottle', 'Wallet')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span style={{ position: 'absolute', left: '16px', color: 'var(--muted)', display: 'flex', alignItems: 'center' }}>
              <Search size={18} />
            </span>
          </div>

          {/* Category Pills Row */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`btn btn-sm ${selectedCategory === cat.key ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: 'var(--radius-full)', padding: '8px 20px' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Grid Feed */}
        <div className="grid-3">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              style={{ 
                backgroundColor: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
              }}
              className="bento-card"
            >
              <div>
                {/* Card Image Banner */}
                <div style={{ height: '200px', backgroundColor: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span 
                    className={`badge ${item.status === 'AI_MATCHED' ? 'badge-success' : ''}`}
                    style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '0.72rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    {item.status === 'AI_MATCHED' ? 'AI MATCH DETECTED' : 'PRE-REQUEST QUEUED'}
                  </span>
                </div>

                {/* Card Text Content */}
                <div style={{ padding: '24px' }}>
                  <span className="badge" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>{item.category}</span>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--obsidian)', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', marginBottom: '16px', color: 'var(--muted)', lineHeight: 1.5 }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid var(--border)', paddingTop: '16px', fontSize: '0.85rem', color: 'var(--muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={14} style={{ color: 'var(--primary)' }} />
                      <span>Lost at: <strong>{item.locationLost}</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div style={{ padding: '0 24px 24px' }}>
                <Link 
                  href="/" 
                  className="btn btn-primary btn-sm" 
                  style={{ width: '100%', height: '38px', borderRadius: 'var(--radius-md)' }}
                >
                  Claim This Item
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
