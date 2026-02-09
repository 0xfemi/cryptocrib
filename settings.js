// Settings Page Functionality

// Load saved data from localStorage
function loadSettings() {
    const savedData = localStorage.getItem('cryptocrib_settings');
    if (savedData) {
        const data = JSON.parse(savedData);
        
        // Migrate old "Alex Morgan" to "0xfemi"
        let updated = false;
        if (data.cribName === 'Alex Morgan') {
            data.cribName = '0xfemi';
            updated = true;
        }
        if (data.username === 'Alex Morgan') {
            data.username = '0xfemi';
            updated = true;
        }
        if (updated) {
            localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
        }
        
        // Load username
        if (data.username) {
            document.getElementById('username').value = data.username;
        }
        
        // Load Crib Name
        if (data.cribName) {
            document.getElementById('crib-name').value = data.cribName;
            // Update sidebar name
            const sidebarName = document.getElementById('sidebar-name');
            if (sidebarName) {
                sidebarName.textContent = data.cribName;
            }
        } else {
            // Set default if no cribName exists
            document.getElementById('crib-name').value = '0xfemi';
            const sidebarName = document.getElementById('sidebar-name');
            if (sidebarName) {
                sidebarName.textContent = '0xfemi';
            }
        }
        
        // Load PFP
        if (data.pfp) {
            const pfpPreview = document.getElementById('pfp-preview');
            const sidebarAvatar = document.getElementById('sidebar-avatar');
            if (pfpPreview) pfpPreview.src = data.pfp;
            if (sidebarAvatar) sidebarAvatar.src = data.pfp;
        }
        
        // Load Learning Goals
        if (data.learningGoals) {
            document.getElementById('learning-goals').value = data.learningGoals;
        }
        
        // Load Social Connections
        if (data.social) {
            updateSocialStatus('twitter', data.social.twitter);
            updateSocialStatus('discord', data.social.discord);
            updateSocialStatus('linkedin', data.social.linkedin);
        }
    }
}

// Save settings to localStorage
function saveSettings() {
    const savedData = localStorage.getItem('cryptocrib_settings');
    const existingData = savedData ? JSON.parse(savedData) : {};
    
    const data = {
        username: document.getElementById('username').value,
        cribName: document.getElementById('crib-name').value,
        pfp: document.getElementById('pfp-preview').src,
        learningGoals: document.getElementById('learning-goals').value,
        social: {
            twitter: document.getElementById('btn-twitter').classList.contains('connected'),
            discord: document.getElementById('btn-discord').classList.contains('connected'),
            linkedin: document.getElementById('btn-linkedin').classList.contains('connected')
        },
        // Preserve wallets and sessions
        wallets: existingData.wallets || [],
        sessions: existingData.sessions || []
    };
    
    localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
    
    // Update sidebar
    const sidebarName = document.getElementById('sidebar-name');
    const sidebarAvatar = document.getElementById('sidebar-avatar');
    if (sidebarName) sidebarName.textContent = data.cribName;
    if (sidebarAvatar) sidebarAvatar.src = data.pfp;
    
    // Dispatch custom event to update dashboard welcome message (for same-tab updates)
    const event = new CustomEvent('settingsUpdated', {
        detail: { cribName: data.cribName, username: data.username }
    });
    window.dispatchEvent(event);
    
    // Also trigger a storage event manually for cross-tab communication
    // Note: This won't work in the same tab, but helps with multiple tabs
    try {
        const storageEvent = new Event('storage');
        Object.defineProperty(storageEvent, 'key', { value: 'cryptocrib_settings' });
        Object.defineProperty(storageEvent, 'newValue', { value: JSON.stringify(data) });
        window.dispatchEvent(storageEvent);
    } catch (e) {
        // Fallback if storage event can't be created
    }
    
    // Show success message
    showSuccessMessage('Settings saved successfully!');
    
    // Optional: Redirect to dashboard after a short delay to see the changes
    // Uncomment the following lines if you want auto-redirect:
    // setTimeout(function() {
    //     window.location.href = 'dashboard.html';
    // }, 1500);
}

// Update social connection status
function updateSocialStatus(platform, connected) {
    const btn = document.getElementById(`btn-${platform}`);
    const status = document.getElementById(`${platform}-status`);
    
    if (connected) {
        btn.classList.add('connected');
        if (status) {
            status.textContent = 'Connected';
        }
    } else {
        btn.classList.remove('connected');
        if (status) {
            status.textContent = '';
        }
    }
}

// Show success message
function showSuccessMessage(message) {
    // Create or get success message element
    let successMsg = document.querySelector('.settings-success');
    if (!successMsg) {
        successMsg = document.createElement('div');
        successMsg.className = 'settings-success';
        const container = document.querySelector('.settings-container');
        container.insertBefore(successMsg, container.firstChild.nextSibling);
    }
    
    successMsg.textContent = message;
    successMsg.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 3000);
}

// PFP Upload Handler
function handlePFPUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }
        
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Image size should be less than 5MB');
            return;
        }
        
        // Create preview
        const reader = new FileReader();
        reader.onload = function(e) {
            const pfpPreview = document.getElementById('pfp-preview');
            const sidebarAvatar = document.getElementById('sidebar-avatar');
            if (pfpPreview) pfpPreview.src = e.target.result;
            if (sidebarAvatar) sidebarAvatar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Wallet Connection for NFT Selection
async function connectWallet() {
    // Check if Web3 is available
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            
            // Add wallet to wallets list if not already there
            const savedData = localStorage.getItem('cryptocrib_settings');
            const data = savedData ? JSON.parse(savedData) : {};
            if (!data.wallets || !data.wallets.find(w => w.address.toLowerCase() === account.toLowerCase())) {
                if (!data.wallets) data.wallets = [];
                const isFirstWallet = data.wallets.length === 0;
                data.wallets.push({
                    address: account,
                    isPrimary: isFirstWallet,
                    label: isFirstWallet ? 'Primary Wallet' : 'Backup Wallet',
                    connectedAt: new Date().toISOString()
                });
                localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
                loadWallets();
            }
            
            // Show NFT selection modal (simplified - in production, you'd fetch NFTs from the wallet)
            showNFTSelectionModal(account);
        } catch (error) {
            console.error('Error connecting wallet:', error);
            alert('Failed to connect wallet. Please make sure you have a Web3 wallet installed.');
        }
    } else {
        // Prompt to install MetaMask or other wallet
        alert('Please install a Web3 wallet like MetaMask to use this feature.');
    }
}

// Show NFT Selection Modal (simplified version)
function showNFTSelectionModal(account) {
    // In a real implementation, you would:
    // 1. Fetch NFTs from the wallet using an API like OpenSea, Alchemy, etc.
    // 2. Display them in a modal
    // 3. Allow user to select one
    
    // For now, we'll simulate this with a prompt
    const nftUrl = prompt(`Enter NFT image URL for wallet ${account.substring(0, 6)}...${account.substring(38)}:\n\n(Note: In production, this would show your actual NFTs from your wallet)`);
    
    if (nftUrl) {
        const pfpPreview = document.getElementById('pfp-preview');
        const sidebarAvatar = document.getElementById('sidebar-avatar');
        if (pfpPreview) pfpPreview.src = nftUrl;
        if (sidebarAvatar) sidebarAvatar.src = nftUrl;
        
        // Store wallet info
        const data = JSON.parse(localStorage.getItem('cryptocrib_settings') || '{}');
        data.walletAddress = account;
        data.pfpSource = 'wallet';
        localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
        
        showSuccessMessage('NFT selected from wallet!');
    }
}

// Social Media Connection Handlers
function connectSocial(platform) {
    const btn = document.getElementById(`btn-${platform}`);
    const isConnected = btn.classList.contains('connected');
    
    if (isConnected) {
        // Disconnect
        if (confirm(`Disconnect ${platform}?`)) {
            updateSocialStatus(platform, false);
            saveSettings();
        }
    } else {
        // Connect - In production, this would open OAuth flow
        // For now, we'll simulate it
        const username = prompt(`Enter your ${platform} username:`);
        if (username) {
            updateSocialStatus(platform, true);
            saveSettings();
            showSuccessMessage(`${platform} connected successfully!`);
        }
    }
}

// Wallet Management Functions
function loadWallets() {
    const savedData = localStorage.getItem('cryptocrib_settings');
    const wallets = savedData ? (JSON.parse(savedData).wallets || []) : [];
    
    // If no wallets but walletAddress exists (from PFP selection), add it
    if (wallets.length === 0) {
        const data = JSON.parse(savedData || '{}');
        if (data.walletAddress) {
            wallets.push({
                address: data.walletAddress,
                isPrimary: true,
                label: 'Primary Wallet'
            });
        }
    }
    
    renderWallets(wallets);
    return wallets;
}

function renderWallets(wallets) {
    const walletsList = document.getElementById('wallets-list');
    if (!walletsList) return;
    
    if (wallets.length === 0) {
        walletsList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="16" width="48" height="40" rx="4" stroke="currentColor" stroke-width="2"/>
                        <path d="M16 16V24C16 28.4183 19.5817 32 24 32H40C44.4183 32 48 28.4183 48 24V16" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <p class="empty-state-text">No wallets connected</p>
            </div>
        `;
        return;
    }
    
    walletsList.innerHTML = wallets.map((wallet, index) => {
        const shortAddress = `${wallet.address.substring(0, 6)}...${wallet.address.substring(38)}`;
        return `
            <div class="wallet-item ${wallet.isPrimary ? 'primary' : ''}">
                <div class="wallet-info">
                    <div class="wallet-icon">${wallet.label ? wallet.label.charAt(0).toUpperCase() : 'W'}</div>
                    <div class="wallet-details">
                        <div class="wallet-label">${wallet.isPrimary ? 'Primary Wallet' : 'Backup Wallet'}</div>
                        <div class="wallet-address">${shortAddress}</div>
                    </div>
                    ${wallet.isPrimary ? '<span class="wallet-badge">Primary</span>' : ''}
                </div>
                ${!wallet.isPrimary ? `
                    <div class="wallet-actions-item">
                        <button type="button" class="btn-wallet-remove" onclick="removeWallet('${wallet.address}')">
                            Remove
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function addWallet(address, isPrimary = false) {
    const savedData = localStorage.getItem('cryptocrib_settings');
    const data = savedData ? JSON.parse(savedData) : {};
    
    if (!data.wallets) {
        data.wallets = [];
    }
    
    // If this is primary, unset other primaries
    if (isPrimary) {
        data.wallets.forEach(w => w.isPrimary = false);
    }
    
    // Check if wallet already exists
    const exists = data.wallets.find(w => w.address.toLowerCase() === address.toLowerCase());
    if (exists) {
        alert('This wallet is already connected');
        return;
    }
    
    data.wallets.push({
        address: address,
        isPrimary: isPrimary || data.wallets.length === 0,
        label: isPrimary ? 'Primary Wallet' : 'Backup Wallet',
        connectedAt: new Date().toISOString()
    });
    
    localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
    loadWallets();
    showSuccessMessage('Wallet added successfully!');
}

async function switchWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const newAddress = accounts[0];
            
            const savedData = localStorage.getItem('cryptocrib_settings');
            const data = savedData ? JSON.parse(savedData) : {};
            
            if (!data.wallets) {
                data.wallets = [];
            }
            
            // Check if wallet exists
            const existingWallet = data.wallets.find(w => w.address.toLowerCase() === newAddress.toLowerCase());
            
            if (existingWallet) {
                // Set as primary
                data.wallets.forEach(w => w.isPrimary = false);
                existingWallet.isPrimary = true;
                existingWallet.label = 'Primary Wallet';
            } else {
                // Add as new primary
                data.wallets.forEach(w => w.isPrimary = false);
                data.wallets.push({
                    address: newAddress,
                    isPrimary: true,
                    label: 'Primary Wallet',
                    connectedAt: new Date().toISOString()
                });
            }
            
            data.walletAddress = newAddress;
            localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
            loadWallets();
            showSuccessMessage('Primary wallet switched successfully!');
        } catch (error) {
            console.error('Error switching wallet:', error);
            alert('Failed to switch wallet. Please make sure you have a Web3 wallet installed.');
        }
    } else {
        alert('Please install a Web3 wallet like MetaMask to use this feature.');
    }
}

async function addBackupWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const newAddress = accounts[0];
            
            addWallet(newAddress, false);
        } catch (error) {
            console.error('Error adding backup wallet:', error);
            alert('Failed to add backup wallet. Please make sure you have a Web3 wallet installed.');
        }
    } else {
        alert('Please install a Web3 wallet like MetaMask to use this feature.');
    }
}

function removeWallet(address) {
    if (confirm('Remove this wallet?')) {
        const savedData = localStorage.getItem('cryptocrib_settings');
        const data = savedData ? JSON.parse(savedData) : {};
        
        if (data.wallets) {
            data.wallets = data.wallets.filter(w => w.address.toLowerCase() !== address.toLowerCase());
            
            // If we removed the primary, set first wallet as primary
            if (data.wallets.length > 0 && !data.wallets.find(w => w.isPrimary)) {
                data.wallets[0].isPrimary = true;
                data.wallets[0].label = 'Primary Wallet';
            }
            
            localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
            loadWallets();
            showSuccessMessage('Wallet removed successfully!');
        }
    }
}

// Active Sessions Functions
function loadSessions() {
    const savedData = localStorage.getItem('cryptocrib_settings');
    const data = savedData ? JSON.parse(savedData) : {};
    let sessions = data.sessions || [];
    
    // Check if current session exists
    const currentSession = sessions.find(s => s.isCurrent);
    
    if (!currentSession) {
        // Create current session
        const newSession = createCurrentSession();
        sessions.unshift(newSession);
        
        // Save updated sessions
        data.sessions = sessions;
        localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
    } else {
        // Update last active time for current session
        currentSession.lastActive = new Date().toISOString();
        data.sessions = sessions;
        localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
    }
    
    renderSessions(sessions);
    return sessions;
}

function createCurrentSession() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    
    // Detect browser
    let browser = 'Unknown Browser';
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) browser = 'Safari';
    else if (userAgent.includes('Edg')) browser = 'Edge';
    else if (userAgent.includes('Opera') || userAgent.includes('OPR')) browser = 'Opera';
    
    // Detect OS
    let os = 'Unknown OS';
    if (platform.includes('Win')) os = 'Windows';
    else if (platform.includes('Mac')) os = 'macOS';
    else if (platform.includes('Linux')) os = 'Linux';
    else if (platform.includes('Android')) os = 'Android';
    else if (platform.includes('iPhone') || platform.includes('iPad')) os = 'iOS';
    
    // Get location (simulated - in production, use IP geolocation)
    const location = 'New York, US';
    
    return {
        id: 'current-' + Date.now(),
        browser: browser,
        os: os,
        location: location,
        lastActive: new Date().toISOString(),
        isCurrent: true,
        device: `${os} - ${browser}`
    };
}

function renderSessions(sessions) {
    const sessionsList = document.getElementById('sessions-list');
    if (!sessionsList) return;
    
    if (sessions.length === 0) {
        sessionsList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12" y="8" width="40" height="48" rx="4" stroke="currentColor" stroke-width="2"/>
                        <path d="M20 20H44M20 28H44M20 36H36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <p class="empty-state-text">No active sessions</p>
            </div>
        `;
        return;
    }
    
    sessionsList.innerHTML = sessions.map(session => {
        const lastActive = new Date(session.lastActive);
        const timeAgo = getTimeAgo(lastActive);
        
        return `
            <div class="session-item ${session.isCurrent ? 'current' : ''}">
                <div class="session-info">
                    <div class="session-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                            <path d="M4 10H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="session-details">
                        <div class="session-device">
                            ${session.device}
                            ${session.isCurrent ? '<span class="session-badge">Current</span>' : ''}
                        </div>
                        <div class="session-meta">
                            <span class="session-location">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="currentColor" stroke-width="1"/>
                                    <path d="M6 1C4.34315 1 3 2.34315 3 4C3 5.5 6 9 6 9C6 9 9 5.5 9 4C9 2.34315 7.65685 1 6 1Z" stroke="currentColor" stroke-width="1"/>
                                </svg>
                                ${session.location}
                            </span>
                            <span>•</span>
                            <span>Last active: ${timeAgo}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function getTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
}

function logoutAllDevices() {
    if (confirm('Are you sure you want to logout of all devices? You will need to login again on this device.')) {
        const savedData = localStorage.getItem('cryptocrib_settings');
        const data = savedData ? JSON.parse(savedData) : {};
        
        // Keep only current session
        data.sessions = [createCurrentSession()];
        
        localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
        loadSessions();
        showSuccessMessage('Logged out of all devices successfully!');
        
        // In production, this would also call an API to invalidate all sessions
    }
}

// Logout Function
function logout() {
    if (confirm('Are you sure you want to logout? You will be redirected to the homepage.')) {
        // Clear session data
        const savedData = localStorage.getItem('cryptocrib_settings');
        if (savedData) {
            const data = JSON.parse(savedData);
            
            // Remove current session from sessions list
            if (data.sessions) {
                data.sessions = data.sessions.filter(s => !s.isCurrent);
            }
            
            // Mark user as logged out (in production, you'd call an API)
            data.isLoggedIn = false;
            data.loggedOutAt = new Date().toISOString();
            
            // Save updated data
            localStorage.setItem('cryptocrib_settings', JSON.stringify(data));
        }
        
        // Clear session storage (optional - for temporary session data)
        sessionStorage.clear();
        
        // In production, you might want to:
        // 1. Call logout API endpoint
        // 2. Clear authentication tokens
        // 3. Redirect to login page
        
        // Redirect to homepage
        window.location.href = 'index.html';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved settings
    loadSettings();
    
    // Load wallets and sessions
    loadWallets();
    loadSessions();
    
    // PFP Upload Handler
    const pfpUpload = document.getElementById('pfp-upload');
    if (pfpUpload) {
        pfpUpload.addEventListener('change', handlePFPUpload);
    }
    
    // Wallet Connection Button
    const btnSelectWallet = document.getElementById('btn-select-wallet');
    if (btnSelectWallet) {
        btnSelectWallet.addEventListener('click', connectWallet);
    }
    
    // Social Media Connection Buttons
    const btnTwitter = document.getElementById('btn-twitter');
    const btnDiscord = document.getElementById('btn-discord');
    const btnLinkedin = document.getElementById('btn-linkedin');
    
    if (btnTwitter) {
        btnTwitter.addEventListener('click', () => connectSocial('twitter'));
    }
    if (btnDiscord) {
        btnDiscord.addEventListener('click', () => connectSocial('discord'));
    }
    if (btnLinkedin) {
        btnLinkedin.addEventListener('click', () => connectSocial('linkedin'));
    }
    
    // Wallet Management Buttons
    const btnSwitchWallet = document.getElementById('btn-switch-wallet');
    const btnAddBackup = document.getElementById('btn-add-backup');
    
    if (btnSwitchWallet) {
        btnSwitchWallet.addEventListener('click', switchWallet);
    }
    if (btnAddBackup) {
        btnAddBackup.addEventListener('click', addBackupWallet);
    }
    
    // Sessions Button
    const btnLogoutAll = document.getElementById('btn-logout-all');
    if (btnLogoutAll) {
        btnLogoutAll.addEventListener('click', logoutAllDevices);
    }
    
    // Logout Button
    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', logout);
    }
    
    // Save Button
    const btnSave = document.getElementById('btn-save-profile');
    if (btnSave) {
        btnSave.addEventListener('click', function() {
            // Validate form
            const username = document.getElementById('username').value.trim();
            const cribName = document.getElementById('crib-name').value.trim();
            
            if (!username) {
                alert('Please enter a username');
                return;
            }
            
            if (!cribName) {
                alert('Please enter a Crib Name');
                return;
            }
            
            saveSettings();
        });
    }
    
    // Cancel Button
    const btnCancel = document.querySelector('.btn-cancel');
    if (btnCancel) {
        btnCancel.addEventListener('click', function() {
            if (confirm('Discard changes?')) {
                loadSettings();
            }
        });
    }
    
    // Auto-save on input change (optional - debounced)
    let saveTimeout;
    const inputs = document.querySelectorAll('.settings-input, .settings-textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                // Auto-save after 2 seconds of no typing
                // saveSettings();
            }, 2000);
        });
    });
    
    // Make removeWallet available globally for onclick handlers
    window.removeWallet = removeWallet;
});

