const loginForm = document.querySelector("#loginForm");
const inputElem = document.querySelector('input');
const pElem = document.querySelector("p");
const outElem = document.querySelector(".logout");
const LOGIN_KEY = "loginname";

const saveLoginName = (strInput) => {
  localStorage.setItem(LOGIN_KEY,strInput);
}
const loadLoginName = ()=>{
  return localStorage.getItem(LOGIN_KEY);
}
const printLoginName = (strName)=>{
  pElem.textContent = `어서오세요 ${strName}님,`;
  pElem.classList.remove("hidden");
  outElem.classList.remove("hidden");
  loginForm.classList.add("hidden");
}
const handlerSubmit = (event)=>{
  event.preventDefault();  //기능초기화
  // console.log(inputElem.value);
  printLoginName( inputElem.value );
  saveLoginName( inputElem.value );
  inputElem.value = null;
}
const init = () => {
  //처음 실행되는 함수
  //저장된 데이터 확인
  console.log( "처음 실행되는 함수");
  let loginName = loadLoginName();
  // console.log( loginName );
  if( loginName ) {
    //화면에 출력
    printLoginName( loginName );
  } else {
    loginForm.addEventListener("submit", handlerSubmit );
  } 
  outElem.addEventListener("click",()=>{
    //1. 로컬 스토리지 삭제
    localStorage.removeItem(LOGIN_KEY);
    //2. p태그와 out버튼이 안보이게
    pElem.classList.add("hidden");
    outElem.classList.add("hidden");
    //3. form 이 다시 보여지게
    loginForm.classList.remove("hidden");
  });
}
window.onload = init;


/*여기부터 추가됨 */
const todoListElem = document.querySelector('.todolist'); // ToDo 리스트 요소
const loginStatus = localStorage.getItem('loggedIn'); // 로그인 상태 확인

// 로그인 상태에 따라 ToDo 리스트 표시
const checkLoginStatus = () => {
  if (loginStatus === 'true') {
    todoListElem.style.display = 'block'; // 로그인 상태일 때 ToDo 리스트 보이기
  } else {
    todoListElem.style.display = 'none'; // 로그인 상태가 아닐 때 ToDo 리스트 숨기기
  }
};

// 로그인 상태 변경 함수 (로그인 시 호출)
const login = () => {
  localStorage.setItem('loggedIn', 'true'); // 로그인 상태 저장
  checkLoginStatus(); // 로그인 상태 체크
};

// 로그아웃 상태 변경 함수 (로그아웃 시 호출)
const logout = () => {
  localStorage.setItem('loggedIn', 'false'); // 로그아웃 상태 저장
  checkLoginStatus(); // 로그인 상태 체크
};

// 페이지 로드 시 로그인 상태 확인
checkLoginStatus();