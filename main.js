document.addEventListener('DOMContentLoaded', e => {
  const tg = window.Telegram.WebApp;
  console.log(tg)

  tg.expand();

  tg.MainButton.textColor = '#FFFFFF';
  tg.MainButton.color = '#191919';


  let item = '';

  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText('Hello');
    tg.MainButton.show();
  }

  document.querySelector('.name').textContent = `${tg.initDataUnsafe.user.first_name}`;


  Telegram.WebApp.onEvent('mainButtonClicked', () => {
    tg.sendData('hh');
  });

  console.log(tg.initDataUnsafe.user.first_name)
});