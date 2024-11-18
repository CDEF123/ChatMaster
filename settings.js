// Load current user settings
document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  const phone = localStorage.getItem('phone');
  document.getElementById('username').value = username || '';
  document.getElementById('phone').value = phone || '';
});

// Save settings
document.getElementById('settings-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const phone = document.getElementById('phone').value;
  if (username && phone) {
    localStorage.setItem('username', username);
    localStorage.setItem('phone', phone);
    alert('Settings updated successfully!');
  } else {
    alert('Please fill in all fields.');
  }
});
