import { authUser } from "@/atom/authUser";
import { db } from "@/firebase";
import { IDb } from "@/types/generics";
import { IPost } from "@/types/typePosts";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export function usePostsUser() {
  const [postsUser, setPostsUser] = useState<IPost[]>([]);
  const [currentUser] = useRecoilState(authUser);
  useEffect(() => {
    if (!currentUser) return;
    const postRef = ref(db, "posts/");
    onValue(postRef, (snapshot) => {
      const data: IDb<IPost> = snapshot.val();
      if (!data) return;
      const arrayValueData: IPost[] = Object.values(data);
      const postsCurrentUser = arrayValueData
        .filter((el) => el.userId === currentUser?.uid)
        .sort((a, b) => b.timestamp - a.timestamp);
      setPostsUser(postsCurrentUser);
    });
  }, [db, currentUser]);
  return { postsUser };
}
