import Header from '../Components/Root/Header'
import '../styles/globals.css'
import '../styles/styles.css'
import '../Components/Root/Footer'
import Footer from '../Components/Root/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
