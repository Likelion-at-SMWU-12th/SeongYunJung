import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  const [params, setParams] = useSearchParams();
  // 인증 성공하고 엔드포인트에 발급된 인가코드를 params를 통해 접근해서 authcode 변수에 저장
  const authCode = params.get("code");
  const grant_type = "authorization_code";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      // grant_type: 인증 방식(authorization_code), client id: REST API KEY, redirect uri: 인증된 후에 리디렉션될 URI, code: 카카오 로그인하기 한 후 엔드포인트로 받은 인가코드
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST",
        // body: JSON.stringify({
        //   grant_type: "authorization_code",
        //   client_id: process.env.REACT_APP_REST_API_KEY,
        //   redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        //   code: authCode,
        // }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      // 응답을 json 형태로 변환
      const data = res.json();
      data.then((data) => {
        // 변환된 데이터에서 access token에 접근해서 로컬스토리지에 저장, 앞으로 요청시 해당 토근 사용
        localStorage.setItem("accessToken", data.access_token);
        // access token을 성공적으로 저장하고 greeting 페이지로 이동
        // '왜 redirection 페이지랑 greeting 페이지를 따로 두는가, redirection페이지에 greeting 화면을 주면 안되나'에 대해 고민해봤는데,
        // 1. 인가 코드를 발급받고 이를 통해 액세스 토큰을 요청해야 하는 절차가 있고,
        // 2. redirection 페이지에서 엔드포인트에 인가 코드를 받아오기 때문에 인가코드의 노출을 막기 위해 greeting 페이지는 따로 두는 게 아닐까.. 짐작해 봤습니다.
        navigate("/greeting");
      });
    });
  }, []);
  return <div>Redirection Page: 카카오 로그인 중 ...</div>;
};

export default Redirection;
