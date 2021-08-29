import Link from 'next/link'
import card from '../styles/BlogCard.module.css'

export default function BlogCard({img, id, title, body}) {
    return (
        <div key={id} className={card.card} >
            <img src={img} alt="" />
            <h3 className={card.title}>
                <Link href={`/blog/${id}`}>
                    <a>
                        {id} - {title}
                    </a>
                </Link>
            </h3>
            <p className={card.body}>{body}</p>

            <div className={card.line}></div>

            <div className={card.footer}>
                <div>
                    <p>Juan Arester</p>
                    <p>Hoy</p>
                </div>

            </div>
        </div>
    )
}
