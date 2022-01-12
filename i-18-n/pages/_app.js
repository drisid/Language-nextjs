import '../styles/globals.css'
import {appwithTranslation} from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appwithTranslation(MyApp);
