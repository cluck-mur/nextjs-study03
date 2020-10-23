/**
 * 参考: https://qiita.com/matamatanot/items/1735984f40540b8bdf91
 * 
 * 上の参考サイトの章"getStaticPaths"をTypeScript化
 * 
 */
import fetch from 'node-fetch'
import { GetStaticPaths, GetStaticProps } from 'next'
import GetToken from '../../lib/getToken'

type PropsMember = {
    name,
    stars,
    address
}

function Vercel(props: PropsMember) {
    return (
        <div>
            <div>{props.name} stars: {props.stars}</div>
            <div>from {props.address}</div>
        </div>
    )
}

// 最初に実行される。事前ビルドするパスを配列でreturnする。
export const getStaticPaths: GetStaticPaths = async () => {
    const token = GetToken()
    const headers = new Headers({ 'Authorization': `token ${token}` });
    // zeitが管理するレポジトリを(APIのデフォルトである)30件取得する
    const res = await fetch('https://api.github.com/orgs/vercel/repos', {
        headers: headers
    })
    const repos = await res.json()
    // レポジトリの名前をパスとする
    const paths = repos.map(repo => `/vercel/${repo.name}`)
    // 事前ビルドしたいパスをpathsとして渡す fallbackについては後述
    return { paths, fallback: false }
}

// ルーティングの情報が入ったparamsを受け取る
export const getStaticProps: GetStaticProps = async ({ params }) => {
    // ファイル名のzeit/[name].jsに対応
    const name = params.name
    const token = GetToken()
    const headers = new Headers({ 'Authorization': `token ${token}` });
    //const address = `https://api.github.com/repos/zeit/${name}`
    const address = `https://api.github.com/repos/vercel/${name}`
    const res = await fetch(address, {
        headers: headers
    })
    const json = await res.json()
    const stars = json.stargazers_count

    let props_member: PropsMember = {
        name: name,
        stars: stars,
        address: address
    }

    return { props: props_member }
}

export default Vercel