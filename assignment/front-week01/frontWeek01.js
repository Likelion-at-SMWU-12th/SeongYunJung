alert("난 대학시절 만나이계산을 전공했단 사실");

const userInfo = document.querySelector("#userInfo-form");
const userInput = document.querySelector("#userInfo-form input");
const result = document.querySelector("#result");


function pushButton(event){
    event.preventDefault();
    userInfo.classList.add("hidden");

    // 사용자가 입력한 기준 날짜와 태어난 날짜 불러오는 코드
    const currentDate = new Date(document.getElementById('currentDate').value);
    const birthdate = new Date(document.getElementById('birthdate').value);

    // 기준 년도와 태어난 년도만 계산해서 만 나이 변수에 값을 넣어주고
    // 한국 나이는 +1를 해준다.
    let internationalAge = currentDate.getFullYear() - birthdate.getFullYear();
    let krAge = (currentDate.getFullYear() - birthdate.getFullYear()) + 1;

    // 만 나이 계산을 위해 월도 계산을 해준다. 
    const subMonth = currentDate.getMonth() - birthdate.getMonth();

    // 기준 월보다 생월이 큰 경우 또는, 기준 월과 생월이 같지만 아직 생일이 지나지 않은 경우를 계산해서 1살을 더 빼준다.
    if (subMonth < 0 || (subMonth == 0 && currentDate.getDate() < birthdate.getDate())) {
        internationalAge--;
    }

    const userName = userInput.value;
    result.innerHTML = `<span class="em">${userName}</span>'s<br/><br/>
                        international age: <span class="em">${internationalAge}</span><br/>
                       korean age: <span class="em">${krAge}</span>`;
    result.classList.remove("hidden");
}

userInfo.addEventListener("submit", pushButton);
