const apiURL = 'https://dicio-api-ten.vercel.app/v2/sinonimos/';
const inputWord = document.getElementById('input-word');
const searchBtn = document.getElementById('search-btn');
const resultList = document.getElementById('result')

const seachSinonimo = async () => {
  const inputValue = inputWord.value;
  const response = await fetch(`${apiURL}${inputValue}`);
  const data = await response.json();
  for (let index = 0; index < data.length; index += 1) {
    const li = document.createElement('li');
    li.innerHTML = data[index];
    resultList.appendChild(li);
  }
}
searchBtn.addEventListener('click', seachSinonimo);