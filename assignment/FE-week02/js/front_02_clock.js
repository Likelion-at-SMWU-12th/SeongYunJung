const clock = document.querySelector("h4#clock");

function getClock(){
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth() + 1;
    const dates = date.getDate();
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const days = weekdays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");;
    const seconds = String(date.getSeconds()).padStart(2, "0");;
    clock.innerHTML=`오늘은 ${years}년 ${months}월 ${dates}일 ${days}요일, 현재 시각은 ${hours}시 ${minutes}분 ${seconds}초 입니다.`;
    // console.log("getClock() 호출");
}

getClock();
setInterval(getClock, 1000);