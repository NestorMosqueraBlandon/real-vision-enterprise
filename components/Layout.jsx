import Head from "next/head"
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import header from '../styles/Header.module.css'
import footer from '../styles/Footer.module.css'
import Sidemenu from "./Sidemenu"
import { useState } from "react"

export default function Layout({ children, title, description, scroll }) {

    const [openMenu, setOpenMenu] = useState(false)
    
    return (
        <div className={styles.body}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href="http://www.realvisionenterprise.com/" />

                <link rel="icon" href="/favicon.ico" />

                <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

            </Head>
            <header className={header.header}>
                <div className={header.headerpivot}></div>
                <Link href="/">
                    <a>
                        <div className={header.logo}>
                            <Image className={header.img} src="/img/logo192.png" alt="Real Vision Enterprise Logo" height={100} width={100} />
                        </div>
                    </a>
                </Link>
                <div className={header.menu} onClick={() => setOpenMenu(!openMenu)}>
                    <div className={header.menubaruno}></div>
                    <div className={header.menubardos}></div>
                </div>

                <div className={!openMenu ? header.menucontent : header.menucontentopen}>
                    <div className={header.menulinks}>
                        <div className={header.pageone}>
                            <i class='bx bx-chevron-right' ></i>
                            <p><a href="/">Home</a></p>
                        </div>
                    </div>
                    <div className={header.menucontact}>
                        <a href="mailto:hi@rvegeneral.com"><i class='bx bx-chevron-right' ></i> <p>hi@rvegeneral.com</p></a>
                        <a href="tel:+573148335345"><i class='bx bx-chevron-right' ></i>  <p> +57 3148335345</p></a>
                        <a href="https://goo.gl/maps/8VfDrMoDQbmUJ4vT8"><i class='bx bx-chevron-right' ></i>  <p> Medellin, Colombia</p></a>
                    </div>
                </div>
            </header>

            <main className={scroll ? styles.sectionsholderscroll : styles.sectionsholder}>
                {children}
            </main>
            <Sidemenu />

            <footer className={footer.footer}>
                <div className={footer.copyrights}>
                    <div className={footer.dots}>
                        <i className='bx bx-dots-horizontal-rounded' ></i>
                        <i className='bx bx-dots-horizontal-rounded' ></i>
                    </div>
                    <div className={footer.copyrightstypingp}>
                        <p>Rve <span className={footer.footerall}><span className={footer.footerbar}>/</span> All rights reserved</span></p>
                    </div>
                </div>
                <div className={footer.socials}>
                    <p className={footer.socialsP}>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            In
                        </a>
                        <span>/</span>
                        <a href="">Tw</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}


Layout.defaultProps = {
    title: "Real Vision Enterprise - Applications, Hardware, Software & Gaming",
    description: "Real vision enterprise provides a large selection of robust and modern technological solutions. We also offer daily technology news and events.",

}