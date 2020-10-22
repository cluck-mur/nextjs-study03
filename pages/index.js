import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Link href="helloWorld"><a>Hello World!</a></Link>
        </div>
        <div>
          <Link href="helloWorldGetStaticProps"><a>Hello World! with getStaticProps</a></Link>
        </div>
        <div>
          <Link href="buildTimeStars"><a>BuildTimeStars</a></Link>
        </div>
      </main>
    </div>
  )
}
