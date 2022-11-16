import '../styles/globals.css'
import Layout from "../components/layouts/layout/Layout"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
