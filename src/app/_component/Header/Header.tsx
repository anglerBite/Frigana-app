import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href='/' className={styles.h1}>Frigana</Link>
            <div className={styles.headerButtonContainer}>
                {/* <div className={styles.headerButton} aria-label="ダークモード切替">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79first0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                </div> */}
            </div>
        </header>
    )
}

export default Header