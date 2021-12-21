import { useEffect, useState } from "react";
import { MyWindow } from "../types";

const kakao = (window as MyWindow & typeof globalThis).Kakao;

const Profile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const getProfile = async () => {
    console.log((window as MyWindow & typeof globalThis).Kakao.API);
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      const data = await (
        window as MyWindow & typeof globalThis
      ).Kakao.API.request({
        url: "/v2/user/me"
      });
      console.log(data);
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  const logout = () => {
    const res = kakao.Auth.getAccessToken();
    console.log(res);
    const resLogout = kakao.Auth.logout(() => {
      console.log("로그아웃 되었습니다.", kakao.Auth.getAccessToken());
    });
    console.log(resLogout);
  };

  const breakout = () => {
    // 탈퇴
    kakao.API.request({
      url: "/v1/user/unlink",
      success: function (response: string) {
        console.log(response);
      },
      fail: function (error: string) {
        console.log(error);
      }
    });
  };

  return (
    <div>
      <button onClick={logout}>로그아웃</button>
      <button onClick={breakout}>탈퇴</button>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage} alt="profile" />
    </div>
  );
};
export default Profile;
