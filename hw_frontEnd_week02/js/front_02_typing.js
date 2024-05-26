let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["프로필에 자기소개를 입력해보세요","반가워요! 저의 투두리스트에 오신 것을 환영합니다!","좋은 하루보내세요!"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

function resetTyping() {
    target.textContent="";
    dynamic(randomString());
}

function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 100);
    } else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}

setInterval(blink, 500);