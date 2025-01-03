const quotes = [
  {
    quote:"희망만을 먹고 사는 자는 굶어 죽을 것이다.",
    author: " -벤자민 프랭클린"
  },
  {
    quote:"희망차게 여행하는 것이 목적지에 도착하는 것보다 좋다.",
    author: " -로버트 루이스"
  },
  {
    quote:"지금이 제일 비참하다고 할 수 있는 동안은 아직 제일 비참한 게 아니다.",
    author: " -윌리엄 셰익스피어"
  },
  {
    quote:"희망은 어떤 상황에서도 필요하다.",
    author: " -사무엘 존슨"
  },
  {
    quote:"희망을 품지 않은 자는 절망도 할 수 없다.",
    author: " -조지 버나드 쇼"
  }
];
//랜덤 : Math.random() : 0~1 사이의 값으로 출력
const num = Math.floor(Math.random()* quotes.length);
const today = quotes[num];
//객체 가져오기
const spanElem1 = document.querySelector(".quote>span:nth-child(1)");
spanElem1.textContent = today.quote;
const spanElem2 = document.querySelector(".quote>span:nth-child(2)");
spanElem2.textContent = today.author;
