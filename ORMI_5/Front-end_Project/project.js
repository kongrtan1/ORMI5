document.addEventListener('DOMContentLoaded', function (event) {
  const open = document.querySelector('.open-modal-btn');

  const close = document.querySelector('.close-btn');

  const layout = document.querySelector('.modal');

  open.addEventListener('click', function () {
    layout.style.display = 'flex';
  });

  close.addEventListener('click', function () {
    layout.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === layout) {
      layout.style.display = 'none';
    }
  });
});
