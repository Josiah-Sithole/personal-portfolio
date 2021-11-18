//React hooks
import { useEffect } from 'react'

//import modules 
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

//React component
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  //return pages 
  return (
  <Layout>
      <Component {...pageProps} /> 
      </Layout>
  );
}

export default App


