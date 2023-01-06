import Header from '../Components/Root/Header'
import '../styles/globals.css'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return <>
      <Header/>
      <Component {...pageProps} />    
  </>
}

export default MyApp
