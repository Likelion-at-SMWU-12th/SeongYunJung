import React from "react";
import kakao_btn_img from "./kakao_login_large_narrow.png";
import google_btn_img from "./web_light_sq_SI@2x.png";

const Login = () => {
  // 로그인 요청 보낼 곳(response server): 1) 응답 타입을 code로 지정, 2) client id: REST_API_KEY, 3) 리디렉션할 uri설정
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  const handleKakao = () => {
    window.location.href = authServerLink;
  };

  return (
    <div>
      <h2>로그인</h2>
      <div className="btns-container">
        {/* 카카오 버튼 누르면 카카오 로그인 요청 시작 */}
        <button onClick={handleKakao}>
          <img src={kakao_btn_img} alt="kakao_btn" />
        </button>
        <button>
          <img src={google_btn_img} alt="google_btn" />
        </button>
      </div>
    </div>
  );
};

export default Login;
