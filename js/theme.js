const toggleButton = document.getElementById('toggle-button');
const body = document.body;

window.onload = function() {
  const savedTheme = localStorage.getItem('theme'); 
  if (savedTheme === 'claro') {
    body.classList.add('modo-claro');
    body.classList.remove('modo-oscuro');
    toggleButton.textContent = '🌙';
  } else {
    body.classList.add('modo-oscuro');
    body.classList.remove('modo-claro');
    toggleButton.textContent = '☀️';
  }
  body.style.display = "block";
};
toggleButton.addEventListener('click', function () {
  if (body.classList.contains('modo-claro')) {
    body.classList.remove('modo-claro');
    body.classList.add('modo-oscuro');
    toggleButton.textContent = '☀️';
    localStorage.setItem('theme', 'oscuro'); 
  } else {
    body.classList.remove('modo-oscuro');
    body.classList.add('modo-claro');
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'claro');
  }
});

/*con body.classList administro las clases claro y oscuro del css*/