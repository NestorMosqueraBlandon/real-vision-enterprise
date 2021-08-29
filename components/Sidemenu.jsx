import sidemenu from '../styles/Sidemenu.module.css'
import Link from 'next/link'

export default function Sidemenu() {
    return (
        <div className={sidemenu.sidemenu}>
            <Link href="/">
            <a>
                    <div className={sidemenu.btn}>
                        <div className={sidemenu.btn1}>
                            <div className={sidemenu.dot}></div>
                        </div>    
                    </div>        
            </a>
            </Link>
            <Link href="/about">
            <a>
                    <div className={sidemenu.btn}>
                        <div className={sidemenu.btn1}>
                            <div className={sidemenu.dot}></div>
                        </div>    
                    </div>        
            </a>
            </Link>
            <Link href="/mission">
            <a>
                    <div className={sidemenu.btn}>
                        <div className={sidemenu.btn1}>
                            <div className={sidemenu.dot}></div>
                        </div>    
                    </div>        
            </a>
            </Link>
            <Link href="/blog">
            <a>
                    <div className={sidemenu.btn}>
                        <div className={sidemenu.btn1}>
                            <div className={sidemenu.dot}></div>
                        </div>    
                    </div>        
            </a>
            </Link>
            <Link href="/team">
            <a>
                    <div className={sidemenu.btn}>
                        <div className={sidemenu.btn1}>
                            <div className={sidemenu.dot}></div>
                        </div>    
                    </div>        
            </a>
            </Link>
            <Link href="/contact">
            <a>
                    <div className={sidemenu.btn}>
                        <div className={sidemenu.btn1}>
                            <div className={sidemenu.dot}></div>
                        </div>    
                    </div>        
            </a>
            </Link>
              
        </div>
    )
}
