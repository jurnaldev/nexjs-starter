import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-5xl">
          Welcome to <a className="text-blue-600">Next.js!</a>
        </h1>
      </main>
    </>
  )
}

export default Home