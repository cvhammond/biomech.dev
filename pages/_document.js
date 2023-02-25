import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Claire V. Hammond" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>
      <body>
        <Main />
      <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
