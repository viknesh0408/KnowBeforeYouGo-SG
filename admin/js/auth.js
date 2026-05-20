// Simple SHA256 hash function for demo (client-side only)
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

// Initialize admin credentials on first load
function initializeAdmin() {
  if (!localStorage.getItem('adminCredentials')) {
    const adminCreds = {
      username: 'admin',
      passwordHash: simpleHash('YNV@101604')
    };
    localStorage.setItem('adminCredentials', JSON.stringify(adminCreds));
  }
}

// Login function
function login(username, password) {
  const adminCreds = JSON.parse(localStorage.getItem('adminCredentials'));
  
  if (username === adminCreds.username && simpleHash(password) === adminCreds.passwordHash) {
    const token = 'admin_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('adminToken', token);
    sessionStorage.setItem('adminUsername', username);
    return { success: true };
  }
  return { success: false, error: 'Invalid username or password' };
}

// Logout function
function logout() {
  sessionStorage.removeItem('adminToken');
  sessionStorage.removeItem('adminUsername');
  window.location.href = 'login.html';
}

// Check authentication
function checkAuth() {
  const token = sessionStorage.getItem('adminToken');
  if (!token) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

// Get current admin username
function getCurrentAdmin() {
  return sessionStorage.getItem('adminUsername') || 'admin';
}

// Forgot password: generate reset token
function generateResetToken(username) {
  const adminCreds = JSON.parse(localStorage.getItem('adminCredentials'));
  
  if (username !== adminCreds.username) {
    return { success: false, error: 'Username not found' };
  }
  
  const resetToken = Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  const expiry = Date.now() + (30 * 60 * 1000); // 30 minutes
  
  const resetData = {
    token: resetToken,
    expiry: expiry,
    username: username
  };
  
  localStorage.setItem('passwordReset', JSON.stringify(resetData));
  return { success: true, token: resetToken };
}

// Verify and use reset token
function verifyResetToken(token) {
  const resetData = JSON.parse(localStorage.getItem('passwordReset'));
  
  if (!resetData) {
    return { success: false, error: 'No reset request found' };
  }
  
  if (resetData.token !== token) {
    return { success: false, error: 'Invalid reset token' };
  }
  
  if (Date.now() > resetData.expiry) {
    localStorage.removeItem('passwordReset');
    return { success: false, error: 'Reset token expired' };
  }
  
  return { success: true, username: resetData.username };
}

// Reset password
function resetPassword(token, newPassword) {
  const verification = verifyResetToken(token);
  
  if (!verification.success) {
    return verification;
  }
  
  const adminCreds = JSON.parse(localStorage.getItem('adminCredentials'));
  adminCreds.passwordHash = simpleHash(newPassword);
  localStorage.setItem('adminCredentials', JSON.stringify(adminCreds));
  localStorage.removeItem('passwordReset');
  
  return { success: true, message: 'Password reset successfully' };
}

// Change password (requires current password)
function changePassword(oldPassword, newPassword) {
  const adminCreds = JSON.parse(localStorage.getItem('adminCredentials'));
  
  if (simpleHash(oldPassword) !== adminCreds.passwordHash) {
    return { success: false, error: 'Current password is incorrect' };
  }
  
  if (newPassword.length < 6) {
    return { success: false, error: 'New password must be at least 6 characters' };
  }
  
  adminCreds.passwordHash = simpleHash(newPassword);
  localStorage.setItem('adminCredentials', JSON.stringify(adminCreds));
  
  return { success: true, message: 'Password changed successfully' };
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initializeAdmin);
