import Slider from 'react-touch-drag-slider'
import Layout from '../components/Layout'
import section from '../styles/Section.module.css'
import founder from '../styles/Founder.module.css'
import about from "../styles/About.module.css"
import Image from 'next/image'
import Link from 'next/link'

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

export default function Team() {
    return (
        <Layout
        title="Team | Real Vision Enterprise"
        >
            <div className={section.mainsections}>
                <div className={founder.about}>
                    <div className={about.aboutcontent}>
                        <div className={about.abouttext}>
                            <h2>Team</h2>
                            <p>
                                Our founding team and executive management are pioneers in developing next-generation technology solutions.

                            </p>
                            <p >
                                We are environmental, engineers,
                                technicians and researchers.
                            </p>
                            <p >
                            But perhaps most importantly, we all have people in our lives who have been shocked by technology.
                            </p>
                        </div>

                    </div>
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

        </Layout>
    )
}
