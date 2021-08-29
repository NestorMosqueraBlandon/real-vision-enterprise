import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import BlogCard from '../../components/BlogCard';

export default function Index({data}) {

    const backimg = 'https://linustechtips.com/uploads/set_resources_4/84c1e40ea0e759e3f1505eb1788ddf3c_pattern.png';
    return (
        <Layout 
        title="Blog | Real Vision Enterprise"
        scroll>
            <h2 className="title">BLOG</h2>
            {
                data.map(({id, title, body}) => (
                    <BlogCard id={id} title={title} body={body} img={backimg} />

                ))
            }
            <Link href="/">
                <a>Volver al inicio</a>
            </Link>
        </Layout>
    )
}

export async function getStaticProps () {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return {
            props: {
                data
            }
        } 
    }catch(err)
    {
        console.log(err)
    }
}
