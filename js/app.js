/**
 * Khojbeen AI Lost & Found Assistant - Application Controller
 */

const API_BASE = ''; // Same origin

document.addEventListener('DOMContentLoaded', () => {
  initRoleSwitcher();
  initModals();
  initVoiceRecorder();
  initFormSubmissions();
  initSearchAndFilters();
  
  // Load initial Lost items feed
  loadLostItemsFeed();
  loadAdminFoundInventory();
});

// ─── 1. Role Switcher (User | College Admin | Super Admin) ─────────────────
function initRoleSwitcher() {
  const roleBtns = document.querySelectorAll('.role-btn');
  const roleViews = document.querySelectorAll('.role-view');

  roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetRole = btn.getAttribute('data-role');

      roleBtns.forEach(b => b.classList.remove('active'));
      roleViews.forEach(v => v.style.display = 'none');

      btn.classList.add('active');
      const activeView = document.getElementById(`view-${targetRole}`);
      if (activeView) {
        activeView.style.display = 'block';
      }

      if (targetRole === 'admin') {
        loadAdminFoundInventory();
      }
    });
  });
}

// ─── 2. Modals Control ─────────────────────────────────────────────────────
function initModals() {
  const btnOpenLost = document.getElementById('btn-open-lost-modal');
  const btnOpenFound = document.getElementById('btn-open-found-modal');
  
  const modalLost = document.getElementById('modal-lost');
  const modalFound = document.getElementById('modal-found');
  const modalClaim = document.getElementById('modal-claim');

  if (btnOpenLost) btnOpenLost.addEventListener('click', () => openModal('modal-lost'));
  if (btnOpenFound) btnOpenFound.addEventListener('click', () => openModal('modal-found'));

  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });
}

function openModal(id) {
  closeAllModals();
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

// ─── 3. Voice AI Assistant Simulator ───────────────────────────────────────
function initVoiceRecorder() {
  const micBtn = document.getElementById('btn-mic-lost');
  const statusText = document.getElementById('voice-status-lost');
  const waveform = document.getElementById('waveform-lost');
  const titleInput = document.getElementById('lost-title');
  const descInput = document.getElementById('lost-desc');

  let isRecording = false;

  if (!micBtn) return;

  micBtn.addEventListener('click', () => {
    if (!isRecording) {
      isRecording = true;
      micBtn.classList.add('recording');
      waveform.classList.add('active');
      statusText.textContent = 'Listening... Speak your lost item details now.';

      // Simulate Speech-to-Text conversion after 3 seconds
      setTimeout(() => {
        isRecording = false;
        micBtn.classList.remove('recording');
        waveform.classList.remove('active');
        statusText.textContent = 'Voice Statement Transcribed by AI!';
        
        // Auto-fill form fields from simulated Voice AI
        titleInput.value = 'Blue Stainless Steel Water Bottle';
        descInput.value = 'Transcribed Voice Statement: "Mera blue Milton bottle central library 2nd floor study room me reh gaya."';
        showToast('🎙️ AI Transcribed: "Blue Milton Bottle lost at Central Library"');
      }, 3200);
    }
  });
}

// ─── 4. Load Public Lost Feed ──────────────────────────────────────────────
async function loadLostItemsFeed(category = 'ALL', search = '') {
  const grid = document.getElementById('lost-items-grid');
  if (!grid) return;

  grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: 40px;">Loading Lost Items Feed...</div>';

  try {
    const url = `/api/lost?category=${encodeURIComponent(category)}&search=${encodeURIComponent(search)}`;
    const res = await fetch(url);
    const items = await res.json();

    if (!items || items.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: 40px;">No lost items reported matching your search. Use "Report Lost Item" to add a Pre-Request!</div>';
      return;
    }

    grid.innerHTML = items.map(item => `
      <div class="item-card">
        <div class="item-img-box">
          <img src="${item.imageUrl}" alt="${item.title}" class="item-img">
          <span class="item-badge-overlay" style="background: ${item.status === 'AI_MATCHED' ? '#10B981' : 'var(--primary)'}; color: #FFF;">
            ${item.status === 'AI_MATCHED' ? 'AI MATCH DETECTED' : 'PRE-REQUEST QUEUED'}
          </span>
        </div>
        <div class="item-content">
          <div class="badge" style="margin-bottom: 8px; font-size: 0.78rem;">${item.category}</div>
          <h3 style="font-size: 1.15rem; margin-bottom: 6px;">${item.title}</h3>
          <p style="font-size: 0.9rem; margin-bottom: 12px;">${item.description}</p>
          <div style="font-size: 0.85rem; color: var(--muted); display: flex; align-items: center; gap: 4px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Lost at: <strong>${item.locationLost}</strong>
          </div>
          <div class="item-meta">
            <span>Reported by: ${item.reporterName}</span>
            <button class="btn btn-primary btn-sm btn-claim" data-id="${item._id}" data-title="${item.title}">
              Claim This Item
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach Claim Click Handlers
    document.querySelectorAll('.btn-claim').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-id');
        openClaimModal(itemId, btn.getAttribute('data-title'));
      });
    });

  } catch (e) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--primary);">Error loading items: ${e.message}</div>`;
  }
}

// ─── 5. Admin Found Items Inventory ────────────────────────────────────────
async function loadAdminFoundInventory() {
  const tbody = document.getElementById('admin-found-tbody');
  if (!tbody) return;

  try {
    const res = await fetch('/api/admin/found');
    const items = await res.json();

    tbody.innerHTML = items.map(item => `
      <tr>
        <td><strong style="color: var(--primary);">${item.securityLockerNumber || 'LOCKER-A01'}</strong></td>
        <td>
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${item.foundImageUrl}" style="width: 44px; height: 44px; border-radius: 6px; object-fit: cover;">
            <div>
              <strong style="color: var(--obsidian);">${item.title}</strong>
              <div style="font-size: 0.8rem; color: var(--muted);">${item.description}</div>
            </div>
          </div>
        </td>
        <td>${item.category}</td>
        <td>${item.locationFound}</td>
        <td>${item.finderName}</td>
        <td>
          <span class="badge badge-privacy" style="font-size: 0.75rem; margin-bottom: 0;">
            🔒 Hidden from Public
          </span>
        </td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="showToast('Physical Locker Verified')">
            Verify Locker
          </button>
        </td>
      </tr>
    `).join('');
  } catch (e) {
    tbody.innerHTML = `<tr><td colspan="7">Failed to load admin inventory.</td></tr>`;
  }
}

// ─── 6. Search & Filters ───────────────────────────────────────────────────
function initSearchAndFilters() {
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');

  let debounceTimer;

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        loadLostItemsFeed(categoryFilter.value, searchInput.value);
      }, 300);
    });
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', () => {
      loadLostItemsFeed(categoryFilter.value, searchInput ? searchInput.value : '');
    });
  }
}

// ─── 7. Form Submissions ───────────────────────────────────────────────────
function initFormSubmissions() {
  // Form: Report Lost Item
  const formLost = document.getElementById('form-report-lost');
  if (formLost) {
    formLost.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const payload = {
        title: document.getElementById('lost-title').value,
        category: document.getElementById('lost-category').value,
        description: document.getElementById('lost-desc').value,
        locationLost: document.getElementById('lost-location').value,
        reporterName: document.getElementById('lost-name').value,
        reporterContact: document.getElementById('lost-contact').value,
      };

      try {
        const res = await fetch('/api/lost', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          showToast('✅ Lost item reported & registered in AI Pre-Request Queue!');
          closeAllModals();
          formLost.reset();
          loadLostItemsFeed();
        }
      } catch (err) {
        showToast('Error submitting report: ' + err.message);
      }
    });
  }

  // Form: Report Found Item (PRIVACY PROTECTED)
  const formFound = document.getElementById('form-report-found');
  if (formFound) {
    formFound.addEventListener('submit', async (e) => {
      e.preventDefault();

      const payload = {
        title: document.getElementById('found-title').value,
        category: document.getElementById('found-category').value,
        description: document.getElementById('found-desc').value,
        locationFound: document.getElementById('found-location').value,
        finderName: document.getElementById('found-finder').value,
        finderContact: '+91 99887 11223',
        securityLockerNumber: document.getElementById('found-locker').value,
      };

      try {
        const res = await fetch('/api/found', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (res.ok) {
          showToast('🔒 Found item submitted securely! Hidden from public view.');
          if (data.matchDetected) {
            setTimeout(() => {
              showToast(`🎯 AI MATCH FOUND! Confidence: ${data.confidenceScore}%. Pre-Request owner notified!`);
            }, 1000);
          }
          closeAllModals();
          formFound.reset();
          loadLostItemsFeed();
          loadAdminFoundInventory();
        }
      } catch (err) {
        showToast('Error submitting found item: ' + err.message);
      }
    });
  }

  // Form: Claim Quiz
  const formClaim = document.getElementById('form-claim-quiz');
  if (formClaim) {
    formClaim.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const payload = {
        lostItemId: document.getElementById('claim-item-id').value,
        answers: [
          document.getElementById('quiz-a1').value,
          document.getElementById('quiz-a2').value
        ]
      };

      try {
        const res = await fetch('/api/claims/verify-quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (data.success) {
          const passBox = document.getElementById('claim-pass-box');
          const passCode = document.getElementById('claim-pass-code');
          passCode.textContent = data.passCode;
          passBox.style.display = 'block';
          showToast('🎯 Verification Passed! Pickup Passcode Generated.');
        }
      } catch (err) {
        showToast('Verification failed: ' + err.message);
      }
    });
  }
}

// Open Claim Quiz Modal
function openClaimModal(itemId, title) {
  document.getElementById('claim-item-id').value = itemId;
  document.getElementById('claim-pass-box').style.display = 'none';
  openModal('modal-claim');
}

// ─── 8. Toast Notifications ────────────────────────────────────────────────
function showToast(message) {
  let toast = document.getElementById('ui-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'ui-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--obsidian);
      color: #FFFFFF;
      padding: 14px 22px;
      border-radius: 10px;
      font-size: 0.92rem;
      font-weight: 600;
      z-index: 9999;
      box-shadow: 0 10px 25px rgba(10,15,30,0.3);
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(10px);
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 3500);
}
