const socket = io();

// Load user info
const username = localStorage.getItem('username');
if (!username) window.location.href = 'index.html';

document.getElementById('logout').addEventListener('click', () => {
  localStorage.clear();
  window.location.href = 'index.html';
});

// Sending a message
const sendMessage = () => {
  const message = document.getElementById('message-input').value;
  if (message.trim()) {
    socket.emit('chatMessage', { username, message });
    document.getElementById('message-input').value = '';
  }
};

document.getElementById('send-btn').addEventListener('click', sendMessage);

// Receiving messages
socket.on('message', (data) => {
  const messageList = document.getElementById('messages');
  const newMessage = document.createElement('li');
  newMessage.textContent = `${data.username}: ${data.message}`;
  messageList.appendChild(newMessage);
});
