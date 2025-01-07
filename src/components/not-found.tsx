import { CSSProperties } from 'react'
import Layout from './shared/layout'

const NotFound = () => {
    const style: CSSProperties = {
        fontWeight: 'bold',
        textAlign: 'center',
    }


    return (
        <Layout>
            <p style={style}>Unfortunately we can't find that page</p>
        </Layout>
    )
}
export default NotFound