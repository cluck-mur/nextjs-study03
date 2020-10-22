/**
 * 参考: https://qiita.com/matamatanot/items/1735984f40540b8bdf91
 * 
 * 上の参考サイトの章"getStaticProps"をTypeScript化
 * 
 */

// クライアントサイドでは実行されないため'isomorphic-unfetch'は必要ない
import fetch from 'node-fetch'
import { GetStaticProps } from 'next'

type PropsMember = {
    stars,
    build_time,
    address
}

// getStaticPropsで取得したスター数とビルド時の時刻を受け取る
const BuildTimeStars = (props: PropsMember) => {
    return (
        <div>
            <div>ビルド時（{props.build_time}）のNextのstar数は: {props.stars}</div>
            <div>from {props.address}</div>
        </div>
    )
}

// ビルド時に実行される
export const getStaticProps: GetStaticProps = async () => {
    const address = 'https://api.github.com/repos/vercel/next.js'
    const res = await fetch(address)
    const json = await res.json()
    const stars = json.stargazers_count
    // ビルド時刻の取得
    const build_time = new Date().toString();

    let props_member: PropsMember = {
        stars: stars,
        build_time: build_time,
        address: address
    }

    return {
        props: props_member,
    }
}

export default BuildTimeStars