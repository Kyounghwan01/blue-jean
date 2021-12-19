import { useState, useEffect, useRef } from "react";
import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from "firebase/storage";

const storage = getStorage();

const FileInput = () => {
  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState("");
  const [preview, setPreview] = useState(null) as any;
  const fileRef = useRef() as any;

  useEffect(() => {
    if (file !== "")
      //처음 파일 등록하지 않았을 때를 방지
      setPreview(
        <img
          className="img_preview"
          style={{ width: "100px", height: "100px" }}
          src={previewURL}
          alt="previewImage"
        />
      );
    return () => {};
  }, [file, previewURL]);

  const handleFileOnChange = (event: any) => {
    //파일 불러오기
    event.preventDefault();
    let file = event.target.files[0];
    console.log("file", file);
    let reader = new FileReader() as any;

    reader.onloadend = () => {
      console.log(reader.result);
      setFile(file);
      setPreviewURL(reader.result);

      saveToFirebaseStorage(file);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleFileButtonClick = (e: any) => {
    //버튼 대신 클릭하기
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  };

  const saveToFirebaseStorage = (file: any) => {
    const uniqueKey = new Date().getTime();
    const _name = file.name
      .replace(/[~`!#$%^&*+=\-[\]\\';,/{}()|\\":<>?]/g, "")
      .split(" ")
      .join("");

    const metaData = {
      contentType: file.type
    };

    const storageRef = sRef(storage, "Images/" + _name + uniqueKey);
    const UploadTask = uploadBytesResumable(storageRef, file, metaData);
    UploadTask.on(
      "state_changed",
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      error => {
        alert(`error: image upload error ${JSON.stringify(error)}`);
      },
      () => {
        getDownloadURL(UploadTask.snapshot.ref).then(downloadUrl => {
          console.log(`완료 url: ${downloadUrl}`);
        });
      }
    );
  };

  const deleteFile = () => {
    const desertRef = sRef(
      storage,
      "Images/스크린샷 20211215 오후 4.08.15.png1639884498272"
    );

    deleteObject(desertRef)
      .then(() => {
        console.log(`delete success`);
      })
      .catch(error => {
        console.log(`delete ${error}`);
      });
  };

  return (
    <div>
      <div className="priveiw-rapping">{preview}</div>
      <div style={{ padding: 10 }}>
        <input
          ref={fileRef}
          hidden={true}
          id="file"
          type="file"
          onChange={handleFileOnChange}
        ></input>

        <button onClick={handleFileButtonClick}>UPLOAD</button>
        <button onClick={deleteFile}>DELETE</button>
      </div>
    </div>
  );
};

export default FileInput;
