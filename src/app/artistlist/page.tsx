import Link from 'next/link';
import Image from 'next/image';
import style from './page.module.css';

const page = () => {
    return (
        <main className={style.main}>
            <div className={style.searchContainer}>
                <input
                    type="text"
                    placeholder="Search for a song or artist"
                    className={style.input}
                />
                <button type="button" className={style.button}>Search</button>
            </div>

            <div className={style.modeButtonContainer}>
                <button className={style.button}>Song List</button>
                <button className={style.button}>Artist List</button>
            </div>

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
                <li className={style.artistCard}>
                    <Link href='/artist' className={style.artistCardLink}>
                        <Image
                            src='/ali-al-mufti--98y5HIFDs8-unsplash.jpg'
                            width={300}
                            height={300}
                            alt="Artist One"
                            className={style.img}
                        />
                        <h2 className={style.h2}>Artist</h2>
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
                        <h2 className={style.h2}>Artist</h2>
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
                        <h2 className={style.h2}>Artist</h2>
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
                        <h2 className={style.h2}>Artist</h2>
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
                        <h2 className={style.h2}>Artist</h2>
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
                        <h2 className={style.h2}>Artist</h2>
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
                        <h2 className={style.h2}>Artist</h2>
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
                        <h2 className={style.h2}>Artist</h2>
                    </Link>
                </li>
            </ul>
        </main>
    )
}

export default page