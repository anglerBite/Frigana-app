import { useAtom } from 'jotai';
import style from './ToggleGenerateBtn.module.css';
import { generateToggleAtom } from '@/app/jotai/atom';

const ToggleGenerateBtn = () => {
    const [bool, setBool] = useAtom(generateToggleAtom);

    const generateLyricBtn = () => {
        if (bool) return;
        setBool(!bool);
    };
    
    const generateTextBtn = () => {
        if (!bool) return;
        setBool(!bool);
    };

    return (
        <div className={style.container}>
            <button className={style.button} onClick={generateLyricBtn}>Lyric Generate</button>
            <button className={style.button} onClick={generateTextBtn}>Text Generate</button>
        </div>
    )
}

export default ToggleGenerateBtn