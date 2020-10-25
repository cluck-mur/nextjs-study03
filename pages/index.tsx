import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import getRawBody from 'raw-body';
import formUrlDecoded from 'form-urldecoded'

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
            メモ: <input type="text" name="memo" size={40}></input><br />
            <input type="submit" value="OK"></input>
          </form>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //#region // POSTメッセージからBodyを取得する
  if (context.req.method == 'POST') {
    const body = await getRawBody(context.req)
    const body_string = body.toString()
    const body_json = formUrlDecoded(body_string)
    console.log(body_json)
  }
  //#endregion　// POSTメッセージからBodyを取得する

  return {
    props: {
      err: 0
    }
  }
}

export default Home