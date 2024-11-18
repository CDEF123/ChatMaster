document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const phone = document.getElementById('phone').value;

  if (username && phone) {
    localStorage.setItem('username', username);
    localStorage.setItem('phone', phone);
    window.location.href = 'chat.html'; // Redirect to chat page
  } else {
    alert('Please fill in all fields.');
  }
});
