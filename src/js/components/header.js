document.addEventListener('DOMContentLoaded', () => {
  // profile
  const profileToggle = document.querySelector('.header__profile-btn');
  const profile = document.querySelector('.header__profile');
  const account = document.querySelector('.header__account');
  const accountClose = document.querySelector('.header__account-close');
  if(!profileToggle || !profile || !account || !accountClose) return;

  profileToggle.addEventListener('click', () => {
    profile.classList.toggle('header__profile--active');
  })

  accountClose.addEventListener('click', () => {
    profile.classList.remove('header__profile--active');
  })
})