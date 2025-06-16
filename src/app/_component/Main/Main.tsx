import TextGenerate from '../TextGenerate/TextGenerate';
import style from './Main.module.css';
// import SearchInput from './_component/SearchInput/SearchInput';
// import SearchBtn from './_component/SearchBtn/SearchBtn';
// import ResultList from './_component/ResultList/ResultList';
// import ModelBtn from './_component/ModelBtn/ModelBtn';

const Main = async () => {
    const res = await fetch('http://localhost:3000/api/get-songList');
    if (!res.ok) {
        throw new Error('フェッチ失敗');
    }
    const data = await res.json();
    console.log(data);

    return (
        <main className={style.main}>
            {/* <div className={style.searchContainer}>
                <SearchInput />
                <SearchBtn />
            </div>
                <ModelBtn />
            <ResultList data={data.response.hits}/> */}

            <TextGenerate />
        </main>
    )
}

export default Main