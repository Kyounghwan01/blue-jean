export type AuthSliceStateType = {
  id: string;
  password: string;
  errorMessage: string | null;
  isLogin: boolean;
};

export type LoginPayloadType = {
  id: string;
  password: string;
};
