const apiURL = 'https://dicio-api-ten.vercel.app/v2/sinonimos/';
const inputWord = document.getElementById('input-word');
const searchBtn = document.getElementById('search-btn');
const resultList = document.getElementById('result');
const main = document.querySelector('main');

import clipboardCopy from 'clipboard-copy';
import Swal from 'sweetalert2';

const loadingText = () => {
  const p = document.createElement('p');
  p.innerText = 'carregando...';
  p.classList.add('loading');
  main.appendChild(p);
}

const removeLoadingText = () => {
  const p = document.querySelector('.loading');
  p.remove();
}

const seachSinonimo = async () => {
  loadingText();
  resultList.innerHTML = '';
  const inputValue = inputWord.value;
  const response = await fetch(`${apiURL}${inputValue}`);
  const data = await response.json();
  for (let index = 0; index < data.length; index += 1) {
    const li = document.createElement('li');
    li.innerHTML = data[index];
    resultList.appendChild(li);
  }
  removeLoadingText();
}
searchBtn.addEventListener('click', seachSinonimo);

inputWord.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    seachSinonimo();
  }
});

resultList.addEventListener('click', (event) => {
  clipboardCopy(event.target.innerText);
  Swal.fire('Sinônimo copiado!')
})