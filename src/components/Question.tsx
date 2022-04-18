import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { database, ref } from "../services/firebase";
// import useAuth from "../hooks/useAuth";
// import styles from "../assets/styles/components/Question.module.scss";

type QuestionProps = {
  id?: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  likeId?: string;
  likeCount?: number;
  isAdmin?: boolean;
  roomId: string;
  isAnswered?: boolean;
  isHighlighted?: boolean;
  type: string;
  link: string;
  tom: string;
};

export default function Question({
  id,
  content,
  author,
  likeId,
  likeCount,
  tom,
  isAdmin,
  link,
  roomId,
  type,
  isAnswered = false,
  isHighlighted = false
}: QuestionProps) {
//   const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
    // if(!user) {
    //   toast.error("Necessário fazer login", {
    //     style: {
    //       background: "#F56565",
    //       color: "#FFF",
    //     },
    //     iconTheme: {
    //       primary: "#FFF",
    //       secondary: "#F56565",
    //     },
    //   });
    //   return
    // }

    // if(likeId) {
    //   await ref(database, `rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
    // } else {
    //   await ref(database, `rooms/${roomId}/questions/${questionId}/likes`).push({
    //     authorId: user?.id,
    //   });
    // }
  }

  async function handleDeleteQuestion(questionId: string) {
    // await ref(database, `rooms/${roomId}/questions/${questionId}`).remove();

    toast.success("Sugestão foi removida!", {
      style: {
        background: "#68D391",
        color: "#FFF"
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#68D391"
      }
    });
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    // await ref(database, `rooms/${roomId}/questions/${questionId}`).update({
    //   isAnswered: true,
    // });

    toast.success("Sugestão foi ouvida!", {
      style: {
        background: "#68D391",
        color: "#FFF"
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#68D391"
      }
    });
  }

  function removerAcentos(s: string) {
    return s.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
        .replace(/[- ]+/g, " ").replace('/', " - ");
      }

  async function handleHighlightQuestion(questionId: string) {
    // await ref(database, `rooms/${roomId}/questions/${questionId}`).update({
    //   isHighlighted: true,
    // });

    toast.success("Ouvindo sugestão...", {
      style: {
        background: "#4d96eb",
        color: "#FFF"
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#FFF",
      },
      icon: "📣"
    });
  }

  
  return (
    <section>
      <a>
        <p>{removerAcentos(content)}
        </p>
      <span className="status">
        { isAnswered ? 'Ministrado' : isHighlighted ? 'Estudado' : 'Não visto'}
        </span>
        </a>
      <footer>
        <div>
          <Image src={author.avatar} alt={author.name} width="32" height="32" />
          <span>{`${author.name} - ${type} - `}{tom ? tom : 'Original'}</span>
        </div>
        <div>
          {
            !isAdmin ? (
              <>
              { link ? <button
                // className={`${styles.likeButton} ${likeId ? styles.liked : ""}`}
                // type="button"
                // aria-label="Marcar como gostei"
                // onClick={() => handleLikeQuestion(id, likeId)}
              >
                {/* {likeCount > 0 && <span>{likeCount}</span>} */}
                <a href={link} target="_blank">
                <svg 
              stroke="currentColor" 
              fill="currentColor" 
              stroke-width="0" 
              viewBox="0 0 576 512" 
              height="24" 
              width="24" 
              xmlns="http://www.w3.org/2000/svg"
              >
                <path 
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              >
                </path>
              </svg></a>
              </button> : '' }
              
              <button
                // className={`${styles.likeButton} ${likeId ? styles.liked : ""}`}
                // type="button"
                // aria-label="Marcar como gostei"
                // onClick={() => handleLikeQuestion(id, likeId)}
              >
                {/* {likeCount > 0 && <span>{likeCount}</span>} */}
                <a href={`https://www.cifraclub.com.br/${content}`}>
                <img src="https://studiosol-a.akamaihd.net/cc/img/favicon.ico" alt="cifra" />
                </a>
              </button>
              { new Date().getUTCDate() === 10 && isAnswered ? <button
                  
                  type="button"
                  aria-label="Remover sugestão"
                  onClick={() => setIsModalOpen(true)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.99988H5H21" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button> : "" }
              </>
            ) : (
              <>
                {
                  !isAnswered && (
                    <>
                      <button
                        type="button"
                        aria-label="Dar destaque à sugestão"
                        onClick={() => handleHighlightQuestion(id)}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label="Marcar sugestão como respondida"
                        onClick={() => handleCheckQuestionAsAnswered(id)}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12.0003" cy="11.9998" r="9.00375" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </>
                  )
                }

                <button
                  type="button"
                  aria-label="Remover sugestão"
                  onClick={() => setIsModalOpen(true)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.99988H5H21" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            )
          }
        </div>
      </footer>
    </section>
  );
}