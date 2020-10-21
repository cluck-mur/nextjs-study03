import { GetStaticProps } from 'next'
import { FunctionComponent } from 'react'

const HelloWorld = ({ tag_string }) => {
    return <div>{tag_string}</div>
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            tag_string: 'Hello World! with getStaticProps X Typescript'
        }
    }
}

export default HelloWorld