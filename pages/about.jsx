import { useRouter } from "next/router";
import Layout from "../components/Layout"
import about from "../styles/About.module.css"
import modal from "../styles/Modal.module.css"
import section from '../styles/Section.module.css'

import en from '../locales/en';
import es from '../locales/es';
import { useState } from "react";

export default function About() {
    
    const [openModal, setOpenModal] = useState(false)

    const router = useRouter();
    const {locale} = router;
    const t = locale == 'en'? en : es
    
    return (
        <Layout
            title="About | Real Vision Enterprise"
        >
            <div className={section.mainsections}>

                <div className={about.about}>
                    <div className={about.aboutcontent}>
                        <div className={about.abouttext}>
                            <h2>{t.about}</h2>
                            <p>{t.p1}</p>
                            <p >
                            {t.p2}
                            </p>
                            <div className="newsletter">
                                <div className={about.newsletterbtn} onClick={() => setOpenModal(!openModal)}>
                                    <span className="newsletter-btn-text">{t.b1} <i className='bx bx-chevron-right'></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={openModal? modal.modal : modal.modalopen}>
                <div className={modal.modalcard}>
                    <div className={modal.header}>
                    <i onClick={() => setOpenModal(!openModal)} className='bx bx-x'></i>
                    <h2>NEWSLETTER</h2>
                    <div></div>
                    </div>
                    <form action="">
                        <input className={modal.input} type="email" placeholder="Email" />
                        <input className={modal.submit} type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </Layout>
    )
}
