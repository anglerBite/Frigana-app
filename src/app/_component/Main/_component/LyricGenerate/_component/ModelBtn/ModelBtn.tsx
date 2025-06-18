import { useAtom } from 'jotai';
import style from './ModelBtn.module.css';
import { resultToggleBtnAtom } from '@/app/jotai/atom';

const ModelBtn = () => {
    const [bool, setBool] = useAtom(resultToggleBtnAtom)

    const resultSongBtn = () => {
        if (bool) return;
        setBool(!bool);
    };

    const resultArtistBtn = () => {
        if (!bool) return;
        setBool(!bool);
    };

    return (
        <div className={style.modeButtonContainer}>
            <button className={style.button} onClick={resultSongBtn}>Song List</button>
            <button className={style.button} onClick={resultArtistBtn}>Artist List</button>
        </div>
    )
}

export default ModelBtn