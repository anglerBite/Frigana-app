import Image from 'next/image';
import style from './page.module.css';
import Link from 'next/link';

const page = () => {
    return (
        <main className={style.main}>
            {/* 戻るリンク */}
            <p className={style.backLink}>
                <Link href="/artistlist" className={style.a}>&larr; アーティスト一覧に戻る</Link>
            </p>

            {/* アーティストプロフィール */}
            <section className={style.artistDetail}>
                <div className={style.artistPhoto}>
                    <Image
                        src='/ali-al-mufti--98y5HIFDs8-unsplash.jpg'
                        width={240}
                        height={240}
                        alt="Artist One"
                        className={style.img}
                    />
                </div>
                <div className={style.artistInfo}>
                    <h2 className={style.h2}>Artist One</h2>
                    <p className={style.artistBio}>
                        Artist One のプロフィール文が入ります。これまでの経歴や特徴、リリース作品などを簡潔に紹介。
                    </p>
                </div>
            </section>

            {/* 代表曲リスト */}
            <section className={style.artistSongs}>
                <h3 className={style.h3}>代表曲</h3>
                <ul className={style.ul}>
                    <li className={style.li}>
                        <Link href="/lyrics" className={style.a}>Song Title A</Link>
                    </li>
                    <li className={style.li}>
                        <Link href="/lyrics" className={style.a}>Song Title B</Link>
                    </li>
                    <li className={style.li}>
                        <Link href="/lyrics" className={style.a}>Song Title C</Link>
                    </li>
                    <li className={style.li}>
                        <Link href="/lyrics" className={style.a}>Song Title D</Link>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default page