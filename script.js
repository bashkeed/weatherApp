const getWeater = document.querySelector('button')
const show =      document.querySelector('#temp')
const searchBox = document.querySelector(".search input");
console.log(searchBox);
const APIKey = "a5277a670215173962c7d3ae19ba1757";

getWeater.addEventListener('click',()=>{
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=${APIKey}&units=metric`
)
  .then((res)=> res.json())
  .then((data) => {
    console.log(data);
    show.innerText = `temperature for ${data.name} ${data.main.temp}°C`;
  });
})

