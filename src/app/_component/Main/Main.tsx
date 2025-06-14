import Link from 'next/link';
import style from './Main.module.css';
import Image from 'next/image';

const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.searchContainer}>
                <input className={style.input} type="text" placeholder="Search for a song or artist" />
                <button className={style.button} type="button">Search</button>
            </div>

            <div className={style.modeButtonContainer}>
                <button className={style.button}>Song List</button>
                <button className={style.button}>Artist List</button>
            </div>

            <ul className={style.songList}>
                <li>
                    <Link href="/lyrics" className={style.li}>
                        <div className={style.imageContainer}>
                            <Image
                                src="/ali-al-mufti--98y5HIFDs8-unsplash.jpg"
                                alt="画像"
                                className={style.img}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className={style.songTitleArtistNameContainer}>
                            <span className={style.songTitle}>Song Title One</span>
                            <span className={style.artistName}>Artist One</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/lyrics" className={style.li}>
                        <div className={style.imageContainer}>
                            <Image
                                src="/ali-al-mufti--98y5HIFDs8-unsplash.jpg"
                                alt="画像"
                                className={style.img}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className={style.songTitleArtistNameContainer}>
                            <span className={style.songTitle}>Song Title Two</span>
                            <span className={style.artistName}>Artist Two</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/lyrics" className={style.li}>
                        <div className={style.imageContainer}>
                            <Image
                                src="/ali-al-mufti--98y5HIFDs8-unsplash.jpg"
                                alt="画像"
                                className={style.img}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className={style.songTitleArtistNameContainer}>
                            <span className={style.songTitle}>Songdddddddddddddddddddddddddddddddd Title Three</span>
                            <span className={style.artistName}>Artist Three</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/lyrics" className={style.li}>
                        <div className={style.imageContainer}>
                            <Image
                                src="/ali-al-mufti--98y5HIFDs8-unsplash.jpg"
                                alt="画像"
                                className={style.img}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className={style.songTitleArtistNameContainer}>
                            <span className={style.songTitle}>Song Title Oneffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddd</span>
                            <span className={style.artistName}>Artist One</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/lyrics" className={style.li}>
                        <div className={style.imageContainer}>
                            <Image
                                src="/ali-al-mufti--98y5HIFDs8-unsplash.jpg"
                                alt="画像"
                                className={style.img}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className={style.songTitleArtistNameContainer}>
                            <span className={style.songTitle}>Song Title Two</span>
                            <span className={style.artistName}>Artist Two</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/lyrics" className={style.li}>
                        <div className={style.imageContainer}>
                            <Image
                                src="/ali-al-mufti--98y5HIFDs8-unsplash.jpg"
                                alt="画像"
                                className={style.img}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className={style.songTitleArtistNameContainer}>
                            <span className={style.songTitle}>Song Title Three</span>
                            <span className={style.artistName}>Artist Three</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/lyrics" className={style.li}>
                        <div className={style.imageContainer}>
                            <Image
                                src="/ali-al-mufti--98y5HIFDs8-unsplash.jpg"
                                alt="画像"
                                className={style.img}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className={style.songTitleArtistNameContainer}>
                            <span className={style.songTitle}>Song Title One</span>
                            <span className={style.artistName}>Artist One</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/lyrics" className={style.li}>
                        <div className={style.imageContainer}>
                            <Image
                                src="/ali-al-mufti--98y5HIFDs8-unsplash.jpg"
                                alt="画像"
                                className={style.img}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className={style.songTitleArtistNameContainer}>
                            <span className={style.songTitle}>Song Title Two</span>
                            <span className={style.artistName}>Artist Two</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/lyrics" className={style.li}>
                        <div className={style.imageContainer}>
                            <Image
                                src="/ali-al-mufti--98y5HIFDs8-unsplash.jpg"
                                alt="画像"
                                className={style.img}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className={style.songTitleArtistNameContainer}>
                            <span className={style.songTitle}>Song Title Three</span>
                            <span className={style.artistName}>Artist Three</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </main>
    )
}

export default Main