import fetch from 'node-fetch'
import { GetServerSideProps } from 'next'
import GetToken from '../lib/getToken'

const SsrStars = ({ stars }) => {
  return <div>
    Next stars: {stars}
  </div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = GetToken()

  const headers = new Headers({ 'Authorization': `token ${token}` });
  const address = 'https://api.github.com/repos/vercel/next.js'
  // const res = await fetch(address)
  const res = await fetch(address, {
      headers: headers
  })
  const json = await res.json()
  const stars = json.stargazers_count

  return {
    props: {
      stars: stars
    }
  }
}

export default SsrStars