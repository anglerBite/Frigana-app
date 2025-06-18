import style from './ResultArtistList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const ResultArtistList = () => {
    return (
        <ul className={style.artistList}>
            <li className={style.artistCard}>
                <Link href='/artist' className={style.artistCardLink}>
                    <Image
                        src='/ali-al-mufti--98y5HIFDs8-unsplash.jpg'
                        width={300}
                        height={300}
                        alt="Artist One"
                        className={style.img}
                    />
                    <h2 className={style.h2}>
                        ArtistOne
                    </h2>
                </Link>
            </li>
            <li className={style.artistCard}>
                <Link href='/artist' className={style.artistCardLink}>
                    <Image
                        src='/ali-al-mufti--98y5HIFDs8-unsplash.jpg'
                        width={300}
                        height={300}
                        alt="Artist One"
                        className={style.img}
                    />
                    <h2 className={style.h2}>Artistaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
                </Link>
            </li>
        </ul>
    )
}

export default ResultArtistList