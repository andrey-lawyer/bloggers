import {
  child,
  getDatabase,
  push,
  ref,
  serverTimestamp,
  update,
} from "firebase/database";
import { useRecoilState } from "recoil";

import { authUser } from "@/atom/authUser";
import { modalState } from "@/atom/modalState";
import { IDb } from "@/types/generics";
import { IPostUpdate } from "@/types/typePosts";

export function useModal() {
  const [currentUser] = useRecoilState(authUser);
  const [open, setOpen] = useRecoilState(modalState);
  const db = getDatabase();
  const userId = currentUser?.uid;
  const userName = currentUser?.name;

  async function handleSubmit(e: any) {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    const title = elements.title.value;
    const theme = elements.theme.value;
    const visible = Boolean(elements.visible.value);
    const info = elements.info.value;
    const timestamp = serverTimestamp();
    const idPost = push(child(ref(db), "posts")).key;
    const updates: IDb<IPostUpdate> = {};
    const postData = {
      title,
      theme,
      visible,
      info,
      userName,
      userId,
      timestamp,
      idPost,
    };
    updates["/posts/" + idPost] = postData;
    elements.title.value = "";
    elements.theme.value = "";
    elements.info.value = "";
    setOpen(false);
    return update(ref(db), updates);
  }
  return { open, setOpen, handleSubmit };
}
