// import { get, child, ref, set } from "firebase/database";
// import { auth, database } from './firebase';

const accountSid = "AC1acdaabb9e51318d910a47dc955fe456";
const authToken = "a3103c2a42224d9996f47ee5ea6f96cf"
const client = require('twilio')(accountSid, authToken);

// export const twilio = get(child(ref(database), 'feedback')).then((snapshot) => {
//     if (snapshot.exists()) {
    export const twilio =      client.messages
              .create({
                 body: `Novo formulário da Safe Woman chegou!\n${new Intl.DateTimeFormat('pt-BR', {
                     day: '2-digit', month: 'long', year: 'numeric'
                    }).format(new Date())}`,
                 from: '+18454157495',
                 to: '+5581997528011'
               })
              .then(message => console.log(message.sid)).catch(error => console.log(error))
//     }else{
//         console.log('Feedback vazio')
//     }
// }
