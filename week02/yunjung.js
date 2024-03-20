// 페이지가 열리면 알림창이 뜸
// alert("Welcome to yunjung info page!");

var userName = prompt("이름을 입력해주세요:", "성윤정");

if (userName !== null) {
    alert("환영합니다! " + userName + "님 ☺️");
} else {
    alert("입력이 취소되었습니다.");
}

const mainbox = document.getElementById("mainbox");
function darkmode() {
    mainbox.style.backgroundColor = "#262626";
    mainbox.style.color = 'white';
    submitBtn.style.color='white';
}
function lightmode() {
    mainbox.style.backgroundColor = 'white';
    mainbox.style.color='black';
    submitBtn.style.color='black';
    h2.style.backgroundColor = 'cornsilk';
}

