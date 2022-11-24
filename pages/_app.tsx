import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import seo from '../next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <Html lang="en">
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </Html>
  )
}

export default MyApp
