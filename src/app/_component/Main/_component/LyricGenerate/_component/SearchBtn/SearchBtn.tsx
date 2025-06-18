// import { useAtom } from 'jotai';
import style from './SearchBtn.module.css'
// import { resultSearchSongAtom } from '@/app/jotai/atom';

const SearchBtn = () => {

    // const [dataset, setDataset] = useAtom(resultSearchSongAtom); // ここで必要なatomをインポートして使用する


    return (
        <button
            className={style.button}
            type="button"
        >
            Search
        </button>
    )
}

export default SearchBtn