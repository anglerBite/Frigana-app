import style from './TextGenerate.module.css';
import Textarea from './_component/Textarea';

const TextGenerate = () => {

    return (
        <div>
            <p className={style.p}>下のテキストエリアに英語を入力し「フリガナ生成」ボタンを押すと、フリガナが生成されます。</p>
            <Textarea />
            <div className={style.buttonWrapper}>
                <button className={style.button}>フリガナ生成</button>
            </div>
        </div>
    )
}

export default TextGenerate