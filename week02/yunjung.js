// 페이지가 열리면 알림창이 뜸
alert("Welcome to yunjung info page!");

const mainbox = document.getElementById("mainbox");
function darkmode() {
    mainbox.style.backgroundColor = "#262626";
    mainbox.style.color = 'white';
}
function lightmode() {
    mainbox.style.backgroundColor = 'white';
    mainbox.style.color='black';
    h2.style.backgroundColor = 'cornsilk';
}