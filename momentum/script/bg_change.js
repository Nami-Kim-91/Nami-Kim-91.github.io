const images = [
  'city.jpg','daycity.jpg','griffith.jpg','purpleflower.png',
  'DTLA.jpg','joshuapark.jpg','thebridge.jpg',
  'universe.jpg'];

//백그라운드 이미지 변경 함수
const setRandomBG = () => {
  const idx = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = `url(./back_img/${images[idx]})`;
  document.body.style.backgroundSize = 'cover';

}
setRandomBG();