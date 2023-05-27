import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="icon" href="/JSLogo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100&family=Overpass:wght@400&family=Space+Mono&display=swap" rel="stylesheet"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
