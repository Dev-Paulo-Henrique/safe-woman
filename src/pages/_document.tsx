import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(){
    return(
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link rel="stylesheet" href="css/gallery.theme.css"/>
        <link rel="stylesheet" href="css/gallery.min.css"/> */}
        <link rel="shortcut icon" href="https://trello.com/1/cards/629a99a52a684d06bb95777e/attachments/62c7695a1f1eaf7c9288df4c/download/icon-removebg-preview_(1).png" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <meta name="google-site-verification" content="-j0SimXvp1t5MdqjZIy-zXv4IZmedaAhZeJCtFkTVJE" />
        <meta charSet="utf-8"/>
        <div dangerouslySetInnerHTML={{ __html: `
   <df-messenger
   intent="WELCOME"
   chat-title="Assistente Wendy"
   agent-id="c7cac5db-4174-48bd-b54e-2066d0f03b2c"
   language-code="pt-br"
   chat-icon="https://media3.giphy.com/media/3o7bufqaqoHMTlvM9q/100w.gif?cid=ad960664ijl6r757bdt0ghmk9zs1oj0p8qpayown0p3sqmqh&rid=100w.gif&ct=s"
 ></df-messenger>
` }} />
        </Head>
        <body>
          <Main/>
            <NextScript/>
        </body>
      </Html>
    );
  }
}
