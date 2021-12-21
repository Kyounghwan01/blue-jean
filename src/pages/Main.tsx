import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MyWindow } from "types";
import { db } from "api/firebase";
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { login } from "features/userSlice";
import { UserSliceStateType } from "features/types/userSliceType";
import { RootState } from "app/store";

const kakao = (window as MyWindow & typeof globalThis).Kakao;

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    (async () => {
      const token = kakao.Auth.getAccessToken();
      if (token) {
        const usersCollectionRef = collection(db, "users");
        const q = await query(usersCollectionRef, where("token", "==", token));
        const data = await getDocs(q);
        const user = data.docs.map(doc => ({
          ...doc.data()
        }))[0] as UserSliceStateType;
        console.log(user);
        dispatch(login(user));
      }
    })();
  }, []);

  return <div>main {JSON.stringify(user)}</div>;
};

export default Main;
