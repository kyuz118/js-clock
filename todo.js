const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS.JSON.stringify(toDos)); // 자바스크립트를 string으로 변환 (localstorage에는 string 형식만 저장 가능)
}

function paintToDo(text) {
  const li = document.createElement("li"); // li elements 만들기
  const delBtn = document.createElement("button"); // 지우기 버튼 만들기
  const span = document.createElement("span"); // span 만들기
  const newId = toDos.length + 1;
  delBtn.innerText = "❌"; // 지우기 버튼에 X 이모지 넣기
  span.innerText = text; // span에 입력값 넣기
  li.appendChild(delBtn); // li에 지우기 버튼 넣기
  li.appendChild(span); // li에 입력 값 넣기
  li.id = newId;
  toDoList.appendChild(li); // toDoList에 li 넣기
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  //로컬 스토리지에서 투두 리스트 가져오기
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); //  string을 자바스크립트로 변환
    parsedToDos.forEach(function (todo) {
      paintToDo(toDo.text); //배열에 있는 자바스크립트를 각각 함수로 실행
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
