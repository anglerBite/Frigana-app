'use client';

import style from './TextGenerate.module.css';
import Loading from '@/app/loading';
// import { franc } from 'franc';
import DOMPurify from 'dompurify';
import { useState } from 'react';

const TextGenerate = () => {

    const [text, setText] = useState<string>('');
    // const [error, setError] = useState<string>('');
    const [resultHTML, setResultHTML] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);//ローディング画面
    const [bool, setBool] = useState<boolean>(true);//生成と再生成のフラグ

    const openAiSendText = async () => {
        setLoading(true);
        //言語判定
        // const langCode = franc(text);

        // if (langCode !== 'eng' && langCode !== 'kor') {
        //     setError('英語または韓国語のテキストを入力してください。');
        //     return;
        // }

        // setError('');

        try {
            const res = await fetch('/api/openAi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            })
            if (!res.ok) {
                alert('フリガナの生成に失敗しました。');
                return;
            }
            const data = await res.json();
            console.log(data.html);
            setResultHTML(data.html);
            setText('');
            setBool(false);
            setLoading(false);
        } catch {
            alert('フリガナの生成に失敗しました。');
        }
    }

    const toggleCreateBtn = () => {
        setResultHTML('');
        setBool(true);
    }

    return (
        <div>
            <p className={style.p}>下のテキストエリアに英語か韓国語を入力し「フリガナ生成」ボタンを押すと、入力したテキストの上にフリガナが生成されます。
                <br />※テキストが短すぎると「Error」と返ってくることがあります。</p>
            {loading ? (
                <Loading />
            ) : bool ? (
                <>
                    <textarea
                        name=""
                        id=""
                        className={style.textarea}
                        value={text}
                        onChange={e => setText(e.target.value)}
                    ></textarea>
                    {/* {error && <p className={style.error}>{error}</p>} */}
                    <div className={style.buttonWrapper}>
                        <button className={style.button} onClick={openAiSendText}>フリガナ生成</button>
                    </div>
                </>
            ) : (
                resultHTML && (
                    <>
                        <div
                            className={style.result}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(resultHTML) }}
                        />
                        <div className={style.buttonWrapper}>
                            <button className={style.button} onClick={toggleCreateBtn}>フリガナ再生成</button>
                        </div>
                    </>
                )
            )
            }
        </div>
    )
}

export default TextGenerate