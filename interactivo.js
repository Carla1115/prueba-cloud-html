// Selecciones iniciales
const main = document.querySelector('main');
const contactoDiv = document.getElementById('info-contacto');
const toggleThemeBtn = document.getElementById('toggle-theme');

// Botón dinámico para mostrar contacto
const toggleContactoBtn = document.createElement('button');
toggleContactoBtn.textContent = 'Mostrar contacto';
document.getElementById('contacto').appendChild(toggleContactoBtn);

// Alternar visibilidad de contacto
toggleContactoBtn.addEventListener('click', () => {
  if (contactoDiv.style.display === 'none') {
    contactoDiv.style.display = 'block';
    toggleContactoBtn.textContent = 'Ocultar contacto';
  } else {
    contactoDiv.style.display = 'none';
    toggleContactoBtn.textContent = 'Mostrar contacto';
  }
});

// Alternar tema oscuro
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
