// html elements 선택
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  // 함수: 로컬스토리지에 입력값 저장
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  //함수: 기본 이벤트 정지 새 이벤트 만들기
  event.preventDefault(); // 기본 이벤트 정지
  const currentValue = input.value; //currentValue에 입력값 저장
  paintGreeting(currentValue); // 입력값 화면에 표시
  saveName(currentValue); // 로컬스토리지에 입력값 저장
}

function askForName() {
  //함수: 이름 물어보기
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //입력창 지우기
  greetings.classList.add(SHOWING_CN); // h4 보이기
  greetings.innerText = `Hello ${text}`; // hello text 추가하기
}

function loadName() {
  //이름 불러오기
  const currentUser = localStorage.getItem(USER_LS); //로컬스토리지에 저장된 값 가져오기
  if (currentUser === null) {
    askForName(); //비어있으면 이름을 물어봄
  } else {
    paintGreeting(currentUser); //데이터가 있으면 그대로 출력함
  }
}

function init() {
  loadName();
}

init();
