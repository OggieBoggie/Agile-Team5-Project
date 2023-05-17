const gymAccountButton = document.getElementById('gymAccountButton');
const gymOwnerAccountButton = document.getElementById('userAccountButton');
const gymInfo = document.querySelector('.gym-info');
const gymAddress = document.querySelector('.gym-address');

gymAccountButton.addEventListener('click', () => {
  gymInfo.style.display = 'block';
  gymAddress.style.display = 'block';
});

gymOwnerAccountButton.addEventListener('click', () => {
  gymInfo.style.display = 'none';
  gymAddress.style.display = 'none';
});
