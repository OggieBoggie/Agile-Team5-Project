const gymAccountButton = document.getElementById('gymAccountButton');
const userAccountButton = document.getElementById('userAccountButton');

gymAccountButton.addEventListener('click', () => {
  gymAccountButton.classList.add('active');
  userAccountButton.classList.remove('active');
});

userAccountButton.addEventListener('click', () => {
  userAccountButton.classList.add('active');
  gymAccountButton.classList.remove('active');
});
