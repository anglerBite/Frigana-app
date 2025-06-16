'use client'

import { searchTextAtom } from '@/app/jotai/atom'
import style from './SearchInput.module.css'
import { useAtom } from 'jotai'

const SearchInput = () => {

    const [text, setText] = useAtom(searchTextAtom);

    return (
        <input
            className={style.input}
            type="text"
            placeholder="Search for a song or artist"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    )
}

export default SearchInput