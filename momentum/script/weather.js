/**
 * KEY = e6be4375da515a74dcb765bacf21d10b
 */

const success = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = 'e6be4375da515a74dcb765bacf21d10b';
  let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // 섭씨로 온도 요청

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(`도시: ${data.name}`);
      console.log(`현재 온도: ${data.main.temp}°C`);
      let sunrise = new Date(data.sys.sunrise * 1000);
      console.log(`일출 시간: ${sunrise.toLocaleTimeString()}`);
    })
    .catch((error) => {
      console.log('날씨 정보를 가져오는 데 실패했습니다.', error);
    });
};

const error = () => {
  console.log('위치 정보를 가져올 수 없습니다.');
};

const weather_init = () => {
  if (!navigator.geolocation) {
    console.log("현재 위치를 가져올 수 없습니다.");
  } else {
    console.log("위치 파악중.......");
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

weather_init();











