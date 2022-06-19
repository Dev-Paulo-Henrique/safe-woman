import { database } from "../firebase";
import { ref, child, onValue } from "firebase/database";

import Router from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

type QuestionType = {
  username: string;
  message: string;
  email: string;
  date: string;
  tel: string;
  id: string;
} 

type FirebaseQuestions = Record<
  string,
  {
    username: string;
    message: string;
    email: string;
    date: string;
    tel: string;
  } 
>;

export default function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<FirebaseQuestions | any[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
  const roomRef = ref(database, 'feedback/')
  console.log('amore', roomRef)
    

    onValue(roomRef, (room) => {
      
      const databaseRoom = room.val();

      // if(databaseRoom?.closedAt && (user?.id !== databaseRoom?.authorId)) {
      //   toast.error("Sala foi encerrada pelo admin", {
      //     style: {
      //       background: "#F56565",
      //       color: "#FFF",
      //     },
      //     iconTheme: {
      //       primary: "#FFF",
      //       secondary: "#F56565",
      //     },
      //   });

        // Router.push("/");

        // return () => {
        //   roomRef.off("value");
        // };
      // }

      const firebaseQuestions: FirebaseQuestions =
        databaseRoom?.feedback ?? {};

      room.forEach((data) => {
        console.log('EU', data.val())
          const user = {
            id: data.key,
            message: data.val().message,
            username: data.val().username,
            email: data.val().email,
            date: data.val().date,
            tel: data.val().tel
          }
          setQuestions(<FirebaseQuestions|any>user)
      })

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            message: value.message,
            username: value.username,
            email: value.email,
            date: value.date,
            tel: value.tel,
          };
        }
      );
      // console.log('Tamanho', parsedQuestions)

      // const orderQuestionsByLikeCount = parsedQuestions.sort((roomA, roomB) =>
      //   roomA.type < roomB.type ? -1 : roomA.type > roomB.type ? 1 : 0
      // );

      // const orderQuestionByNotAnswer = orderQuestionsByLikeCount.sort((roomA, roomB) => 
      //   roomA.isAnswered > roomB.isAnswered ? 1 : roomA.isAnswered < roomB.isAnswered ? -1 : 0
      // );

      // setTitle(databaseRoom?.title);
      setQuestions(databaseRoom?.form);
    });

    // return () => {
    //   roomRef.off("value");
    // };
  }, []);
  // console.log('q', questions)

  return { questions, title };
}