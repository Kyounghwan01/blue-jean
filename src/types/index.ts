export interface MyWindow extends Window {
  Kakao: {
    init: (key: string) => void;
    Auth: {
      setAccessToken: (key: string) => void;
    };
    API: {
      request: any;
    };
  };
}
