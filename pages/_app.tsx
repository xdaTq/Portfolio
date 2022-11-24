import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import seo from '../next-seo.config'
import { Html } from 'next/document'

function MyApp({ Component, pageProps }) {
  return (
    <Html lang="en">
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </Html>
  )
}

export default MyApp
