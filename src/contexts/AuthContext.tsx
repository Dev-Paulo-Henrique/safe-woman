import { useState, useEffect, createContext, ReactNode } from "react";
// import { auth, firebase } from "../services/firebase";
// import { setCookie } from "nookies";

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

// type AuthContextType = {
//   user: User | undefined;
//   signInWithGoogle: () => Promise<void>;
// };

// type AuthContextProviderProps = {
//   children: ReactNode;
// };

// const AuthContext = createContext({} as AuthContextType);

// export function AuthProvider({ children }: AuthContextProviderProps) {
//   const [user, setUser] = useState<User>();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         const { displayName, photoURL, uid } = user;

//         setCookie(undefined, "letmeask.userId", uid, {
//           maxAge: 60 * 60 * 24, // 24 hours
//         });

//         if (!displayName || !photoURL) {
//           throw new Error("Missing information from Google Account.");
//         }

//         setUser({
//           id: uid,
//           name: displayName,
//           avatar: photoURL,
//         });
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   async function signInWithGoogle() {
//     const provider = new firebase.auth.GoogleAuthProvider();

//     const result = await auth.signInWithPopup(provider);

//     if (result.user) {
//       const { displayName, photoURL, uid } = result.user;

//       if (!displayName || !photoURL) {
//         throw new Error("Missing information from Google Account.");
//       }

//       setUser({
//         id: uid,
//         name: displayName,
//         avatar: photoURL,
//       });
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         signInWithGoogle,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const AuthConsumer = AuthContext.Consumer;

// export default AuthContext;