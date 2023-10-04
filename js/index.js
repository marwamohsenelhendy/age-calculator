
const inputs = document.querySelectorAll('#ageform input');
const outDay = document.querySelector('.output-day');
const outMonsth = document.querySelector('.output-month');
const outYear = document.querySelector('.output-year');

document.getElementById('ageform').addEventListener('submit', (event) => {
  event.preventDefault();

  let isEmpty = false;

  inputs.forEach(input => {
    if (!input.value) {
      isEmpty = true;
      const errorSpan = input.nextElementSibling;
      errorSpan.style.display = 'block';
    }
  });

  if (isEmpty) {
    outDay.textContent = '--';
    outMonsth.textContent = '--';
    outYear.textContent = '--';
    return;
  }


  const day = parseInt(inputs[0].value);
  const month = parseInt(inputs[1].value);
  const year = parseInt(inputs[2].value);

  const currentDate = new Date();
  const birthday = new Date(year, month - 1, day);

  if (birthday > currentDate) {
    document.querySelectorAll('.error-day, .error-month, .error-year').forEach(span => {
      span.style.display = 'block';
    });
    outDay.textContent = '--';
    outMonsth.textContent = '--';
    outYear.textContent = '--';
    return;
  }

  const ageDiff = currentDate - birthday;
  const ageDate = new Date(ageDiff);

  const years = Math.abs(ageDate.getUTCFullYear() - 1970);
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate();

  outDay.textContent = years;
  outMonsth.textContent = months;
  outYear.textContent = days;

  document.querySelectorAll('.error-day, .error-month, .error-year').forEach(span => {
    span.style.display = 'none';
  });
});








