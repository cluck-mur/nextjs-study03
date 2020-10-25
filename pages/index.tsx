import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Home = ({ err }) => {
  // const router = useRouter()

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
        <div>
          <Link href="ssrStars"><a>SsrStars</a></Link>
        </div>
        <div>
          <form action="" method="post">
            メモ: <input type="text" name="memo" size="40"></input><br />
            <input type="submit" value="OK"></input>
          </form>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //console.log(context)
  const trailers = context.req.trailers
  console.log(trailers)

  return {
    props: {
      err: 0
    }
  }
}

export default Home