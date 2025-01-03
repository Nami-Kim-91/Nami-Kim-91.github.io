const clockElem = document.querySelector('.clock');
const dateElem =  document.querySelector('.date');
const getClock = () => {
  //시계설정
  const today = new Date(); //현재시간 
  //시, 분, 초 가져오기
  //class = Clock 인 객체의 텍스트를 변경
  // 주요 : 시 ,분, 초 는 두자리씩  : padStart
  const hh = String(today.getHours()).padStart(2,"0");
  const mm = String(today.getMinutes()).padStart(2,"0");
  const ss = String(today.getSeconds()).padStart(2,"0");
  clockElem.textContent = `${hh}:${mm}:${ss}`;
}

const getDate = () => {
  const today = new Date(); // 현재 날짜
  const yyyy = today.getFullYear(); // 연도
  const mm = today.getMonth(); // 월 (0부터 11까지의 숫자)
  const dd = today.getDate(); // 날짜

  // 월 이름 배열
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // "Month Day, Year" 형식으로 날짜 표시
  dateElem.textContent = `${months[mm]} ${dd}, ${yyyy}`;
};

getClock();
setInterval( getClock, 1000 );

getDate();
setInterval( getDate, 1000);