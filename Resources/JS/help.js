const logoutBtn = document.querySelector('#logout');
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
  console.log('User signed out!');
  window.location.replace("index.html");
})