const groupList = document.getElementById('group-list');
const createGroupForm = document.getElementById('create-group-form');

// Load groups
function loadGroups() {
  const groups = JSON.parse(localStorage.getItem('groups')) || [];
  groupList.innerHTML = '';
  groups.forEach(group => {
    const listItem = document.createElement('li');
    listItem.textContent = group.name;
    groupList.appendChild(listItem);
  });
}

// Create a new group
createGroupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const groupName = document.getElementById('group-name').value;
  if (groupName.trim()) {
    let groups = JSON.parse(localStorage.getItem('groups')) || [];
    groups.push({ name: groupName });
    localStorage.setItem('groups', JSON.stringify(groups));
    loadGroups();
    document.getElementById('group-name').value = '';
  }
});

loadGroups();
