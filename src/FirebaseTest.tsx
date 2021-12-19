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
  where,
  orderBy,
  limit,
  startAfter
} from "firebase/firestore/lite";
import FileInput from "./FileInput";

function App() {
  const [users, setUsers] = useState<
    { name: string; age: number; id: string }[]
  >([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    (async () => {
      // age > 10 이면 10보댜 큰거 가져옴
      // 무조건 키가 같아야한데, 키가 들리면 어떻게 해야하지..?
      // 조건 두개 이상이면 색인에 추가하기 -> 색인 추가하면 where도 사용가능
      const q = await query(
        usersCollectionRef,
        // where("name", "!=", "ㅇNkh"),
        orderBy("name", "desc"),
        orderBy("age", "desc"),
        limit(1)
      );

      const documentSnapshots = await getDocs(q);
      console.log(documentSnapshots.docs.length - 1);

      // Get the last visible document
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      console.log("last", lastVisible);

      // Construct a new query starting at this document,
      // get the next 25 cities.
      const next = query(
        usersCollectionRef,
        startAfter(lastVisible),
        limit(25)
      );

      const data = await getDocs(next);
      const newData = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })) as any;
      setUsers(newData);
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
      // 일부든 전부들 다 바꾸네
      const res = await updateDoc(userDoc, { age: age + 1 });
      console.log(res);
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
      <FileInput />
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
    </>
  );
}

export default App;
