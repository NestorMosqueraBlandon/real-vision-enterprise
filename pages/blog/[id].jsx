import Layout from "../../components/Layout";

export default function post({data}) {
    return (
        <Layout title={data.title}>
            <h2 className="title">{data.title}</h2>
            <p className="body">{data.body}</p>
        </Layout>
    )
}

export async function getStaticPaths(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        const paths = data.map(({id}) => ({params: {id: `${id}`}}))
        return {
            paths,
            fallback: false
        }
    }catch(err){
        console.log(err)
    }
}


export async function getStaticProps ({params}) {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
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
