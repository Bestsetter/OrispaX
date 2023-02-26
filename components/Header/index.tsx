import style from './styles.module.css'
import Link from 'next/link'
import Image from "react-bootstrap/Image"


export default function Header() {
  return (
    <>
        <div className={style.header}>
            <Image
                className={style.full_logo}
                src="/Logo_full.svg"
                alt="OrispaX"
                width={150}
                height={50}
            />
            <Image
                className={style.logo}
                src="/Logo_simple.svg"
                alt="OrispaX"
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
                    width={24}
                    height={24}
                    style={{marginRight:'10px'}}
                />
                <Image
                    src="/Twitter_icon.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    style={{marginRight:'10px'}}
                />
                <Image
                    src="/Discord_icon.svg"
                    alt="Discord"
                    width={24}
                    height={24}
                    style={{marginRight:'10px'}}
                />
                <Image
                    src="/Telegram_icon.svg"
                    alt="Telegram"
                    width={24}
                    height={24}
                    style={{marginRight:'10px'}}
                />
                
                <Link href="https://henhown.github.io/maticswap/#/swap?use=v1" className={style.btn}>
                    Launch App
                </Link>
                
            </div>
        </div>
    </>
  )
}
