import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import KakaoAgree from "pages/KakaoAgree";
import Main from "pages/Main";
import Profile from "../components/Profile";
// import PrivateRoute from "./PrivateRouter";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/kakao/callback" element={<KakaoAgree />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>Page not Found</div>} />
      </Routes>
    </Router>
  );
};

export default Index;
