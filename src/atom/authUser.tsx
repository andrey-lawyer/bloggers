import { atom } from "recoil";

interface User {
  email: string;
  name: string;
  timestamp: number;
  uid: string;
  userImg: string;
}

export const authUser = atom<User | null>({
  key: "autUser",
  default: null,
});
