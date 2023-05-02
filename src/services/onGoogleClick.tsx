import { app, db } from "@/firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getDatabase,
  ref,
  get,
  child,
  set,
  serverTimestamp,
} from "firebase/database";
import { NextRouter } from "next/router";

export async function onGoogleClick(router: NextRouter) {
  try {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);

    const user = auth.currentUser?.providerData[0];
    if (user) {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `users/${user?.uid}`));
      if (!snapshot.exists()) {
        const docRef = ref(db, "users/" + user.uid);
        await set(docRef, {
          name: user.displayName,
          email: user.email,
          userImg: user.photoURL,
          uid: user.uid,
          timestamp: serverTimestamp(),
        });
      }
    }
    router.push("/");
  } catch (error) {
    console.log(error);
  }
}
