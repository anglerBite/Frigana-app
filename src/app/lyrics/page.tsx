import Image from 'next/image';
import style from './page.module.css';

const page = () => {
    return (
        <main className={style.main}>
            <article className={style.detailCard}>
                <section className={style.detailHeader}>
                    <div className={style.detailImage}>
                        <Image
                            src="/ali-al-mufti--98y5HIFDs8-unsplash.jpg"
                            alt="Album Art"
                            className={style.img}
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className={style.detailInfo}>
                        <span className={style.title}>Song Title One</span>
                        <span className={style.artistName}>Artist One</span>
                    </div>
                </section>

                <section className={style.detailMain}>
                    <div className={style.detailLyrics}>
                        <ruby className={style.ruby}>
                            Sample of the song’s lyrics
                            <rt className={style.rt}>サンプルォブザソングズリリックス</rt>
                        </ruby>
                        ,
                        <ruby className={style.ruby}>
                            this is a sample of some of the song’s lyrics...
                            <rt className={style.rt}>ディスィザサンプルォブサムォブザソングズリリックス</rt>
                        </ruby>
                    </div>

                    <div className={style.actions}>
                        <button className={style.play} aria-label="再生">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                        </button>
                        <button className={style.like} aria-label="いいね">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                            </svg>
                        </button>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default page