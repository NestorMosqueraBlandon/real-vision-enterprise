import Slider from 'react-touch-drag-slider'
import Layout from '../components/Layout'
import section from '../styles/Section.module.css'
import founder from '../styles/Founder.module.css'
import about from "../styles/About.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import es from '../locales/es';
import en from '../locales/en';



export default function Team() {
    
    const router = useRouter();
    const {locale} = router;
    const t = locale == 'en'? en : es

    
const data = [
    {
        url: "/img/cto.png",
        title: "CTO",
        name: "Luis Mosquera"
    },
    {
        url: "/img/cmo.png",
        title: "CMO",
        name: "Jhonier Pizarro"
    },
    {
        url: "/img/pm.png",
        title: "CPM",
        name: "Javier Caldea"
    },
    {
        url: "/img/ceo.png",
        title: "CEO",
        name: "Nestor Mosquera"
    },
    {
        url: "/img/cio.png",
        title: "CIO",
        name: "Juan Chaverra"
    },
    {
        url: "/img/cso.png",
        title: "CSO",
        name: "Maria Gonzalez"
    }
]


    return (
        <Layout
        title={`${t.team} | Real Vision Enterprise`}
        >
            <div className={section.mainsections}>
                <div className={founder.about}>
                    <div className={about.aboutcontent}>
                        <div className={about.abouttext}>
                            <h2>{t.team}</h2>
                            <p>
                                {t.p5}
                            </p>
                            <p >
                                {t.p6}
                            </p>
                            <p >
                                {t.p7}
                            </p>
                        </div>

                    </div>
                    <div className="container-card">

                    <Slider
                        onSlideComplete={(i) => {
                            console.log('finished dragging, current slide is', i)
                        }}
                        onSlideStart={(i) => {
                            console.log('started dragging on slide', i)
                        }}
                        activeIndex={0}
                        threshHold={100}
                        transition={0.5}
                        scaleOnDrag={true}
                        >
                        {data.map(({ url, title, name }, index) => (
                            <div key={index} className={founder.teamimg}>
                                <Image src={url} alt={title} width={100} height={100} />
                                <div className={founder.right}>

                                    <div className={founder.socialmedia}>
                                        <Link href="/">
                                        <a><i className='bx bxl-linkedin'></i></a>
                                        </Link>
                                        <Link href="/">
                                        <a ><i className='bx bxl-instagram' ></i></a>
                                        </Link>
                                    </div>
                                    <p>{name}</p>
                                    <h2>{title}</h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                        </div>

                </div>



            </div>

        </Layout>
    )
}
