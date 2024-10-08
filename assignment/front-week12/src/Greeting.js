import React, { useEffect, useState } from "react";

const Greeting = () => {
  // 이름과 프로필 상태 관리 변수를 정의
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();
  useEffect(() => {
    // 로컬 스토리지에 저장해둔 access token을 가져와서 요청을 보낼때 headers에 넣어줌
    const accessToken = localStorage.getItem("accessToken");
    // 카카오 API 사용자 정보 요청 엔드포인트로 get요청
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      // Bearer ${accessToken} 형식으로 설정, access token을 서버에 전달하고 인증 진행
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      // 받아온 데이터를 json 형태로 변환하고
      const userData = res.json();
      userData.then((user) => {
        // 그냥 user 데이터가 어떤식으로 받아와지는지 궁금해서 console에 찍어봤슴다
        console.log(user);
        // user 데이터의 properties 안의 nickname과 profile_image에 접근해서 name과 profileImg 상태를 설정
        setName(user.properties.nickname);
        setProfileImg(user.properties.profile_image);
      });
    });
  }, []);
  return (
    <div>
      {/* name, profileImg를 화면에 출력 */}
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
