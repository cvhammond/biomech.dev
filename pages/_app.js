import '@/styles/global.css'
import '@/styles/prism-dracula.css'
import 'katex/dist/katex.min.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
        </>
}
