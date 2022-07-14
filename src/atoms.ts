import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",   // 유니크한 key 값
  default: true,  // 기본값
});
