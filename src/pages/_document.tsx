import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default class MyDocument extends Document {
  render(){
    return(
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="https://d1wqzb5bdbcre6.cloudfront.net/c129603a39847da8056dccc1141bc95ba5732cf9cee3325309fc8241facf0ec2/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a644638785332343064486448626e5634553046704e58686b66475a666447567a6446396f4d45747855454a49644859304e4778335757527861445255616e4231616d67303039565579354b4872" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <meta name="google-site-verification" content="-j0SimXvp1t5MdqjZIy-zXv4IZmedaAhZeJCtFkTVJE" />
        <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
        <div dangerouslySetInnerHTML={{ __html: `
   <df-messenger
   intent="WELCOME"
   chat-title="Wendy"
   agent-id="c7cac5db-4174-48bd-b54e-2066d0f03b2c"
   language-code="pt-br"
 ></df-messenger>
` }} />
        <title>Safe Woman</title>
        </Head>
        <body>
          <Main/>
            <NextScript/>
        </body>
      </Html>
    );
  }
}