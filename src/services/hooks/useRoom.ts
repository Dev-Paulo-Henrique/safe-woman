import { database } from "../firebase";
import { ref, child, onValue } from "firebase/database";

import Router from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

type QuestionType = {
  id: string;
  username: string;
  description: string;
  email: string;
  date: string;
  local: string;
};

type FirebaseQuestions = Record<
  string,
  {
    username: string;
    description: string;
    email: string;
    date: string;
    local: string;
  }
>;

export default function useRoom() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
  const roomRef = ref(database, 'forms/')
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
        databaseRoom?.questions ?? {};

      console.log('oi',databaseRoom);

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            description: value.description,
            username: value.username,
            email: value.email,
            date: value.date,
            local: value.local,
          };
        }
      );
      console.log(parsedQuestions)

      // const orderQuestionsByLikeCount = parsedQuestions.sort((roomA, roomB) =>
      //   roomA.type < roomB.type ? -1 : roomA.type > roomB.type ? 1 : 0
      // );

      // const orderQuestionByNotAnswer = orderQuestionsByLikeCount.sort((roomA, roomB) => 
      //   roomA.isAnswered > roomB.isAnswered ? 1 : roomA.isAnswered < roomB.isAnswered ? -1 : 0
      // );

      setTitle(databaseRoom?.title);
      // setQuestions(orderQuestionByNotAnswer);
    });

    // return () => {
    //   roomRef.off("value");
    // };
  }, []);

  return { questions, title };
}