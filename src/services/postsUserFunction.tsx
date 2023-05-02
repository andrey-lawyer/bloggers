import { db } from "@/firebase";
import { ref, update, remove } from "firebase/database";

export function onClickVisible(idPost: string, visible: boolean) {
  const updates: any = {};
  updates["/posts/" + idPost + "/visible"] = !visible;
  return update(ref(db), updates);
}

export function onDeletePost(idPost: string) {
  const postRef = ref(db, "posts/" + idPost);
  remove(postRef);
}
