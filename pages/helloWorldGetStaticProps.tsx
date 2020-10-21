import { GetStaticProps } from 'next'

type MemberOfPropsForHelloWorldGetStatic = {
    tag_string: string
}
// type PropsForHelloWorldGetStaticProps = {
//     props: MemberOfPropsForHelloWorldGetStatic
// }

const HelloWorldGetStaticProps = (object: MemberOfPropsForHelloWorldGetStatic) => {
    return <div>{object.tag_string}</div>
}

export const getStaticProps: GetStaticProps = async () => {
//export const getStaticProps: GetStaticProps = () => {     // これはエラーになる。 async型関数でないとダメ。
    let props_member: MemberOfPropsForHelloWorldGetStatic = {
        tag_string: `Hello World! (getStaticProps x TypeScript version)`
    }

    // let return_val: PropsForHelloWorldGetStaticProps = {
    //     props: props_member
    // }

    return {
        props: props_member
    }
}

export default HelloWorldGetStaticProps