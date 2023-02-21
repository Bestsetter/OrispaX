// import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from "react-bootstrap/Image"


export default function Header() {
  return (
    <>
        <div className={styles.description} style={{paddingTop:'45px'}}>
            <Image
                src="/Logo_full.svg"
                alt="OrispaX"
                className={styles.vercelLogo}
                width={150}
                height={50}
            />
            <div style={{display:'flex',alignItems:'center'}}>
                <div style={{marginRight:'10px',color:'#D4C7DF'}}>
                    Doc
                </div>
                <Image
                    src="/Medium_icon.svg"
                    alt="Medium"
                    className={styles.vercelLogo}
                    width={24}
                    height={24}
                    style={{marginRight:'10px'}}
                />
                <Image
                    src="/Twitter_icon.svg"
                    alt="Twitter"
                    className={styles.vercelLogo}
                    width={24}
                    height={24}
                    style={{marginRight:'10px'}}
                />
                <Image
                    src="/Discord_icon.svg"
                    alt="Discord"
                    className={styles.vercelLogo}
                    width={24}
                    height={24}
                    style={{marginRight:'10px'}}
                />
                <Image
                    src="/Telegram_icon.svg"
                    alt="Telegram"
                    className={styles.vercelLogo}
                    width={24}
                    height={24}
                    style={{marginRight:'10px'}}
                />
                
                <Link href="https://henhown.github.io/maticswap/#/swap?use=v1" style={{width:"122px",height:"26px",background:'#A776D4',color:'#ffffff',borderRadius:'13px'}}>
                    Launch App
                </Link>
                
            </div>
        </div>
    </>
  )
}
