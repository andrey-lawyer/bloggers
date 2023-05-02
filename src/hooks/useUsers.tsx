import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";

import { db } from "@/firebase";
import { IUser } from "@/types/typeUser";
import { IDb } from "@/types/generics";

export function useUsers() {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    const postRef = ref(db, "users/");
    onValue(postRef, (snapshot) => {
      const data: IDb<IUser> = snapshot.val();
      if (!data) return;
      const arrayValueData: IUser[] = Object.values(data);
      setUsers(arrayValueData);
    });
  }, [db]);
  return { users };
}
