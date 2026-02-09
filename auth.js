// Auth Page Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get all elements once
    const tabs = document.querySelectorAll('.auth-tab');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const authTitle = document.getElementById('auth-title');
    const authSubtitle = document.getElementById('auth-subtitle');
    const authTerms = document.getElementById('auth-terms');
    const btnGoogle = document.getElementById('btn-google-signin');
    const tabsContainer = document.getElementById('tabs-container');
    const resetPasswordForm = document.getElementById('reset-password-form');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const btnCancelReset = document.getElementById('btn-cancel-reset');
    const resetForm = document.getElementById('reset-form');
    const signupPassword = document.getElementById('signup-password');
    const signupConfirmPassword = document.getElementById('signup-confirm-password');
    const passwordMatchHint = document.getElementById('password-match-hint');
    
    // Ensure tabs exist before adding event listeners
    if (tabs.length === 0) {
        console.error('No tabs found');
    }
    
    // Function to switch tabs
    function switchTab(tabType) {
        if (!tabs || tabs.length === 0) return;
        
        // Update active tab
        tabs.forEach(t => {
            if (t.dataset.tab === tabType) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });
        
        // Ensure tabs container is visible and reset form is hidden when switching tabs
        if (tabsContainer) tabsContainer.classList.remove('hidden');
        if (resetPasswordForm) resetPasswordForm.classList.add('hidden');
        if (authTerms) authTerms.classList.remove('hidden');
        
        if (tabType === 'signin') {
            if (signinForm) signinForm.classList.remove('hidden');
            if (signupForm) signupForm.classList.add('hidden');
            if (authTitle) authTitle.textContent = 'Sign in to Cryptocrib';
            if (authSubtitle) authSubtitle.textContent = 'Sign in to access your account and use all features';
            if (authTerms) authTerms.innerHTML = 'By signing in, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.';
        } else {
            if (signinForm) signinForm.classList.add('hidden');
            if (signupForm) signupForm.classList.remove('hidden');
            if (authTitle) authTitle.textContent = 'Signup to Cryptocrib';
            if (authSubtitle) authSubtitle.textContent = 'Signup to access your account';
            if (authTerms) authTerms.innerHTML = 'By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.';
        }
    }
    
    // Tab switching event listeners
    if (tabs && tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabType = this.dataset.tab;
                if (tabType) {
                    switchTab(tabType);
                }
            });
        });
    }
    
    // Google Sign In Button
    if (btnGoogle) {
        btnGoogle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In production, this would initiate OAuth flow
            alert('Google Sign In would be initiated here. For demo purposes, redirecting to dashboard...');
            
            // Set logged in status
            const data = {
                isLoggedIn: true,
                loginMethod: 'google',
                loginTime: new Date().toISOString()
            };
            localStorage.setItem('cryptocrib_auth', JSON.stringify(data));
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }
    
    // Sign In Form Submit Handler
    function handleSignIn() {
        const emailInput = document.getElementById('signin-email');
        const passwordInput = document.getElementById('signin-password');
        
        if (!emailInput || !passwordInput) {
            console.error('Signin form inputs not found');
            alert('Error: Form inputs not found. Please refresh the page.');
            return false;
        }
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        
        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        
        // In production, this would call your authentication API
        // For demo purposes, we'll simulate a successful login
        
        // Set logged in status
        const authData = {
            isLoggedIn: true,
            loginMethod: 'email',
            email: email,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('cryptocrib_auth', JSON.stringify(authData));
        
        // Set user settings if not exists
        const settingsData = localStorage.getItem('cryptocrib_settings');
        if (!settingsData) {
            const defaultSettings = {
                username: email.split('@')[0],
                cribName: email.split('@')[0],
                email: email,
                pfp: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=0088FF&color=fff`
            };
            localStorage.setItem('cryptocrib_settings', JSON.stringify(defaultSettings));
        }
        
        // Show success message
        alert('Sign in successful! Redirecting to dashboard...');
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
        return true;
    }
    
    // Sign In Form Submit Event Listener
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleSignIn();
        });
    } else {
        console.error('Signin form not found');
    }
    
    // Sign Up Form Submit Handler
    function handleSignUp() {
        const emailInput = document.getElementById('signup-email');
        const passwordInput = document.getElementById('signup-password');
        const confirmPasswordInput = document.getElementById('signup-confirm-password');
        
        if (!emailInput || !passwordInput || !confirmPasswordInput) {
            console.error('Signup form inputs not found');
            alert('Error: Form inputs not found. Please refresh the page.');
            return false;
        }
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        // Basic validation
        if (!email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        
        // Password validation - at least 6 characters (compulsory)
        if (password.length < 6) {
            alert('Password must contain at least 6 characters. Please enter a longer password.');
            if (passwordInput) {
                passwordInput.focus();
                passwordInput.style.borderColor = '#d00';
            }
            return false;
        }
        
        // Password match validation (compulsory)
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please make sure both password fields contain exactly the same password.');
            if (confirmPasswordInput) {
                confirmPasswordInput.focus();
                confirmPasswordInput.style.borderColor = '#d00';
            }
            return false;
        }
        
        // In production, this would call your registration API
        // For demo purposes, we'll simulate a successful registration
        
        // Set logged in status
        const authData = {
            isLoggedIn: true,
            loginMethod: 'email',
            email: email,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('cryptocrib_auth', JSON.stringify(authData));
        
        // Set user settings
        const username = email.split('@')[0];
        const settingsData = {
            username: username,
            cribName: username,
            email: email,
            pfp: `https://ui-avatars.com/api/?name=${username}&background=0088FF&color=fff`,
            learningGoals: ''
        };
        localStorage.setItem('cryptocrib_settings', JSON.stringify(settingsData));
        
        // Show success message
        alert('Account created successfully! Redirecting to dashboard...');
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
        return true;
    }
    
    // Sign Up Form Submit Event Listener
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleSignUp();
        });
    } else {
        console.error('Signup form not found');
    }
    
    // Real-time password validation for signup form
    if (signupPassword && signupConfirmPassword) {
        signupPassword.addEventListener('input', function() {
            const password = signupPassword.value;
            const confirmPassword = signupConfirmPassword.value;
            
            // Reset styles
            signupPassword.style.borderColor = '';
            signupConfirmPassword.style.borderColor = '';
            if (passwordMatchHint) {
                passwordMatchHint.textContent = '';
                passwordMatchHint.className = 'form-hint';
            }
            
            // Check password length
            if (password.length > 0 && password.length < 6) {
                signupPassword.style.borderColor = '#d00';
            } else if (password.length >= 6) {
                signupPassword.style.borderColor = '#00b87a';
                
                // If confirm password is filled, check match
                if (confirmPassword.length > 0) {
                    if (password === confirmPassword) {
                        signupConfirmPassword.style.borderColor = '#00b87a';
                        if (passwordMatchHint) {
                            passwordMatchHint.textContent = 'Passwords match';
                            passwordMatchHint.className = 'form-hint success';
                        }
                    } else {
                        signupConfirmPassword.style.borderColor = '#d00';
                        if (passwordMatchHint) {
                            passwordMatchHint.textContent = 'Passwords do not match';
                            passwordMatchHint.className = 'form-hint error';
                        }
                    }
                }
            }
        });
        
        signupConfirmPassword.addEventListener('input', function() {
            const password = signupPassword.value;
            const confirmPassword = signupConfirmPassword.value;
            
            // Reset styles
            signupConfirmPassword.style.borderColor = '';
            if (passwordMatchHint) {
                passwordMatchHint.textContent = '';
                passwordMatchHint.className = 'form-hint';
            }
            
            // Check password length first
            if (password.length > 0 && password.length < 6) {
                signupPassword.style.borderColor = '#d00';
                return;
            } else if (password.length >= 6) {
                signupPassword.style.borderColor = '#00b87a';
            }
            
            // Check if passwords match
            if (confirmPassword.length > 0) {
                if (password !== confirmPassword) {
                    signupConfirmPassword.style.borderColor = '#d00';
                    if (passwordMatchHint) {
                        passwordMatchHint.textContent = 'Passwords do not match';
                        passwordMatchHint.className = 'form-hint error';
                    }
                } else {
                    signupConfirmPassword.style.borderColor = '#00b87a';
                    if (passwordMatchHint) {
                        passwordMatchHint.textContent = 'Passwords match';
                        passwordMatchHint.className = 'form-hint success';
                    }
                }
            }
        });
    }
    
    // Forgot Password Link
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Hide tabs container and terms, show reset password form
            if (tabsContainer) tabsContainer.classList.add('hidden');
            if (authTerms) authTerms.classList.add('hidden');
            if (resetPasswordForm) resetPasswordForm.classList.remove('hidden');
            
            // Update title and subtitle for reset password
            if (authTitle) authTitle.textContent = 'Sign in to Cryptocrib';
            if (authSubtitle) authSubtitle.textContent = 'Sign in to access your account and use all features';
        });
    }
    
    // Cancel Reset Password Button
    if (btnCancelReset) {
        btnCancelReset.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Hide reset password form and show tabs container and terms
            if (resetPasswordForm) resetPasswordForm.classList.add('hidden');
            if (tabsContainer) tabsContainer.classList.remove('hidden');
            if (authTerms) authTerms.classList.remove('hidden');
            
            // Restore title and subtitle based on active tab
            const activeTab = document.querySelector('.auth-tab.active');
            if (activeTab) {
                const tabType = activeTab.dataset.tab;
                if (tabType === 'signin') {
                    if (authTitle) authTitle.textContent = 'Sign in to Cryptocrib';
                    if (authSubtitle) authSubtitle.textContent = 'Sign in to access your account and use all features';
                    if (authTerms) authTerms.innerHTML = 'By signing in, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.';
                } else {
                    if (authTitle) authTitle.textContent = 'Signup to Cryptocrib';
                    if (authSubtitle) authSubtitle.textContent = 'Signup to access your account';
                    if (authTerms) authTerms.innerHTML = 'By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.';
                }
            }
        });
    }
    
    // Reset Password Form Submit
    if (resetForm) {
        resetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const emailInput = document.getElementById('reset-email');
            if (!emailInput) {
                alert('Error: Email input not found');
                return;
            }
            
            const email = emailInput.value.trim();
            
            // Basic validation
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In production, this would call your password reset API
            // For demo purposes, we'll simulate sending the reset link
            
            // Show success message
            alert('Password reset link has been sent to ' + email + '. Please check your inbox.');
            
            // Hide reset password form and show tabs container and terms
            if (resetPasswordForm) resetPasswordForm.classList.add('hidden');
            if (tabsContainer) tabsContainer.classList.remove('hidden');
            if (authTerms) authTerms.classList.remove('hidden');
            
            // Make sure Sign In tab is active and form is shown
            switchTab('signin');
            
            // Clear the email field
            if (emailInput) emailInput.value = '';
        });
    }
    
    // Function to handle hash changes
    function handleHashChange() {
        const hash = window.location.hash;
        if (hash === '#signup') {
            switchTab('signup');
        } else if (hash === '#signin') {
            switchTab('signin');
        } else {
            // If no hash, ensure default state (signup) is properly set
            const activeTab = document.querySelector('.auth-tab.active');
            if (activeTab) {
                const defaultTabType = activeTab.dataset.tab;
                if (defaultTabType) {
                    switchTab(defaultTabType);
                }
            }
        }
    }
    
    // Check URL hash to determine which tab should be active (only if hash exists)
    // This runs after all event listeners are set up
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
});
