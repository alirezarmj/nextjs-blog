import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-gray-500 min-h-screen pb-6  '>
      <Layout>
        <Head>
          <link rel="icon" href="/webDev.jpeg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </div>
  )

}
