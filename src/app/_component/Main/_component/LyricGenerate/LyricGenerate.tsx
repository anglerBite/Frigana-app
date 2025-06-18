import style from './LyricGenerate.module.css'
import SearchInput from './_component/SearchInput/SearchInput'
import SearchBtn from './_component/SearchBtn/SearchBtn'
import ModelBtn from './_component/ModelBtn/ModelBtn'
import ResultSongList from './_component/ResultSongList/ResultSongList'
import ResultArtistList from './_component/ResultArtistList/ResultArtistList'
import { useAtomValue } from 'jotai'
import { resultToggleBtnAtom } from '@/app/jotai/atom'

const LyricGenerate = () => {
    const frag = useAtomValue(resultToggleBtnAtom)

        // const searchMusic = async () => {
    //     try {
    //         const res = await fetch('http://localhost:3000/api/get-songList');
    //         if (!res.ok) {
    //             throw new Error('フェッチ失敗');
    //         }
    //         const data = await res.json();
    //         console.log(data);
    //         // setDataset(data);
    //     } catch {
    //         alert('曲の検索に失敗しました。');
    //     }
    // }

    return (
        <>
            <div className={style.searchContainer}>
                <SearchInput />
                <SearchBtn />
            </div>
            <ModelBtn />
            {/* <ResultList data={data.response.hits} /> */}
            {frag ? (
                <ResultSongList />
            ) : (
                <ResultArtistList />
            )}
        </>
    )
}

export default LyricGenerate