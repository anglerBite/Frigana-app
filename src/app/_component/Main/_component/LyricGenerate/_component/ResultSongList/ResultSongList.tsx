import style from './ResultSongList.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ResultList = async () => {

    return (
        <ul className={style.songList}>
            {/* {data.map((item, index) => (
                <li key={index}>
                    <Link href="/lyrics" className={style.li}>
                        <div className={style.imageContainer}>
                            <Image
                                src={item.result.header_image_thumbnail_url || '/ali-al-mufti--98y5HIFDs8-unsplash.jpg'} // Fallback image if no imageUrl is provided
                                alt="画像"
                                className={style.img}
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className={style.songTitleArtistNameContainer}>
                            <span className={style.songTitle}>{item.result.title}</span>
                            <span className={style.artistName}>{item.result.artist_names}</span>
                        </div>
                    </Link>
                </li>
            ))} */}
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
            
        </ul>
    )
}

export default ResultList