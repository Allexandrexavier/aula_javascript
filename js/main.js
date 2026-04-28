const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const form = document.querySelector('#lead-form');
const message = document.querySelector('#form-message');
const yearSpan = document.querySelector('#year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      message.textContent = 'Revise os campos obrigatórios antes de enviar.';
      message.style.color = '#ff9b9b';
      return;
    }

    const nome = form.elements.namedItem('nome')?.value?.trim();

    message.textContent = `Obrigada, ${nome || 'pessoa empreendedora'}! Recebi seu pedido e retorno em breve.`;
    message.style.color = '#2ed3b7';
    form.reset();
  });
}
