import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", //원하는 key 값 입력
  storage: localStorage,
});

export const IsLoginState = atom({
  key: "IsLoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const memberIdState = atom({
  key: "memberIdState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
