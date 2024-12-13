const toggle = document.getElementById('toggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.style.backgroundColor = '#2c2c54';
    document.body.style.color = '#f5f5f5';
  } else {
    document.body.style.backgroundColor = '#f2f2f2';
    document.body.style.color = '#333';
  }
});
