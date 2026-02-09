// Forgot Password Page Functionality

document.addEventListener('DOMContentLoaded', function() {
    const resetForm = document.getElementById('reset-password-form');
    const btnCancel = document.getElementById('btn-cancel');
    
    // Cancel button - redirect back to auth page
    if (btnCancel) {
        btnCancel.addEventListener('click', function() {
            window.location.href = 'auth.html';
        });
    }
    
    // Reset Password Form Submit
    if (resetForm) {
        resetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('reset-email').value;
            
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
            
            // Optionally redirect back to auth page after a delay
            setTimeout(function() {
                window.location.href = 'auth.html';
            }, 2000);
        });
    }
});

