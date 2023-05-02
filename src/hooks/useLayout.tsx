import { useEffect } from "react";
import { authUser } from "@/atom/authUser";
import { app } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { child, getDatabase, ref, get } from "firebase/database";
import { useRecoilState } from "recoil";
import { IUser } from "@/types/typeUser";

export function useLayout() {
  const [currentUser, setCurrentUser] = useRecoilState(authUser);

  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchUser = async () => {
          const current = auth.currentUser?.providerData[0];
          const dbRef = ref(getDatabase());
          const snapshot = await get(child(dbRef, `users/${current?.uid}`));
          if (snapshot.exists()) {
            const getUsers: IUser = await snapshot.val();
            setCurrentUser(getUsers);
          } else {
            console.log("No data available");
          }
        };
        fetchUser();
      } else {
        console.log("User is signed out");
      }
    });
  }, []);
  return { currentUser, auth, setCurrentUser };
}
