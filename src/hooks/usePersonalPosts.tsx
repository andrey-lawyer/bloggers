import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onValue, ref } from "firebase/database";

import { db } from "@/firebase";
import { IPost } from "@/types/typePosts";
import { IDb } from "@/types/generics";

export function usePersonalPosts() {
  const {
    query: { id },
  } = useRouter();
  const [postsVisible, setPostsVisible] = useState<IPost[]>([]);
  useEffect(() => {
    if (!id) return;
    const postRef = ref(db, "posts/");
    onValue(postRef, (snapshot) => {
      const data: IDb<IPost> = snapshot.val();

      if (!data) return;
      const arrayValueData: IPost[] = Object.values(data);
      const posts = arrayValueData
        .filter((el) => el.visible === true && el.userId === id)
        .sort((a, b) => b.timestamp - a.timestamp);
      setPostsVisible(posts);
    });
  }, [db, id]);
  return { postsVisible };
}
