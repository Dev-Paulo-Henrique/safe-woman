const accountSid = "AC1acdaabb9e51318d910a47dc955fe456";
const authToken = "a3103c2a42224d9996f47ee5ea6f96cf"
const client = require('twilio')(accountSid, authToken);
export const twilio = client.messages
      .create({
         body: 'Oi, o formulário da Safe Woman chegou!',
         from: '+18454157495',
         to: '+5581997528011'
       })
      .then(message => console.log(message.sid)).catch(error => console.log(error));