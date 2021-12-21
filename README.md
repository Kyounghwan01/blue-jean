# todo

1. kakao window 정리
2. 로그인 hooks 정리
3. route suspense 정리 nono 안해야지

# firebase

1. require 어떻게

- 기능적으로는 불가 require하고 싶은 값 찾아서 있으면 반려 없으면 추가

## 문법

### 페이지네이션

```js
const usersCollectionRef = collection(db, "users");

const q = await query(usersCollectionRef, limit(3));

const documentSnapshots = await getDocs(q);
console.log(documentSnapshots.docs.length - 1); // 2

// Get the last visible document
const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

const next = query(usersCollectionRef, startAfter(lastVisible), limit(25)); // 4번 리스트 출력
```

### 에러

`The query requires an index. You can create it here xxx`

- 색인 추가해야함
- 컬렉션에 해당 db 넣고 조건 추가

## 사용해야할 kakao api

- 로그인
- 로그아웃
- 탈퇴
- 서비스 사용중인 사람 카카오 id 리스트
