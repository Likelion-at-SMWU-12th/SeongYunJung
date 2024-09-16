// 변수를 지정해준다
const content = document.querySelector("div.content h1");

// 클릭하면 글씨 색상 변하는 함수를 만들어준다.
function handleContentClick() {
    content.style.color ="blue";
}

// 클릭 이벤트가 일어난 경우
content.addEventListener("click", handleContentClick);