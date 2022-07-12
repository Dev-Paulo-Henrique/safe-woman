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
        {/* <link rel="shortcut icon" href="https://d1wqzb5bdbcre6.cloudfront.net/c129603a39847da8056dccc1141bc95ba5732cf9cee3325309fc8241facf0ec2/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a644638785332343064486448626e5634553046704e58686b66475a666447567a6446396f4d45747855454a49644859304e4778335757527861445255616e4231616d67303039565579354b4872" type="image/png" /> */}
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