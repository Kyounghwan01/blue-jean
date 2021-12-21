const App = () => {
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";

  const kakaoAuthRedirect = () => {
    window.location.replace(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    );
  };

  return (
    <div style={{ background: "red" }}>
      {process.env.REACT_APP_KAKAO_REST_API_KEY}
      카카오 로그인을 합시다
      <img
        src="/static/image/auth/kakao-login-btn.png"
        alt="카카오로그인버튼"
        onClick={kakaoAuthRedirect}
      />
    </div>
  );
};

export default App;
