import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Auth from "../components/Auth";
import Profile from "../components/Profile";
// import PrivateRoute from "./PrivateRouter";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>span</>} />
        <Route path="/login" element={<App />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>Page not Found</div>} />
      </Routes>
    </Router>
  );
};

export default Index;
