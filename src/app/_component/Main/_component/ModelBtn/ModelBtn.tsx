import style from './ModelBtn.module.css';

const ModelBtn = () => {
    return (
        <div className={style.modeButtonContainer}>
            <button className={style.button}>Song List</button>
            <button className={style.button}>Artist List</button>
        </div>
    )
}

export default ModelBtn