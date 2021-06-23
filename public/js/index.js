// console.log("this is working");
const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");

const dataHide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Please enter city before search`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=3501b5e3e16546d48da4a44cf99e25af`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      //   showing to search result
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;

      //   temp_status.innerText = arrData[0].weather[0].main;

      //   clouds condition
      const tempMod = arrData[0].weather[0].main;
      if (tempMod == "Clear") {
        temp_status.innerHTML =
          '<i class="fas fa-sun" style="color:#eccc68"></i>';
      } else if (tempMod == "Clouds") {
        temp_status.innerHTML =
          '<i class="fas fa-cloud" style="color:#f1f2f6"></i>';
      } else if (tempMod == "Rain") {
        temp_status.innerHTML =
          '<i class="fas fa-clouds-rain" style="color:#a4b0be"></i>';
      } else {
        temp_status.innerHTML =
          '<i class="fas fa-sun" style="color:#eccc68"></i>';
        dataHide.classList.remove("data_hide");
      }
    } catch {
      city_name.innerText = `Please enter correct city name`;
      dataHide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
