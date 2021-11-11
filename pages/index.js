import Head from 'next/head'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Blog</title>
        <meta name="keywords" content="Next.js, Blog Next.js"/>
      </Head>

      <div>
        <h1>Welcome To Next.js Blog Web-site</h1>
        <Layout/>
      </div>
      
    </div>
  )
}
