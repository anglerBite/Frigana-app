'use client';

import { useAtomValue } from 'jotai';
import style from './Main.module.css';
import LyricGenerate from './_component/LyricGenerate/LyricGenerate';
import TextGenerate from './_component/TextGenerate/TextGenerate';
import { generateToggleAtom } from '@/app/jotai/atom';
import ToggleGenerateBtn from './_component/ToggleGenerateBtn/ToggleGenerateBtn';

const Main = () => {

    const frag = useAtomValue(generateToggleAtom)

    return (
        <main className={style.main}>
            <ToggleGenerateBtn />
            {frag ? (
                <LyricGenerate />
            ) : (
                <TextGenerate />
            )}
        </main>
    )
}

export default Main