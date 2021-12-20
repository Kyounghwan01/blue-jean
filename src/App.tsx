const App = () => {
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div style={{ background: "red" }}>
      카카오 로그인을 합시다
      <h1>
        <a href={KAKAO_AUTH_URL}>카톡카톡</a>
      </h1>
    </div>
  );
};

export default App;
