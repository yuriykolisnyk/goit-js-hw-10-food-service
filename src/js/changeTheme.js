const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkboxEl = document.querySelector('#theme-switch-toggle');

checkboxEl.addEventListener('change', changeTheme);

function changeTheme(event) {
  event.currentTarget.checked ? checkedTheme() : notCheckedTheme();
}

function checkedTheme() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  checkboxEl.checked = true;
}

function notCheckedTheme() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  checkboxEl.checked = false;
}

function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT || savedTheme === null) {
    notCheckedTheme();
    return;
  }

  if (savedTheme === Theme.DARK) {
    checkedTheme();
    return;
  }
}

currentTheme();
