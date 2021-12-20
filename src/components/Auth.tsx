import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { MyWindow } from "../types";

const Auth = () => {
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: process.env.REACT_APP_KAKAO_CLIENT_SECRET
    });
    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );

      console.log(res);
      // 로그인을 하고 accesstoken이랑 refreshtoken을 다 알아야겠네
      // 접속할때마다  https://vlee.kr/4896

      (window as MyWindow & typeof globalThis).Kakao.Auth.setAccessToken(
        res.data.access_token
      );
      navigate("/profile", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return <div>{code}</div>;
};
export default Auth;
