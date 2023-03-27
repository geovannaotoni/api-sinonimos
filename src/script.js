const apiURL = 'https://dicio-api-ten.vercel.app/v2/sinonimos/';
const inputValue = 'adquirir'

const seachSinonimo = async () => {
  const response = await fetch(`${apiURL}${inputValue}`);
  const data = await response.json();
  for (let index = 0; index < data.length; index += 1) {
    console.log(data[index]);
  }
}
seachSinonimo();