import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where
} from "firebase/firestore/lite";
// import ReactPlayer from "react-player";

function App() {
  const [users, setUsers] = useState<
    { name: string; age: number; id: string }[]
  >([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    (async () => {
      // age > 10 이면 10보댜 큰거 가져옴
      const q = await query(usersCollectionRef, where("name", "==", "Nkh"));

      const data = await getDocs(q);
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })) as any);
    })();
  }, []);

  const addSome = async () => {
    const res = await addDoc(usersCollectionRef, { age: 30, name: "ee" });
    console.log(res);
  };

  const updateUser = async (id: string, age: number) => {
    // 원하는 한객체만 가져옴
    const userDoc = doc(db, "users", id);
    try {
      const res = await updateDoc(userDoc, { age: age + 1 });
      console.log(res);
      // res 없어... 에러핸들링 어트케하라고....
    } catch (e) {
      console.log(e);
    } finally {
      console.log("end");
    }
  };

  const deleteUser = async (id: string) => {
    const userDoc = doc(db, "users", id);
    try {
      const res = await deleteDoc(userDoc);
      console.log(res);
      // res 없어... 에러핸들링 어트케하라고....
    } catch (e) {
      console.log(e);
    } finally {
      console.log("end");
    }
  };

  return (
    <>
      <button onClick={addSome}>추가</button>
      {users.map(user => (
        <div>
          <h1>name: {user.name}</h1>
          <h1>age: {user.age}</h1>
          <button onClick={() => updateUser(user.id, user.age)}>
            Increate age
          </button>
          <button onClick={() => deleteUser(user.id)}>delete</button>
        </div>
      ))}
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=xV6jsMCXeRs" /> */}
    </>
  );
}

export default App;
