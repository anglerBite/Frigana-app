'use client';

import style from './Textarea.module.css';
import { useAtom } from 'jotai';
import { textGenerateAtom } from '@/app/jotai/atom';


const Textarea = () => {
        const [text, setText] = useAtom(textGenerateAtom);

    return (
            <textarea
                name=""
                id=""
                className={style.textarea}
                value={text}
                onChange={e => setText(e.target.value)}
            ></textarea>
    )
}

export default Textarea