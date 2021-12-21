import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/store";
import { MyWindow } from "../types";
import { db } from "api/firebase";
import { deleteDoc, doc } from "firebase/firestore/lite";
import { logOut } from "features/userSlice";

const kakao = (window as MyWindow & typeof globalThis).Kakao;

const Profile = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    kakao.Auth.logout(() => {
      dispatch(logOut());
    });
  };

  const breakout = () => {
    // 탈퇴
    kakao.API.request({
      url: "/v1/user/unlink",
      success: async (response: string) => {
        console.log(response);
        const userDoc = doc(db, "users", String(user.id));
        await deleteDoc(userDoc);
      },
      fail: function (error: string) {
        console.log(error);
      }
    });
    // logout해야 token 끊김
    logout();
  };

  return (
    <div>
      <button onClick={logout}>로그아웃</button>
      <button onClick={breakout}>탈퇴</button>
      {JSON.stringify(user)}
      <h2>{user.id}</h2>
      <h2>{user.name}</h2>
      <img src={user.profileImage} alt="profile" />
    </div>
  );
};
export default Profile;
